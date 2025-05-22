import "../styles/layout-board.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const LayoutBoard = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="layout-board">
      <div className={`layout-content ${store.currentClasses}`}>
        {/* Aquí irán los elementos visuales */}
        <div className="box">Elemento</div>
      </div>
    </div>
  );
};
