import React from 'react'
import Listitem from './Listitem'
import Data from '../data'

const List = () => {
    return (
        <div className='w-5/6 bg-white flex flex-col space-y-5 sm:space-y-0 sm:flex-row items-center sm:items-start justify-between sm:space-x-5 p-8 rounded-xl shadow-lg'>
            <h1 className='sm:w-1/4 font-semibold text-4xl'>Questions And Answers About Login</h1>
            <ul className='sm:w-1/2 text-xl space-y-5'>
                {Data.map(element => <Listitem key={element.id} {...element} />)}
            </ul>
        </div>
    )
}

export default List
