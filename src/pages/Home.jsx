import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { LayoutBoard } from "../components/LayoutBoard.jsx";
import { AppConfig } from "../config/config.js";
import { Button } from "../components/ButtonClass.jsx";
import { BootstrapActions } from "../components/BootstrapActions.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const buttonClasses = AppConfig.classFlex;
  console.log(buttonClasses);

  return (
    <div className="">
      <div className="row d-flex justify-content-around p-5">
        <div className="col-8">
          <LayoutBoard />
        </div>
        <div className="col-4">
          <BootstrapActions>
            {buttonClasses.map((classToSelect) => {
              return <Button classToSelect={classToSelect} />;
            })}
          </BootstrapActions>
        </div>
      </div>
    </div>
  );
};
