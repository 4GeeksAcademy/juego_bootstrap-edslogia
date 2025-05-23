import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../styles/class-input.css";

export const ClassInput = () => {
  const { dispatch, store } = useGlobalReducer();

  const handleChange = (e) => {
    dispatch({
      type: "SET_CURRENT_CLASSES",
      payload: e.target.value,
    });
  };

  return (
    <div style={{ margin: "1rem auto", width: "80%", textAlign: "center" }}>
      <label
        htmlFor="classInput"
        style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}
      >
        Escribe clases de Bootstrap:
      </label>
      <input
        id="classInput"
        type="text"
        placeholder="Ej: d-flex justify-content-center"
        value={store.currentClasses}
        onChange={handleChange}
        className="input-1"
      />
    </div>
  );
};