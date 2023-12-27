import { useState } from "react";

//sections
import Customize from "../sections/Customize.jsx";
import Content from "../sections/Content.jsx";

//content section
import Personal from "../content/personal/Personal.jsx";
import Education from "../content/education/Education.jsx";

const Sidebar = ({ setLayout, setContentData, contentData }) => {
  const [showAddEduForm, setShowAddEduForm] = useState(false);
  const [showContent, setShowContent] = useState(true);
  const [formType, setFormType] = useState("add");
  const [header, setHeader] = useState(" ");
  const [showHeader, setShowHeader] = useState({
    education: false,
    experience: false,
  });

  const handleOnContentClick = () => {
    setShowContent(true);
  };
  const handleOnCustomizeClick = () => {
    setShowContent(false);
  };

  //handle
  const handleOnHeader = (e) => {
    console.log(e.target.innerText);
    console.log(contentData);
    setShowAddEduForm(true);
    setHeader(e.target.innerText);
    setFormType("update");
  };

  return (
    <div className="sidebar">
      <div>
        <button onClick={handleOnContentClick}>Content</button>
        <button onClick={handleOnCustomizeClick}>Customize</button>
      </div>

      {showContent ? (
        <Content setContentData={setContentData} contentData={contentData} />
      ) : (
        <Customize setLayout={setLayout} />
      )}
    </div>
  );
};

export default Sidebar;
