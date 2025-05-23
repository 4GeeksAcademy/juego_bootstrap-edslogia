import "../styles/layout-actions.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const LayoutActions = ({ staticButtons, dinamicButtons }) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <div className="row">
        <div className="layout-actions-top d-flex align-content-start flex-wrap gap-1">
          {staticButtons}
        </div>
      </div>
      <div className="row">
        <div className="layout-actions-bottom d-flex align-content-start flex-wrap gap-1">
          {dinamicButtons}
        </div>
      </div>
    </div>
  );
};
