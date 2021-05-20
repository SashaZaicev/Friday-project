import React, {ChangeEvent, ReactNode} from 'react';
import Modal from '../Modal';
import s from './../modal.module.css'


type ModalQuestionType = {
    show: boolean;
    value: string;
    title?: string;
    onChange?: (name: string) => void;

    setTrue: (name: string) => void;
    setFalse: () => void;
    buttonTrue?: ReactNode;
    buttonFalse?: ReactNode;

    enableBackground?: boolean;
    /*backgroundStyle?: CSSProperties;*/
    backgroundOnClick?: () => void;

    width: number;
    height: number;

    /*modalStyle?: CSSProperties;*/
    modalOnClick?: () => void;
}

const ModalUpdate = (
    {
        setTrue, setFalse, title, buttonTrue, buttonFalse,
        enableBackground, backgroundOnClick = () => {},
        width, height, modalOnClick = () => {},
        show, value, onChange,
    }: ModalQuestionType
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value);
    }

    return (
        <Modal
            enableBackground={enableBackground} backgroundOnClick={backgroundOnClick}
            width={width} height={height} modalOnClick={modalOnClick}
            show={show}
        >
            {title ? title : 'question Modal'}
            <div className={s.buttons}>
                <input value={value} onChange={onChangeCallback}/>
                <div>
                    <button onClick={() => setTrue(value)}>{buttonTrue}</button>
                    <button onClick={setFalse}>{buttonFalse}</button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalUpdate;