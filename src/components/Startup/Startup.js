import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";

import { StartupHero } from "./StartupHero";
import { InputForm } from "../Global/Input/InputForm";
import { StartupAuth } from "./StartupAuth";

export const Startup = () => {
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const { login, currentUser } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (userName.trim().length > 3 && userName.trim().length < 25) {
            try {
                setLoading(true);
                await login(userName.trim());
                history.push("/translate");
            } catch (error) {
                setError(error.code);
            } finally {
                setLoading(false);
            }
        } else {
            setError("Username must be between 4 and 24 characters long");
        }
    };

    useEffect(() => {
        return () => {
            setUserName("");
        };
    }, [history, currentUser]);

    return (
        <Container fluid className='hero-container'>
            <Container className='d-flex justify-content-center align-items-center'>
                <StartupHero path={"/register"} link={"New user?"} />
            </Container>
            {!currentUser ? (
                <div className='login-input rounded shadow d-flex flex-column container justify-content-center align-items-center bg-white'>
                    <InputForm
                        handleSubmit={handleSubmit}
                        inputData={userName}
                        setInputData={setUserName}
                        loading={loading}
                        placeholderText={"What's your name?"}
                        error={error}
                        setError={setError}
                    />
                </div>
            ) : (
                <StartupAuth />
            )}
        </Container>
    );
};
