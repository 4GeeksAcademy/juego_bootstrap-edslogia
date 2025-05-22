import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

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
        style={{
          width: "100%",
          padding: "0.5rem",
          fontSize: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />
    </div>
  );
};