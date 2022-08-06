import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import {getHomePageData} from "../../Actions/homepageActions"


const  HomePage = () =>  {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHomePageData())
    },[])
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  export default HomePage;