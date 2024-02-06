import React, { FC } from 'react'
import Iconify from './icon'


const Rating = ({ activeLength }: { activeLength: number }) => {
    return (
        <div className='flex items-center'>
            {
                [1, 2, 3, 4, 5].map((_, index) => (
                    <Iconify key={index} icon="ic:round-star" className={`${index + 1 <= activeLength ? 'text-orange-400' : 'text-gray-400'
                        }`} />
                ))
            }
        </div>
    )
}

export default Rating