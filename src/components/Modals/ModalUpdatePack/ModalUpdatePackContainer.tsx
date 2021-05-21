import React, {useState} from 'react';
import ModalUpdatePack from "./ModalUpdatePack";


type ModalQuestionPropsType = {
    modalName: string
    onButtonModal: (value: string, value2?: string) => void
    onChange?: (name: string) => void
    value: string
    buttonTrue?: string
    buttonFalse?: string
    title?: string
    disabled?: boolean
}

const ModalUpdatePackContainer = (
    { modalName, onButtonModal, value,
        onChange, buttonTrue, buttonFalse, title, disabled
    }: ModalQuestionPropsType) => {

    const [show, setShow] = useState(false);
    const [update, setUpdate] = useState(false);

    const setTrue = (value: string) => {
        onButtonModal(value)
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

            <ModalUpdatePack
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

export default ModalUpdatePackContainer;