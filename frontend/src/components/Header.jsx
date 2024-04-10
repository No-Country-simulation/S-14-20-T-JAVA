import IconSearch from '@components/icons/IconSearch'
import BizwizOnlyLetter from '@components/icons/BizwizOnlyLetter'
import BizwizOnlyLogo from '@components/icons/BizwizOnlyLogo'

export const Header = () => {
    return (
        <header className='flex flex-row justify-between items-center mb-16 mt-4'>
        <BizwizOnlyLogo/>
        <BizwizOnlyLetter className="size-2"/>    
        <IconSearch/>
        </header>
  )
}
