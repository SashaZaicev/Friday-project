import React, {ChangeEvent, ReactNode} from 'react';
import Modal from '../Modal';
import s from './../modal.module.css'


type ModalQuestionType = {
    show: boolean;
    value: string;
    title?: string;
    onChange?: (name: string) => void;

    setTrue: (value: string) => void;
    setFalse: () => void;
    buttonTrue?: ReactNode;
    buttonFalse?: ReactNode;
    enableBackground?: boolean;

    backgroundOnClick?: () => void;

    width: number;
    height: number;

    modalOnClick?: () => void;
}

const ModalUpdatePack = (
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
            <div className={s.content}>
                <div className={s.inputs}>
                    <input value={value} onChange={onChangeCallback}/>
                </div>
                <div className={s.buttons}>
                    <button onClick={() => setTrue(value)}>{buttonTrue}</button>
                    <button onClick={setFalse}>{buttonFalse}</button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalUpdatePack;