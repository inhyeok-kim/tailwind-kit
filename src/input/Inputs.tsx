import { ChangeEvent, ReactElement, ReactNode, useCallback, useState } from "react"

interface InputProps {
    children? : ReactNode[] | ReactNode |  ReactElement
    props : InputCommponProps
}

interface InputCommponProps{
    label? : string
    isRequired? : boolean
    fullWidth? : boolean
    width? : string
}

function InputWrap({
    children, props
}:InputProps){
    return (
        <div className={` relative ${props.fullWidth ? 'w-full' : `w-[${props.width}]`}`}>
            {
                props.label ? 
                <label className="text-gray-700">
                    {props.label}
                </label> 
                :''
            }   
            {
                props.isRequired ? 
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

interface TextInputProps extends InputCommponProps{
    initValue? : string
    onChange? : Function
    placeholder? : string
    isSecret? : boolean
}

export function TextInput({
    label, isRequired = false, width,fullWidth,
    placeholder, initValue, onChange = ()=>{}, isSecret = false
}:TextInputProps){

    const [text, setText] = useState(initValue);

    function showValue(){
        if(isSecret){
            return text?.split('').map(v=>'*').join('');
        } else {
            return text;
        }
    };

    function fnOnchange(e : ChangeEvent){
        const input = e.nativeEvent.target as HTMLInputElement;
        if(!input) return;

        const { selectionStart } = input;
        setText(input.value);
        queueMicrotask(() => {
            input.setSelectionRange(selectionStart, selectionStart);
        });
    }

    return (
        <InputWrap
            props={{label,isRequired,fullWidth,width} as InputCommponProps}
        >
            <input 
                type="text" 
                className=" rounded-lg border-transparent flex-1 
                    appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 
                    placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder={placeholder}
                value={showValue()}
                onChange={(e)=>{fnOnchange(e)}}
                />
        </InputWrap>

    )
}

interface NumberInputProps extends InputCommponProps{
    value? : string
    onChange? : Function
    placeholder? : string
}

export function NumberInput({
    label, isRequired = false, width,fullWidth,
    placeholder, initValue, onChange = ()=>{}
}:TextInputProps){
    return (
        
        <InputWrap
            props={{label,isRequired,fullWidth,width} as InputCommponProps}
        >
            <input 
                type="text" 
                className=" rounded-lg border-transparent flex-1 
                    appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 
                    placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder={placeholder}
                value={initValue}
                onChange={(e)=>{onChange(e.target.value)}}
                />
        </InputWrap>

    )
}