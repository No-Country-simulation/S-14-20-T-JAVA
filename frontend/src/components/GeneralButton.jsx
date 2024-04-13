import { Link, useLocation } from 'react-router-dom';

export const GeneralButton = ({ name, to }) => {
    const location = useLocation();
    const currentPath = location.pathname;
    console.log(currentPath);

    let buttonClass = '';

    if (currentPath.includes(to)) {
        if (to === '/login') {
            buttonClass =
                'flex items-center justify-center bg-loginButton  rounded-full w-[187px]  h-[39px]  hover:bg-loginButtonPressed font-semibold shadow-[-5px_1px_4px_0px_#00000038]';
        } else if (to === '/create-account') {
            buttonClass =
                'flex items-center justify-center bg-primary hover:bg-primaryPressed  rounded-full w-[187px]  h-[39px]  font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton';
        } else if (to === '/lostPass' || to === '/create-password') {
            buttonClass =
                'flex items-center justify-center bg-primary hover:bg-primaryPressed rounded-full w-full  h-[39px]  font-semibold shadow-[-5px_1px_4px_0px_#00000038] text-loginButton';
        }
    }
    return (
        <Link className={buttonClass} to={to}>
            {name}
        </Link>
    );
};
