import "../styles/bootstrap-actions.css";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const BootstrapActions = ({children}) => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="bootstrap-actions d-flex flex-wrap">
      {children}
    </div>
  );
};
