import React from "react";
import { Container } from "react-bootstrap";

export const TranslationOutput = ({ message }) => {
    const RenderTranslation = () => {
        return message.split("").map((char, index) => {
            return (
                <img
                    key={index}
                    className='sign-image'
                    src={process.env.PUBLIC_URL + `/signs/${char}.png`}
                    alt='translate-img'
                />
            );
        });
    };
    return (
        <Container className='translation-container d-flex flex-column justify-content-center align-items-center'>
            <div className='translation-output shadow'>
                <div className='translation-output-main'>
                    {message.length ? <RenderTranslation /> : ""}
                </div>
                <div className='translation-output-footer'>
                    <span className='font-weight-bold'>Translation</span>
                </div>
            </div>
        </Container>
    );
};
