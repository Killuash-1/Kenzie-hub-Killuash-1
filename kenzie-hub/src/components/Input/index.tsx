import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    register: Function
    name: string
}


export default function  Input({register, name,  ...rest}: InputProps) {
    return <input {...register(name)} {...rest} />
};
