import api from "./../Api/api";

export const GET_HOMEPAGE_DATA = "@homepage/home-page";

export function getHomePageData() {
  return async (dispatch) => {
    try {
      const result = await api.get(
        "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
      );
      console.log(result);
      dispatch({
        type: GET_HOMEPAGE_DATA,
        payload: result,
      });
    } catch (error) {
      throw error;
    }
  };
}
