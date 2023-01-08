import Navbars from "./navbar";
import {Outlet} from "react-router-dom"
export default function() {
    return(
        <>
        <Navbars/>
        <Outlet/>
        </>
    )
}