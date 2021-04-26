import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";
import { TranslationsAPI } from "../../api/TranslationsAPI";
import { Container } from "react-bootstrap";

export const Profile = () => {
    const { logout, currentUser } = useAuth();
    const [translations, setTranslations] = useState([]);
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await logout();
            history.push("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchData = async () => {
        return await TranslationsAPI.fetchTranslations(currentUser.uid);
    };

    useEffect(() => {
        fetchData().then((data) => {
            setTranslations(data);
        });
    }, []);

    return (
        <Container>
            <button onClick={handleLogout}>LogOut</button>
            {translations.length
                ? translations.map((translation) => {
                      return <p key={translation.id}>{translation.message}</p>;
                  })
                : ""}
        </Container>
    );
};
