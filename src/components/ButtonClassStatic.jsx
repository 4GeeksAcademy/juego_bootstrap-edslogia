import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../styles/class-input.css";

export const ButtonClassStatic = ({ classToSelect }) => {
  const { dispatch, store } = useGlobalReducer();

  const handleClick = () => {
    dispatch({
      type: "SET_CURRENT_CLASSES_STATIC",
      payload: classToSelect,
    });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-success"
        onClick={handleClick}
      >
        {classToSelect}
      </button>
    </div>
  );
};
