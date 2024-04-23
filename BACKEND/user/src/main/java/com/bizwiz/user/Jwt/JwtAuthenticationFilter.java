package com.bizwiz.user.Jwt;

import com.bizwiz.user.service.UserDetailServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserDetailServiceImpl userDetailService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // Obtener el token del encabezado de la solicitud
        final String token = getTokenFromRequest(request);
        final String username;

        // Si el token es nulo, pasar la solicitud al siguiente filtro
        if (token == null){
            filterChain.doFilter(request, response);
            return;
        }

        // Obtener el nombre de usuario del token
        username = jwtService.getUsernameFromToken(token);

        // Verificar si el nombre de usuario es válido y no hay autenticación actual
        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null)
        {
            // Cargar los detalles del usuario desde el servicio de detalles de usuario
            UserDetails userDetails = userDetailService.loadUserByUsername(username);

            // Verificar si el token es válido para el usuario
            if (jwtService.isTokenValid(token, userDetails))
            {
                // Crear una autenticación de token de nombre de usuario y establecerla en el contexto de seguridad
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                        userDetails,
                        null,
                        userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }

        // Pasar la solicitud al siguiente filtro
        filterChain.doFilter(request, response);
    }

    // Método para obtener el token de la solicitud
    private String getTokenFromRequest(HttpServletRequest request) {

        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);

        if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")){
            return authHeader.substring(7);
        }

        return null;
    }
}
