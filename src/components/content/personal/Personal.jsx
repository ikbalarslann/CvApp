import React, { useState, useEffect } from "react";
import data from "../../../data.js";

const Personal = ({ contentData, setContentData }) => {
  const [formData, setFormData] = useState({
    fullName: data.personalInfo.fullName,
    email: data.personalInfo.email,
    phoneNumber: data.personalInfo.phoneNumber,
    location: data.personalInfo.location,
  });

  useEffect(() => {
    const updatedData = { ...contentData };
    const updatedPersonalInfo = {
      fullName: formData.fullName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      location: formData.location,
    };

    updatedData.personalInfo = updatedPersonalInfo;

    setContentData(updatedData);
  }, [formData]);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="personal">
      <label>
        Full Name:
        <input
          type="text"
          value={formData.fullName}
          onChange={handleOnChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={formData.email}
          onChange={handleOnChange}
          placeholder={data.personalInfo.email}
          required
        />
      </label>
      <br />

      <label>
        Phone Number:
        <input
          type="tel"
          value={formData.phoneNumber}
          onChange={handleOnChange}
          placeholder={data.personalInfo.phoneNumber}
          required
        />
      </label>
      <br />

      <label>
        Location:
        <textarea
          value={formData.location}
          onChange={handleOnChange}
          placeholder={data.personalInfo.location}
          required
        />
      </label>
      <br />
    </div>
  );
};

export default Personal;
