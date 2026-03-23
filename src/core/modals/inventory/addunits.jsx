import { Link } from "react-router-dom";
import { all_routes } from "../../../routes/all_routes";
import BaseModal from "../../common/modal/baseModal";
import useForm from "../../hooks/useForm";
import { unitFormSchema } from "../../forms/formSchemas";

const Addunits = () => {
  const { form, handleChange } = useForm(unitFormSchema);

  return (
    <>
      <BaseModal
        title="Add Unit"
        footer={
          <button
            type="submit"
            form="unitForm"
            className="btn btn-primary fs-13 fw-medium p-2 px-3"
          >
            Save
          </button>
        }
      >
        <form id="unitForm">
          <div className="mb-3">
            <label className="form-label">
              Unit<span className="text-danger ms-1">*</span>
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
            <label className="form-label">
              Short Name<span className="text-danger ms-1">*</span>
            </label>
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
              <span className="status-label">Status</span>
              <input
                id="unitStatus"
                type="checkbox"
                name="status"
                className="check"
                checked={form.status}
                onChange={handleChange}
              />

              <label htmlFor="unitStatus" className="checktoggle" />
            </div>
          </div>
        </form>
      </BaseModal>
    </>
  );
};

export default Addunits;
