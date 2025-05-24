import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../styles/class-input.css";

export const ButtonClassDinamic = ({ classToSelect }) => {
  const { dispatch, store } = useGlobalReducer();

  const handleClick = () => {
    console.log(classToSelect);
    dispatch({
      type: "SET_CURRENT_CLASSES_DINAMIC",
      payload: classToSelect,
    });
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={handleClick}
      >
        {classToSelect}
      </button>
    </div>
  );
};
