import Form from "../../components/forms/education/Form.jsx";

const Education = ({
  setContentData,
  contentData,
  showAddEduForm,
  setShowAddEduForm,
  header,
  formType,
}) => {
  return (
    <Form
      setContentData={setContentData}
      contentData={contentData}
      showAddEduForm={showAddEduForm}
      setShowAddEduForm={setShowAddEduForm}
      header={header}
      formType={formType}
    />
  );
};

export default Education;
