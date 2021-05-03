import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./SuperButton.module.css";

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    callFunction:()=>void //добавил для типизации функции
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        callFunction,//добавил для вызова функции
        red, className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName = `${red ? s.red : s.default} ${s.default}`;

    return (
        <button
            className={finalClassName}
            onClick={() => callFunction()} //изменил для приходящей функции
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
            // Появится возможность кнопке давать любое имя
        >{restProps.title}</button>
    );
}

export default SuperButton;