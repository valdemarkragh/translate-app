import React, { Fragment } from "react";

export const Input = ({ placeholder, value, setValue, setError }) => {
    const handleChange = (e) => {
        setError("");
        setValue(e.target.value);
    };
    return (
        <Fragment>
            <input
                style={inputStyles}
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            />
        </Fragment>
    );
};

const inputStyles = {
    fontSize: "40px",
    backgroundColor: "#efefef",
    borderRadius: "50px",
    width: "100%",
    padding: "20px 100px 20px 20px",
    border: "4px solid #b5acac",
    color: "#969696",
    fontFamily: "Sanchez, 'serif'",
};
