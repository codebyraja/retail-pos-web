import React, { useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import {
  brandIcon1,
  brandIcon10,
  brandIcon2,
  brandIcon3,
  brandIcon4,
  brandIcon5,
  brandIcon6,
  brandIcon7,
  brandIcon8,
  brandIcon9,
} from "../../utils/imagepath";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import useAppModal from "../../core/common/modal/useAppModal";
import { MODAL_TYPES } from "../../routes/modal_root/modalTypes";

export const brandlistdata = [
  {
    id: 1,
    brand: "Lenevo",
    logo: brandIcon1,
    createdon: "25 May 2023",
    status: "Active",
  },
  {
    id: 2,
    brand: "Boat",
    logo: brandIcon2,
    createdon: "24 Jun 2023",
    status: "Active",
  },
  {
    id: 3,
    brand: "Nike",
    logo: brandIcon3,
    createdon: "23 Jul 2023",
    status: "Active",
  },
  {
    id: 4,
    brand: "Apple",
    logo: brandIcon4,
    createdon: "22 Aug 2023",
    status: "Active",
  },
  {
    id: 5,
    brand: "Amazon",
    logo: brandIcon5,
    createdon: "21 Sep 2023",
    status: "Active",
  },
  {
    id: 6,
    brand: "Woodmart",
    logo: brandIcon6,
    createdon: "20 Sep 2023",
    status: "Active",
  },
  {
    id: 7,
    brand: "Versace",
    logo: brandIcon7,
    createdon: "20 Sep 2023",
    status: "Active",
  },
  {
    id: 8,
    brand: "Lava",
    logo: brandIcon8,
    createdon: "20 Sep 2023",
    status: "Active",
  },
  {
    id: 9,
    brand: "Bently",
    logo: brandIcon9,
    createdon: "20 Sep 2023",
    status: "Active",
  },
  {
    id: 10,
    brand: "Nilkamal",
    logo: brandIcon10,
    createdon: "20 Sep 2023",
    status: "Active",
  },
];
const BrandList = () => {
  const { open } = useAppModal();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, _setTotalRecords] = useState(5);
  const [rows, setRows] = useState(10);
  const [_searchQuery, setSearchQuery] = useState(undefined);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };
  const columns = [
    {
      field: "brand",
      header: "Brand",
      key: "brand",
      sortable: true,
    },
    {
      field: "logo",
      header: "Image",
      key: "logo",
      sortable: true,
      body: (rowData) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="" src={rowData.logo} />
          </Link>
        </span>
      ),

      style: { width: "5%" },
    },
    {
      field: "createdon",
      header: "Created Date",
      key: "createdon",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (rowData) => (
        <span className="badge table-badge bg-success fw-medium fs-10">
          {rowData.status}
        </span>
      ),
    },
    {
      header: "",
      field: "actions",
      key: "actions",
      sortable: false,
      body: (_row) => (
        <div className="edit-delete-action d-flex align-items-center">
          <Link
            className="me-2 p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#edit-customer"
          >
            <i className="feather icon-edit"></i>
          </Link>
          <Link
            className="p-2 d-flex align-items-center border rounded"
            to="#"
            data-bs-toggle="modal"
            data-bs-target="#delete-modal"
          >
            <i className="feather icon-trash-2"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="add-item d-flex">
              <div className="page-title">
                <h4 className="fw-bold">Brand</h4>
                <h6>Manage your brands</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                className="btn btn-primary"
                onClick={() => open(MODAL_TYPES.BRAND)}
              >
                <i className="ti ti-circle-plus me-1"></i>
                Add Brand
              </Link>
            </div>
          </div>
          {/* /product list */}
          <div className="card table-list-card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
              <SearchFromApi
                callback={handleSearch}
                rows={rows}
                setRows={setRows}
              />

              <div className="d-flex table-dropdown my-xl-auto right-content align-items-center flex-wrap row-gap-3">
                <div className="dropdown me-2">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Status
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Active
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Inactive
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="dropdown">
                  <Link
                    to="#"
                    className="dropdown-toggle btn btn-white btn-md d-inline-flex align-items-center"
                    data-bs-toggle="dropdown"
                  >
                    Sort By : Last 7 Days
                  </Link>
                  <ul className="dropdown-menu  dropdown-menu-end p-3">
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Recently Added
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Ascending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Desending
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last Month
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="dropdown-item rounded-1">
                        Last 7 Days
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive brand-table">
                <PrimeDataTable
                  column={columns}
                  data={brandlistdata}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                  selectionMode="checkbox"
                  selection={selectedBrands}
                  onSelectionChange={(e) => setSelectedBrands(e.value)}
                  dataKey="id"
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
      <DeleteModal />
    </>
  );
};

export default BrandList;
