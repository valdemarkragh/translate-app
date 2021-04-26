import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Form, Container } from "react-bootstrap";
import { TranslationsAPI } from "../../api/TranslationsAPI";

export const Translation = () => {
    const { currentUser } = useAuth();
    const [input, setInput] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const translation = {
            uid: currentUser.uid,
            message: input,
            deleted: false,
        };
        try {
            await TranslationsAPI.addTranslation(translation);
            setMessage(input);
        } catch (error) {
            console.log(error);
        } finally {
            setInput("");
        }
    };

    const RenderTranslation = () => {
        return message.split("").map((char, index) => {
            return (
                <img
                    key={index}
                    src={process.env.PUBLIC_URL + `/signs/${char}.png`}
                    alt='translate-img'
                />
            );
        });
    };

    return (
        <Container fluid className='translation-container'>
            <Container className='d-flex justify-content-center align-items-center'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder="What's your name?"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </form>
            </Container>
            <div className='translation-output'>
                {message.length ? <RenderTranslation /> : ""}
            </div>
        </Container>
    );
};
