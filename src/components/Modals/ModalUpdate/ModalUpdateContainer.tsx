import React, {useState} from 'react';
import ModalUpdate from "./ModalUpdate";


type ModalQuestionPropsType = {
    modalName: string
    onButtonModal: (name: string) => void
    onChange?: (name: string) => void
    value: string
    buttonTrue?: string
    buttonFalse?: string
    title?: string
    disabled?: boolean
}

const ModalUpdateContainer = (
    { modalName, onButtonModal, value,
        onChange, buttonTrue, buttonFalse, title, disabled
    }: ModalQuestionPropsType) => {

    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState(false);

    const setTrue = (name: string) => {
        onButtonModal(name)
        setShow(false);
    };
    const setFalse = () => {
        setAnswer(false);
        setShow(false);
    };

    return (
        <>
            <div>
                <button onClick={() => setShow(true)} disabled={disabled}>{modalName}</button>
            </div>

            <ModalUpdate
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
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default ModalUpdateContainer;