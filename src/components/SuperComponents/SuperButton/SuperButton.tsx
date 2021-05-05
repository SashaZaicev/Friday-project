import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    error?: string
    name?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        error, className, name,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${error ? s.red : s.default} ${s.default}`;
    const nameButton = name ? name : "click"

    return (
        <button
            className={finalClassName}
            onClick={() => "Hello"}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{nameButton}</button>
    );
}

export default SuperButton;