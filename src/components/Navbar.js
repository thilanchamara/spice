import React from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
    const lists=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'contact'
        },

    ]
  return (
    <div className=' px-10 text-xl flex w-full justify-between   bg-gray-200  h-16 overflow-hidden items-center'>
        <div>
            <h3>Anura spice</h3>
        </div>
        <ul className=' flex gap-3'>
            {lists.map((list)=>
                <li key={list.id} className='cursor-pointer hover:scale-105 capitalize'>
                    <Link to={list.link} smooth duration={500}>{list.link}</Link>
                </li>
            )}
        </ul>
    </div>
  )
}

export default Navbar