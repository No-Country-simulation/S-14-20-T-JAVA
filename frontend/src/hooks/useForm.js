import { useState } from 'react';

export const useForm = (initialState = { firstlastname:'', email: '', password: '' }) => {
    const [formState, setFormState] = useState(initialState);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
        console.log(name, value)
    };

    return {
        ...formState,
        onInputChange,
    };
};
