import React, { useState, Fragment } from "react";
import { useAuth } from "../../context/AuthContext";
import { useTranslations } from "../../context/TranslationsContext";
import { Container } from "react-bootstrap";

import { InputForm } from "../Global/Input/InputForm";
import { TranslationOutput } from "./TranslationOutput";

export const Translation = () => {
    const { currentUser } = useAuth();
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { addTranslation } = useTranslations();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.length > 2) {
            const translation = {
                uid: currentUser.uid,
                message: input.trim(),
                deleted: false,
            };
            try {
                setLoading(true);
                await addTranslation(translation);
                setMessage(input);
            } catch (error) {
                setError(error);
            } finally {
                setInput("");
                setLoading(false);
            }
        } else {
            setError("Text needs to be longer than 2 characters");
        }
    };

    return (
        <Fragment>
            <Container fluid className='sub-page-container'>
                <Container className='sub-page-input d-flex justify-content-center align-items-center'>
                    <InputForm
                        handleSubmit={handleSubmit}
                        inputData={input}
                        setInputData={setInput}
                        loading={loading}
                        placeholderText={"Text to be translated"}
                        error={error}
                        setError={setError}
                    />
                </Container>
            </Container>
            <TranslationOutput message={message} />
        </Fragment>
    );
};
