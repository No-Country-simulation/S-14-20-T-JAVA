import IconSearch from '@components/icons/IconSearch'
import { NavLink } from 'react-router-dom'
import LogoBIzWIz from './icons/LogoBIzWIz'
export const Header = ({Styles}) => {
  return (
    <header className={` fixed top-0 left-0 right-0 flex flex-row justify-between items-center  bg-background z-10 p-5 bg-white
    ${Styles}`}>
        <LogoBIzWIz />
        
          <NavLink to="/search">
        <IconSearch/>
          </NavLink>
        </header>
  )
}
