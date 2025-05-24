import "../styles/information-board.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const InformationBoard = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container d-flex m-0 px-5 pt-3">
      <p className="m-0">
        className="
        <span className="text-success">{store.classToSelectStatic} </span>
        <span className="text-danger"> {store.classToSelectDinamic}</span>
        "
      </p>
    </div>
  );
};
