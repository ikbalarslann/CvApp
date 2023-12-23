import React from "react";
import { useState } from "react";
import "../styles/main.scss";
import Sidebar from "../components/sidebar/Sidebar.jsx";
const Layout = () => {
    const [layout, setLayout] = useState("left");

    return (
        <div className="layout-cover">
            <Sidebar setLayout={setLayout} />
            <div className={`layout ${layout}`}>
                <div className="header">Header</div>
                <div className="content">Content</div>
            </div>
        </div>
    );
};

export default Layout;
