import { Link } from 'react-router-dom';

export const GeneralButton = ({ name, to }) => {
    return (
        <Link
            className="flex items-center justify-center 
                bg-[#F5F5F5]  rounded-full w-[187px]  h-[39px] shadow-[-5px_1px_4px_0px_#00000038]"
            to={to}
        >
            {name}
        </Link>
    );
    
};
