import "../styles/bootstrap-actions.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const BootstrapActions = ({children}) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="bootstrap-actions">
      {children}
    </div>
  );
};
