import "../styles/layout-board.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const LayoutBoard = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="layout-board ">
        <div className={`box ${store.currentClasses}`}>Elemento</div>
    </div>
  );
};
