import { Link } from "react-router-dom";
import { all_routes } from "../../routes/all_routes";
import BaseModal from "../common/modal/baseModal";
import useForm from "../hooks/useForm";
import { brandFormSchema } from "../forms/formSchemas";

const AddBrand = () => {
  const { form, handleChange } = useForm(brandFormSchema);

  return (
    <>
      {/* Add Brand */}
      <BaseModal
        title="Add Brand"
        footer={
          <button
            type="submit"
            form="brandForm"
            className="btn btn-primary fs-13 fw-medium p-2 px-3"
          >
            Save
          </button>
        }
      >
        <form id="brandForm">
          <div className="profile-pic-upload mb-3">
            <div className="profile-pic brand-pic">
              <span>
                <i className="feather icon-plus-circle plus-down-add" /> Add
                Image
              </span>
            </div>
            <div>
              <div className="image-upload mb-0">
                <input type="file" />
                <div className="image-uploads">
                  <h4>Upload Image</h4>
                </div>
              </div>
              <p className="mt-2">JPEG, PNG up to 2 MB</p>
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">
              Brand<span className="text-danger ms-1">*</span>
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
            <label className="form-label">Brand Code</label>
            <input
              type="text"
              name="alias"
              className="form-control"
              value={form.alias}
              onChange={handleChange}
            />
          </div>
          <div className="mb-0">
            <div className="status-toggle modal-status d-flex justify-content-between align-items-center">
              <span className="status-label">
                Status<span className="text-danger ms-1">*</span>
              </span>
              <input
                id="brandStatus"
                name="status"
                type="checkbox"
                className="check"
                checked={form.status}
                onChange={handleChange}
              />

              <label htmlFor="brandStatus" className="checktoggle" />
            </div>
          </div>
        </form>
      </BaseModal>
      {/* /Add Brand */}
    </>
  );
};

export default AddBrand;
