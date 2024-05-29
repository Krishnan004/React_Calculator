import React from 'react';
import Button from './Button';

const Calculator = ({display,setDisplay,handleClick,handleOperatorClick,handleEqual,handleClear}) => {
    return (
        <div className=" flex justify-center items-center">
            <main 
            className=" border-2 w-72 rounded-xl p-4">
                <input 
                    className="block my-2 w-72 rounded-xl border-2 px-3 py-2 focus:outline-none focus:border-blue-500"
                    type="text"
                    value={display}
                    placeholder="Enter your value"
                />
                <Button handleOperatorClick={handleOperatorClick} handleClick={handleClick} setDisplay={setDisplay} handleEqual={handleEqual}
                handleClear={handleClear}/>
            </main>
        </div>
    );
}

export default Calculator;