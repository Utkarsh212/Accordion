import React, { useState } from 'react'
import { MdExpandMore } from 'react-icons/md'
import { MdExpandLess } from 'react-icons/md'

const Listitem = (props) => {
    const [show, setShow] = useState(false)
    const handleClick = () => {
        setShow(prev => !prev)
    }
    return (
        <div className='border-2 border-red-300 shadow-md p-5 rounded-xl space-y-2'>
            <div className='flex justify-between items-center'>
                <h3 className='font-semibold text-xl'>{props.title}</h3>
                <button className='bg-red-100 hover:bg-red-300 rounded-full p-2' onClick={handleClick}>{ show ? <MdExpandLess /> : <MdExpandMore /> }</button>
            </div>
            { show ? <p className='text-sm'>{props.info}</p> : "" }
        </div>
    )
}

export default Listitem
