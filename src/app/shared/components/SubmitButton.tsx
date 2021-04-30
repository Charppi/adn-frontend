import React from "react";

export const SubmitButton: React.FC = () => {
    return <button
        type="submit"
        style={{
            padding: "10px",
            width: "100%",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "2px #6ca264 solid",
            color: "#6ca264",
            backgroundColor: "transparent",
            borderRadius: "7px"
        }}>Crear</button>
}