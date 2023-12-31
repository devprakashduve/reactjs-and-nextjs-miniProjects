
"use client"
import React from "react"
import InputBoxProps from "./input.interface"
const InputBox=(props:InputBoxProps) => {
    
    
  return (
    <div className="w-full ">
      <input
        className="flex h-10 w-full rounded-md border border-black/30  px-3 py-2 text-sm text-gray-600  placeholder:text-gray-300 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        key={props.name+props.placeholder}
        onChange={props.onChange}
        onClick={props.onClick}
        onFocus={props.onFocus}
        onKeyUp={props.onKeyUp}
      />
    </div>
  )
}
export default InputBox