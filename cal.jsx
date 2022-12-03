import React from "react";
import { useState } from "react";
import "./cal.css"


function Calculator(){
    let [string,setstring] = useState('')
    

    function Action(e){
        if(e.target.innerText == "="){
            if(string == ''){
                setstring(string = '')
            }else{
            setstring(eval(string))}

        }else if(e.target.innerText == "DEL"){
            if(typeof string == 'number'){
                setstring(string = `${string}`)
                setstring(string = string.slice(0,-1))
            }else{
            setstring(string = string.slice(0,-1))}
        }
        else if(e.target.innerText == "AC"){
            setstring(string = '')
        }
        else{
            setstring(string+=e.target.innerText)
        }
    
       
    }
    return(
        <>
        <div className="calculator">
        <div className="calculator__output"> <input type="text" value= {string} /></div>
       <div className="calculator__keys">
        <button  onClick={Action} >1</button>
        <button  onClick={Action}>2</button>
        <button  onClick={Action}>3</button>
        <button  onClick={Action}>4</button>
        <button  onClick={Action}>5</button>
        <button  onClick={Action}>6</button>
        <button  onClick={Action}>7</button>
        <button  onClick={Action}>8</button>
        <button  onClick={Action}>9</button>
        <button  onClick={Action}>0</button>
        <button  onClick={Action}>+</button>
        <button  onClick={Action}>-</button>
        <button  onClick={Action} className = "calculator__key calculator__key--operator" >/</button>
        <button  onClick={Action}>*</button>
        <button  onClick={Action}>.</button>
        <button  onClick={Action}>DEL</button>
        <button  onClick={Action}>AC</button>
        <button  onClick={Action} className = "calculator__key calculator__key--enter">=</button>
        </div>
        </div>
        
        
        </>
    )
}
export default Calculator