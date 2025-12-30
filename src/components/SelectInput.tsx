
const SelectInput = ({ value, name, required, options, handleChange, width, label }) => {
    return (
        <div className={`${width || 'w-full'} relative`}>
            <select
                required={required}
                placeholder={label}
                name={name}
                value={value}
                onChange={handleChange}
                className='py-2.5 px-3 pr-10 border border-[#808080]/50 w-full text-sm outline-none rounded bg-transparent appearance-none'
            >
                {
                    label && <option value="" disabled>{label}</option>
                }
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <div className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none'>
                <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 4.5L6 9.5L11 4.5H1Z" fill="#808080" />
                </svg>
            </div>
        </div>
    );
};


export default SelectInput;