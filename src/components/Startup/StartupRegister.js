import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Container } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { trimUserName } from "../../util/TrimUsername";

export const StartupRegister = () => {
    const [userName, setUserName] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup, currentUser, logout } = useAuth();
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await signup(userName);
            history.push("/translation");
        } catch (error) {
            console.log(error.code);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        return () => {
            setUserName("");
        };
    }, [history]);

    return (
        <Container fluid className='login-container'>
            <Container className='sub-login-container d-flex justify-content-center align-items-center'>
                <div className='login-title d-flex justify-content-center align-items-center'>
                    <img
                        src={process.env.PUBLIC_URL + "/images/Logo-Hello.png"}
                        alt='logo'
                    />
                    <div>
                        <h1 className='title frontpage-title'>
                            Lost in Translation
                        </h1>
                        <h2 className='title mb-5'>Get started</h2>
                        <Link to='/' className='register-link'>
                            Already got a user?
                        </Link>
                    </div>
                </div>
            </Container>
            {!currentUser ? (
                <div className='login-input rounded shadow d-flex flex-column container justify-content-center align-items-center bg-white'>
                    <form onSubmit={handleSubmit}>
                        <input
                            type='text'
                            placeholder="What's your name?"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </form>
                    {loading && <p>Logging in..</p>}
                </div>
            ) : (
                <div className='login-input rounded shadow d-flex container justify-content-center align-items-center bg-white'>
                    <p>
                        You are already logged in as{" "}
                        {trimUserName(currentUser.email)}
                    </p>
                    <button onClick={() => logout()}>Log out</button>
                </div>
            )}
        </Container>
    );
};
