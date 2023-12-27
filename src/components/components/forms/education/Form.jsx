import React, { useState, useEffect } from "react";

const Form = ({
  setContentData,
  formType,
  contentData,
  showAddEduForm,
  setShowAddEduForm,
  header,
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
    const contentDataItem = {
      schoolName: formData.school,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
      location: formData.location,
    };

    data.sections.educations[data.sections.educations.length - 1] =
      contentDataItem;
    setContentData(data);
  }, [formData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleOnAdd = () => {
    const data = { ...contentData };
    const contentDataItem = {
      schoolName: formData.school,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
      location: formData.location,
    };

    setFormData({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });

    data.sections.educations.push(contentDataItem);
    setContentData(data);
    setShowAddEduForm(false);
  };

  const handleOnUpdate = () => {
    // Find the index of the education item with the matching school name
    const educationIndex = contentData.sections.educations.findIndex(
      (education) => education.schoolName === header
    );

    if (educationIndex !== -1) {
      // Update the existing education item
      const updatedEducations = [...contentData.sections.educations];
      updatedEducations[educationIndex] = {
        schoolName: formData.school,
        degree: formData.degree,
        startDate: formData.startDate,
        endDate: formData.endDate,
        location: formData.location,
      };

      // Update contentData with the modified educations array
      setContentData({
        ...contentData,
        sections: {
          ...contentData.sections,
          educations: updatedEducations,
        },
      });
    }

    // Hide the form
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
          onChange={handleOnChange}
        />

        <br />
        <label htmlFor="degree">degree</label>
        <input
          type="text"
          name="degree"
          value={formData.degree}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="startDate">startDate</label>
        <input
          type="text"
          name="startDate"
          value={formData.startDate}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="endDate">endDate</label>
        <input
          type="text"
          name="endDate"
          value={formData.endDate}
          onChange={handleOnChange}
        />
        <br />
        <label htmlFor="location">location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleOnChange}
        />

        <br />

        {formType === "update" ? (
          <button onClick={handleOnUpdate}>Update</button>
        ) : formType === "add" ? (
          <button onClick={handleOnAdd}>Add</button>
        ) : (
          setShowAddEduForm(false)
        )}
      </div>
    )
  );
};

export default Form;
