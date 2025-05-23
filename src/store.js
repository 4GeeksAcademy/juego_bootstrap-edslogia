export const initialStore = () => {
  return {
    currentClasses: "",
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "SET_CURRENT_CLASSES":
      return {
        ...store,
        classToSelect: action.payload,
      };
    default:
      return store;
  }
}
