import React, {ChangeEvent, ReactNode} from 'react';
import Modal from '../Modal';
import s from './../modal.module.css'


type ModalQuestionType = {
    show: boolean;
    question: string;
    answer: string
    title?: string;
    onChange?: (question: string) => void;
    onChange2?: (answer: string) => void;

    setTrue: (question: string, answer: string) => void;
    setFalse: () => void;
    buttonTrue?: ReactNode;
    buttonFalse?: ReactNode;

    enableBackground?: boolean;
    backgroundOnClick?: () => void;

    width: number;
    height: number;

    modalOnClick?: () => void;
}

const ModalUpdateCards = (
    {
        setTrue, setFalse, title, buttonTrue, buttonFalse,
        enableBackground, backgroundOnClick = () => {},
        width, height, modalOnClick = () => {},
        show, question, answer, onChange, onChange2
    }: ModalQuestionType
) => {

    const onChangeQuestion = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.currentTarget.value);
    }
    const onChangeAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        onChange2 && onChange2(e.currentTarget.value);
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
                    <input value={question} onChange={onChangeQuestion}/>
                    <input value={answer} onChange={onChangeAnswer}/>
                </div>
                <div className={s.buttons}>
                    <button onClick={() => setTrue(question, answer)}>{buttonTrue}</button>
                    <button onClick={setFalse}>{buttonFalse}</button>
                </div>
            </div>
        </Modal>
    );
};

export default ModalUpdateCards;