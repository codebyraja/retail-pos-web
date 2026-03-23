import React, { useState } from "react";
import BaseModal from "../../common/modal/baseModal";
import CommonSelect from "../../../components/select/common-select";
import { Editor } from "primereact/editor";
import { subCategoryFormSchema } from "../../forms/formSchemas";
import useForm from "../../hooks/useForm";

const AddSubCategory = () => {
  const { form, handleChange } = useForm(subCategoryFormSchema);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const Category = [{ label: "Laptop", value: "1" }];
  const [text, setText] = useState("");

  console.log("text State:", text);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subCategoryData = {
      ...form,
      category: selectedCategory,
      description: text,
    };

    console.log("Sub Category Data:", subCategoryData);
  };

  return (
    <BaseModal
      title="Add Sub Category"
      footer={
        <button
          type="submit"
          form="subcategoryForm"
          className="btn btn-primary fs-13 fw-medium p-2 px-3"
        >
          Save
        </button>
      }
    >
      <form id="subcategoryForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="add-image-upload">
            <div className="add-image">
              <span className="fw-normal">
                <i className="feather icon-plus-circle plus-down-add" /> Add
                Image
              </span>
            </div>
            <div className="new-employee-field">
              <div className="mb-0">
                <div className="image-upload mb-2">
                  <input type="file" />
                  <div className="image-uploads">
                    <h4 className="fs-13 fw-medium">Upload Image</h4>
                  </div>
                </div>
                <span>JPEG, PNG up to 2 MB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Category<span className="text-danger ms-1">*</span>
          </label>
          <CommonSelect
            className="w-100"
            options={Category}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.value)}
            placeholder="Choose"
            filter={false}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            Sub Category Name
            <span className="text-danger ms-1">*</span>
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Sub Category Code</label>
          <input
            type="text"
            name="alias"
            className="form-control"
            value={form.alias}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <Editor
            value={text}
            onTextChange={(e) => setText(e.htmlValue)}
            name="description"
            className="form-control"
            style={{ height: "100px" }}
          />
        </div>
        <div className="mb-0">
          <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
            <span className="status-label">
              Status<span className="text-danger ms-1">*</span>
            </span>
            <input
              id="subCategoryStatus"
              type="checkbox"
              name="status"
              className="check"
              checked={form.status}
              onChange={handleChange}
            />

            <label htmlFor="subCategoryStatus" className="checktoggle" />
          </div>
        </div>
      </form>
    </BaseModal>
  );
};

export default AddSubCategory;
