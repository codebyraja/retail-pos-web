import { useState } from "react";
import useModal from "../../../routes/modal_root/useModal";
import BaseModal from "../../common/modal/baseModal";
import { categoryFormSchema } from "../../../core/forms/formSchemas";
import useForm from "../../hooks/useForm";

const AddCategory = () => {
  // const { close } = useModal();
  const { form, handleChange } = useForm(categoryFormSchema);

  console.log("Form State:", form);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Category Data:", form);
  };

  return (
    <BaseModal
      title="Add Category"
      footer={
        <button
          type="submit"
          form="categoryForm"
          className="btn btn-primary fs-13 fw-medium p-2 px-3"
        >
          Save
        </button>
      }
    >
      <form id="categoryForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            Category Name<span className="text-danger ms-1">*</span>
          </label>

          <input
            type="text"
            name="name"
            className="form-control"
            value={form?.name}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Category Code</label>

          <input
            type="text"
            name="alias"
            className="form-control"
            value={form?.alias}
            onChange={handleChange}
          />
        </div>

        <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
          <span className="status-label">
            Status<span className="text-danger ms-1">*</span>
          </span>

          <input
            id="categoryStatus"
            type="checkbox"
            name="status"
            className="check"
            checked={form.status}
            onChange={handleChange}
          />

          <label htmlFor="categoryStatus" className="checktoggle" />
        </div>
      </form>
    </BaseModal>
  );
};

export default AddCategory;
