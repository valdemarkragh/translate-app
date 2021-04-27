import React, { Fragment } from "react";
import { useTranslations } from "../../context/TranslationsContext";
import { ListGroup } from "react-bootstrap";

export const ProfileTranslation = ({ id, message }) => {
    const { deleteTranslation } = useTranslations();

    return (
        <Fragment>
            <ListGroup.Item
                style={listItemStyles}
                className='d-flex justify-content-between align-items-center'>
                {message}{" "}
                <i
                    className='bi bi-trash'
                    style={iconStyles}
                    onClick={() => deleteTranslation(id)}></i>
            </ListGroup.Item>
        </Fragment>
    );
};

const iconStyles = {
    fontSize: "30px",
    cursor: "pointer",
    color: "#a73737",
};

const listItemStyles = {
    backgroundColor: "#ffc75f",
    color: "#fff",
    fontSize: "20px",
    height: "5vh",
};
