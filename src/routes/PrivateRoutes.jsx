import {useSelector} from "react-redux";
import { getIsAuth } from "../store/selectors/userSelector.js";
import {Navigate} from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const isAuth = useSelector(getIsAuth);
    if(!isAuth) return <Navigate to={'/login'}/>
    return children;
};

export default PrivateRoutes;
