import React from 'react'

const Header = ({title}) => {
    return (
        <header className="p-8 bg-gray-800 text-4xl text-white text-center ">
            <h1 >{title}</h1>
        </header>
    )
}

export default Header
