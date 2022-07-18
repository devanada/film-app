/*
Fungsi reducer adalah sebuah function yang menerima 2 parameter, yaitu state dan action.
Fungsi ini tugasnya yaitu untuk merubah initial state menjadi state yang baru.
*/

const initialState = {
  favorites: [],
  loading: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //  if(action.type === "ADD_FAVORITE") {
    case "ADD_FAVORITE":
      return {
        ...state,
        favorites: action.payload,
      };
    //  } if else(action.type === "START_LOADING") {
    case "START_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    //  } if else(action.type === "STOP_LOADING") {
    case "STOP_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    //  } else {
    default:
      return state;
  }
};
