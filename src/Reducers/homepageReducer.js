import produce from "immer";
import { GET_HOMEPAGE_DATA } from "../Actions/homepageActions";
const initialState = {
  homePageData: null,
};
const homepageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOMEPAGE_DATA: {
      return produce(state, (draft) => {
        draft.homePageData = action.payload;
      });
    }
    default: {
      return state;
    }
  }
};
export default homepageReducer;
