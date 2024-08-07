import Navbar from "../Navbar/Navbar"
import { Outlet } from "react-router-dom";


const Layout = () => {
    return <div style={{
        padding: '50px 0px 0px 370px'
    }}>
        <Navbar />
        <Outlet />
    </div>;
};

export default Layout;