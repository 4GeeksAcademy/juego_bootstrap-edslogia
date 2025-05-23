import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import "../styles/class-input.css";

export const Button = ({classToSelect}) => {
  const { dispatch, store } = useGlobalReducer();

  const handleChange = (e) => {
    dispatch({
      type: "SET_CURRENT_CLASSES",
      payload: e.target.value,
    });
  };

  return (
    <div>
      <button type="button" class="btn btn-outline-danger">
        {classToSelect}
      </button>
    </div>
  );
};
