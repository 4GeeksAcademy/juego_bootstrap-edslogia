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
    <div>
      <label htmlFor="classInput" className="label-input">
        Escribe clases de Bootstrap:
      </label>
      <input
        id="classInput"
        className="input-1"
        type="text"
        placeholder="Ej: d-flex justify-content-center"
        value={store.currentClasses}
        onChange={handleChange}
      />
    </div>
  );
};
