import React from 'react'

type AccordionData = {
    title: string,
    description: string
}

type AccordionTypes = {
    data: AccordionData,
    show: boolean,
    handleToggle: React.MouseEventHandler<HTMLDivElement>
}

const Accordion = ({ data, show, handleToggle }: AccordionTypes) => {
    return (
        <div className='flex flex-col w-full gap-4 py-4 border-b border-[#0000001A]'>

            <div onClick={handleToggle} className='flex items-center justify-between w-full select-none cursor-pointer'>

                <p className='text-sm text-[#0A0A0A]'>{data?.title}</p>

                <button>
                    <img src="/icons/arrow.svg" alt="arrow" className={`w-4 h-4 ${show ? 'rotate-180' : ''}`} />
                </button>

            </div>

            {
                show ? (
                    <p className='text-[#4A5565] text-sm'>
                        {data?.description}
                    </p>
                ) : ''

            }

        </div>
    )
}

export default Accordion