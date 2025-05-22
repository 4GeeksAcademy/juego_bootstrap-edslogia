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
        currentClasses: action.payload,
      };

    // otras acciones...
    default:
      return store;
  }
}
