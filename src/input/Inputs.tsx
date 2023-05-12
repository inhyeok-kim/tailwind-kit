import { ReactElement, ReactNode } from "react"

interface InputCommponProps{
    children? : ReactNode[] | ReactNode |  ReactElement
    label? : string
    isRequired? : boolean
    fullWidth? : boolean
    width? : string
}

function InputWrap({
    label, isRequired,children, fullWidth, width='100px'
}:InputCommponProps){
    return (
        <div className={` relative ${fullWidth ? 'w-full' : `w-[${width}]`}`}>
            {
                label ? 
                <label className="text-gray-700">
                    {label}
                </label> 
                :''
            }   
            {
                isRequired ? 
                <span className="text-red-500 required-dot">
                    *
                </span>
                :''
            }
            {
                children
            }
        </div>

    )
}

interface TextInputProps{
    label? : string
    isRequired? : boolean
    value? : string
    onChange? : Function
}

export function TextInput({
    label, isRequired = false
}:TextInputProps){
    return (
        
        <InputWrap
            label={label}
            isRequired={isRequired}
        >
            <input 
                type="text" 
                className=" rounded-lg border-transparent flex-1 
                    appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 
                    placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Your email"/>
        </InputWrap>

    )
}