import React, {ReactNode} from 'react';
import Modal from "../Modal";
import s from "./../modal.module.css"

type ModalQuestionType = {
    show: boolean;

    setTrue: () => void;
    setFalse: () => void;
    buttonTrue?: ReactNode;
    buttonFalse?: ReactNode;

    enableBackground?: boolean;
    backgroundOnClick?: () => void;

    width: number;
    height: number;
    title: string;
    modalOnClick?: () => void;
}

const ModalQuestion = (
    {
        setTrue, setFalse, buttonTrue = 'Yes', buttonFalse = 'No',
        enableBackground, backgroundOnClick = () => {},
        width, height, title, modalOnClick = () => {},
        show,
    }: ModalQuestionType
) => {

    return (
        <Modal
            enableBackground={enableBackground}
            backgroundOnClick={backgroundOnClick}

            width={width}
            height={height}
            modalOnClick={modalOnClick}

            show={show}
        >
            {title ? title : 'question Modal'}
            <div className={s.buttons}>
                <div className={s.buttons}>
                    <button onClick={setTrue}>{buttonTrue}</button>
                    <button onClick={setFalse}>{buttonFalse}</button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalQuestion;