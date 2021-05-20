import React, {useState} from 'react';
import ModalQuestion from "./ModalQuestion";

type ModalQuestionPropsType = {
    modalName: string
    disabled?: boolean
    onButtonModal: () => void
}

const ModalQuestionContainer = ({modalName, disabled, onButtonModal}: ModalQuestionPropsType) => {
    const [show, setShow] = useState(false);
    const [answer, setAnswer] = useState(false);

    const setTrue = () => {
        onButtonModal()
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

            <ModalQuestion
                show={show}

                setTrue={setTrue}
                setFalse={setFalse}

                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={300}
                height={200}
                title={"Are you sure you want to?"}
            />
        </>
    );
};

export default ModalQuestionContainer;