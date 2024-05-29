import React from 'react'

const Button = ({setDisplay,handleClick,handleOperatorClick,handleEqual,handleClear}) => {
    return (
        <button>
             <input  className="btn" type="button" value="1" 
             onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="2"
             onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="3"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="+"
            onClick={(e)=>handleOperatorClick(e.target.value)}/>
            <input className="btn" type="button" value="4"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="5"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="6"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="-"
            onClick={(e)=>handleOperatorClick(e.target.value)}/>
            <input className="btn"type="button" value="7"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="8"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="9"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="*"
            onClick={(e)=>handleOperatorClick(e.target.value)}/>
            <input className="btn" type="button" value="AC"
            onClick={handleClear}/>
            <input className="btn" type="button" value="0"
            onClick={(e)=>handleClick(e.target.value)}/>
            <input className="btn" type="button" value="="
            onClick={(e)=>handleEqual(e.target.value)}/>
            <input className="btn" type="button" value="/"
            onClick={(e)=>handleOperatorClick(e.target.value)}/>
        </button>
    )
}

export default Button
