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
        <div className="header">
          <h1>Josephine Meyers</h1>
          <div>
            <p>Josephine.meyers@mail.co.uk</p>
            <p>+44 3245 5521 9943</p>
            <p>London,UK</p>
          </div>
        </div>
        <div className="content">
          <div>
            <div>
              <h2>Education</h2>
              <div>
                <div>
                  08/2020 - present <br />
                  New York University,US
                </div>
                <div>
                  <strong>London City University</strong> <br />
                  Bachelor of Science in Computer Science
                </div>
              </div>
            </div>
            <div>
              <h2>Professional Experience</h2>
              <div>
                <div>
                  08/2020 - present <br />
                  New York City,US
                </div>
                <div>
                  <strong>Umbrella Inc.</strong> <br />
                  UX & UI Designer <br />
                  <p>
                    Designed and prototyped user interface patterns for various
                    clients in various industries, ranging from self-service
                    apps within the telecommunications-sector to mobile games
                    for IOS and Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
