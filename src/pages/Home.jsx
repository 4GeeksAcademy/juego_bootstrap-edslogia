import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { LayoutBoard } from "../components/LayoutBoard.jsx";
import { AppConfig } from "../config/config.js";
import { ButtonClassStatic } from "../components/ButtonClassStatic.jsx";
import { ButtonClassDinamic } from "../components/ButtonClassDinamic.jsx";
import { LayoutActions } from "../components/LayoutActions.jsx";
import { InformationBoard } from "../components/InformationBoard.jsx";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const flexAlign = AppConfig.classFlex.groups.align;
  const flexJustify = AppConfig.classFlex.groups.justify;
  const flexDirection = AppConfig.classFlex.groups.direction;
  const flex = AppConfig.classFlex.static;

  return (
    <div className="">
      <div className="row">
        <InformationBoard />
      </div>
      <div className="row d-flex justify-content-around px-5 pb-3">
        <div className="col-8 m-0 p-0">
          <LayoutBoard />
        </div>
        <div className="col-4">
          <LayoutActions
            staticButtons={flex.map((classToSelect, index) => (
              <ButtonClassStatic key={index} classToSelect={classToSelect} />
            ))}
            dinamicButtons={flexAlign.map((classToSelect, index) => (
              <ButtonClassDinamic key={index} classToSelect={classToSelect} />
            ))}
          />
        </div>
      </div>
    </div>
  );
};
