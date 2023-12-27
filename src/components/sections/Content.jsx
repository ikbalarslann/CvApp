import Personal from "../content/personal/Personal";

const Content = ({ contentData, setContentData }) => {
  return (
    <div className="content-section">
      <div className="sidebar__personal">
        <h1>Personal Details</h1>
        <Personal setContentData={setContentData} contentData={contentData} />
      </div>
      {/* <div className="sidebar__education">
        <h1
          onClick={() =>
            setShowHeader({
              ...showHeader,
              education: !showHeader.education,
            })
          }
        >
          Education
        </h1>

        {showHeader.education && (
          <div>
            {contentData.sections.educations.map((education, index) => (
              <h2 key={index} onClick={handleOnHeader}>
                {education.schoolName}
              </h2>
            ))}
          </div>
        )}
      </div>
      <div className="sidebar__experience">
        <h1>Experience</h1>
      </div> */}
    </div>
  );
};

export default Content;
