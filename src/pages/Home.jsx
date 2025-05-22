import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { LayoutBoard } from "../components/LayoutBoard.jsx";
import { ClassInput } from "../components/ClassInput.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <LayoutBoard />
          <ClassInput />
        </div>
      </div>
    </div>
  );
};
