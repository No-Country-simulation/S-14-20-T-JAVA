
export default function InputComponents({ placeholder, type, name, id, isRequired, value, onInputChange }) {
    return (
        <input
            className="border-solid border-loginButtonPressed border-[1px] p-3 w-full h-{100%} rounded-full h-[50px] min-w-[350px] focus:outline-none focus:border-disabled focus:ring-1 focus:ring-disabled "
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={onInputChange}
            required={isRequired}
        />
    );
}