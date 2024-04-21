import IconSearch from '@components/icons/IconSearch'
import BizwizOnlyLetter from '@components/icons/BizwizOnlyLetter'
import BizwizOnlyLogo from '@components/icons/BizwizOnlyLogo'
import { NavLink } from 'react-router-dom'
export const Header = () => {
  return (
    <header className='fixed top-0 left-0 right-0 flex flex-row justify-between items-center  bg-background z-10 p-5'>
        <BizwizOnlyLogo/>
        <BizwizOnlyLetter className="size-2"/> 
        
          <NavLink to="/search">
        <IconSearch/>
          </NavLink>
        </header>
  )
}
