import { Link, useLocation } from 'react-router-dom';

export const GeneralButton = ({ name, to, type }) => {
    const location = useLocation();
    const currentPath = location.pathname;

    let buttonClass = '';

    if (currentPath.includes(to)) {
        if (to === '/login') {
            buttonClass =
                'flex items-center justify-center bg-loginButton text-[#080808] rounded-full min-w-[211px] min-h-[50px]  hover:bg-loginButtonPressed font-semibold shadow-[-5px_1px_4px_0px_#00000038] md:text-button-font-size';
         }  else if (to === '/createuser' || (to === '/verificationcode') || (to === '/createpassword')) {
            buttonClass =
                'flex items-center justify-center bg-primary  hover:bg-primaryPressed  rounded-full min-w-[211px] min-h-[50px]  font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton md:text-button-font-size ';
        } else if (to === '/lostPass' || to === '/create-password') {
            buttonClass =
                'flex items-center justify-center bg-primary  hover:bg-primaryPressed rounded-full w-full  h-[39px]  font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton md:text-button-font-size ';
    }
}
    return (
        <button className={buttonClass} to={to} type={type}>
            {name}
        </button>
    );
};
