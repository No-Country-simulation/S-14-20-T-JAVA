import axios from 'axios';

// Método para realizar una solicitud de resgistro y login HTTP y guardarlo en localStorage
export const LoginAndRegisterRequest = async (url, data) => {
    const baseUrl = 'http://34.49.227.176/';

    try {
        const response = await axios.post(baseUrl + url, data);
        const token = response.data.token;

        localStorage.setItem('token', token);

        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        return response;
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
};
