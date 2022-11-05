import sanityClient from "../client";
export const GET_HOMEPAGE_DATA = "@homepage/home-page";

export function getProductListing() {
  return async (dispatch) => {
    try {
      const result = await sanityClient.fetch(
        `*[_type == "product"]{
      title,
      slug,
      reviews,
      pricePerDay,
      ProductType,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`
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
