export const initialStore = () => {
  return {
    classToSelectStatic: "",
    classToSelectDinamic: "",
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_CURRENT_CLASSES_STATIC":
      return {
        ...store,
        classToSelectStatic: action.payload,
      };

    case "SET_CURRENT_CLASSES_DINAMIC":
      return {
        ...store,
        classToSelectDinamic: action.payload,
      };
    default:
      return store;
  }
}
