import React, {CSSProperties, ReactNode} from 'react';
import s from './modal.module.css'

type ModalType = {
    enableBackground?: boolean;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    modalOnClick?: () => void;

    show: boolean
    children: ReactNode
    modalStyle?: CSSProperties
}

const Modal = (
    {
        enableBackground, backgroundOnClick = () => {},
        width, height, modalOnClick = () => {},
        show, children, modalStyle
    }: ModalType
) => {
    const top = `calc(50vh - ${height / 2}px)`;
    const left = `calc(50vw - ${width / 2}px)`;

    if (!show) return null;

    return (
        <div>
            {enableBackground && <div
                className={s.background}
                onClick={backgroundOnClick}
            />}
            <div
                style={{
                    top,
                    left,
                    width,
                    height,
                    ...modalStyle
                }}
                className={s.modal}
                onClick={modalOnClick}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;