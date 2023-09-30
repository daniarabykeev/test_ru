import {useSelector} from "react-redux";
import { getIsAuth } from "../store/selectors/userSelector.js";
import {Navigate} from "react-router-dom";

const PublicRoutes = ({children}) => {
    const isAuth = useSelector(getIsAuth);
    if(isAuth) {
        return <Navigate to={"/"} />
    }
    return children;
};

export default PublicRoutes;
