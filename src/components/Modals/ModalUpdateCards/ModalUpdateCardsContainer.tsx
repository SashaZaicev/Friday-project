import React, {useState} from 'react';
import ModalUpdateCards from "./ModalUpdateCards";


type ModalQuestionPropsType = {
    modalName: string
    onButtonModal: (value: string, value2?: string) => void
    onChange?: (question: string) => void
    onChange2?: (answer: string) => void
    question: string
    answer: string
    buttonTrue?: string
    buttonFalse?: string
    title?: string
    disabled?: boolean
}

const ModalUpdateCardsContainer = (
    { modalName, onButtonModal, question, answer,
        onChange, onChange2, buttonTrue, buttonFalse, title, disabled
    }: ModalQuestionPropsType) => {

    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(false);

    const setTrue = (question: string, answer: string) => {
        onButtonModal(question, answer)
        setShow(false);
    };
    const setFalse = () => {
        setUpdate(false);
        setShow(false);
    };

    return (
        <>
            <div>
                <button onClick={() => setShow(true)} disabled={disabled}>{modalName}</button>
            </div>

            <ModalUpdateCards
                show={show}

                setTrue={setTrue}
                setFalse={setFalse}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
                title={title}

                buttonTrue={buttonTrue || "Yes"}
                buttonFalse={buttonFalse || "Cancel"}
                question={question}
                answer={answer}
                onChange={onChange}
                onChange2={onChange2}
            />
        </>
    );
};

export default ModalUpdateCardsContainer;