import React from "react";
import { useState } from "react";
import "../styles/main.scss";
import data from "../data.js";
import Sidebar from "../components/sidebar/Sidebar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Layout = () => {
  const [layout, setLayout] = useState("left");
  const [contentData, setContentData] = useState(data);

  return (
    <section className="layout-cover">
      <aside>
        <Sidebar
          setLayout={setLayout}
          setContentData={setContentData}
          contentData={contentData}
        />
      </aside>
      <div className={`layout ${layout}`}>
        <header>
          <h1>{contentData.personalInfo.fullName}</h1>
          <address>
            <p>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>{contentData.personalInfo.email}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} />
              <span>{contentData.personalInfo.phoneNumber}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{contentData.personalInfo.location}</span>
            </p>
          </address>
        </header>
        <article className="content">
          <h2>Education</h2>
          {contentData.sections.educations.map((education, index) => {
            return (
              <div key={index} className="content__section">
                <div className="content__section-element">
                  <time dateTime={education.startDate}>
                    {education.startDate + " - " + education.endDate}
                  </time>
                  <br />
                  <p>{education.location}</p>
                </div>

                <div className="content__section-element">
                  <strong>{education.schoolName}</strong>
                  <br />
                  <p>{education.degree}</p>
                </div>
              </div>
            );
          })}
          <h2>Professional Experience</h2>
          {data.sections.experiences.map((experience, index) => {
            return (
              <div key={index} className="content__section">
                <div className="content__section-element">
                  <time dateTime={experience.startDate}>
                    {experience.startDate + " - " + experience.endDate}
                  </time>
                  <br />
                  <p>{experience.location}</p>
                </div>

                <div className="content__section-element">
                  <strong>{experience.companyName}</strong>
                  <br />
                  <p>{experience.positionTitle}</p>
                  <p>{experience.description}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Layout;
