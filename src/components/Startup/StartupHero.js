import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const StartupHero = ({ path, link }) => {
    const { currentUser } = useAuth();
    return (
        <div className='d-flex justify-content-center align-items-center pt-5'>
            <img
                src={process.env.PUBLIC_URL + "/images/Logo-Hello.png"}
                alt='logo'
            />
            <div>
                <h1 className='title' style={fontPageTitleStyles}>
                    Lost in Translation
                </h1>
                <h2 className='title mb-4'>Get started</h2>
                {!currentUser && (
                    <Link to={path} className='register-link'>
                        {link}
                    </Link>
                )}
            </div>
        </div>
    );
};

const fontPageTitleStyles = {
    fontSize: "3.5rem",
};
