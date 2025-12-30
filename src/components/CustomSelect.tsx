import { useEffect, useRef, useState } from 'react'

const CustomSelect = ({
    options = [],
    icon,
    value,
    onChange,
    label = 'Select option'
}) => {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const selectedLabel =
        options.find(opt => opt.value === value)?.label || label

    return (
        <div ref={ref} className="relative w-full">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex bg-[#F3F3F5] py-2 px-3 rounded-lg items-center gap-2 w-full"
            >
                {
                    icon ? <img src={icon} alt="filter" className="w-4 h-4" /> : ''
                }

                <p className="text-sm text-[#0A0A0A] flex-1 text-left">
                    {selectedLabel}
                </p>

                <img
                    src="/icons/arrow.svg"
                    alt="arrow"
                    className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''
                        }`}
                />
            </button>

            {open && (
                <div className="absolute top-[120%] left-0 w-full bg-white rounded-lg shadow p-1 z-10">
                    {options.map(option => (
                        <button
                            key={option.value}
                            onClick={() => {
                                onChange(option.value)
                                setOpen(false)
                            }}
                            className={`w-full text-sm p-2 rounded-lg text-left mt-0.5 hover:bg-[#F3F3F5]
                                ${value === option.value
                                    ? 'bg-[#F3F3F5] font-medium'
                                    : ''
                                }
                            `}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CustomSelect
