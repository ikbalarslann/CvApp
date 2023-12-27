import React, { useState, useEffect } from "react";

const UpdateEducation = ({
  setContentData,
  contentData,
  showAddEduForm,
  setShowAddEduForm,
  choosenHeader,
}) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  useEffect(() => {
    const data = { ...contentData };
    const ContentData = {
      schoolName: formData.school,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
      location: formData.location,
    };

    data.sections.educations[data.sections.educations.length - 1] = ContentData;
    setContentData(data);
  }, [formData]);

  const handleOnUpdate = (e) => {
    const data = { ...contentData };
    choosenData = data.sections.educations.filter((education) => {
      return education.schoolName === choosenHeader;
    });
    const ContentData = {
      schoolName: contentData.schoolName,
      degree: contentData.degree,
      startDate: contentData.startDate,
      endDate: contentData.endDate,
      location: contentData.location,
    };

    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });

    data.sections.educations.push(ContentData);
    setContentData(data);
    setShowAddEduForm(false);
  };

  return (
    showAddEduForm && (
      <div className="education">
        <label htmlFor="school">school</label>
        <input
          type="text"
          name="school"
          value={formData.school}
          onChange={(e) => setFormData({ ...formData, school: e.target.value })}
        />

        <br />
        <label htmlFor="degree">degree</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
        />
        <br />
        <label htmlFor="startDate">startDate</label>
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
        />
        <br />
        <label htmlFor="endDate">endDate</label>
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={(e) =>
            setFormData({ ...formData, endDate: e.target.value })
          }
        />
        <br />
        <label htmlFor="location">location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
        />

        <br />

        <button onClick={handleOnUpdate}>Update</button>
      </div>
    )
  );
};

export default UpdateEducation;
