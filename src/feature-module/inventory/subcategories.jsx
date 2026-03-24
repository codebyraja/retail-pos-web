import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonFooter from "../../components/footer/commonFooter";
import {
  laptop,
  product1,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
} from "../../utils/imagepath";
import PrimeDataTable from "../../components/data-table";
import TableTopHead from "../../components/table-top-head";
import CommonSelect from "../../components/select/common-select";
import DeleteModal from "../../components/delete-modal";
import SearchFromApi from "../../components/data-table/search";
import { Editor } from "primereact/editor";
import useAppModal from "../../core/common/modal/useAppModal";
import { MODAL_TYPES } from "../../routes/modal_root/modalTypes";

export const subcateorydata = [
  {
    id: 1,
    img: product1,
    category: "Computers",
    parentcategory: "Computers",
    categorycode: "CT001",
    description: "Computers description",
    status: "Active",
  },
  {
    id: 2,
    img: product2,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT002",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 3,
    img: product3,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT003",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 4,
    img: product4,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT004",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 5,
    img: product5,
    category: "Accessories",
    parentcategory: "Accessories",
    categorycode: "CT005",
    description: "Accessories description",
    status: "Active",
  },
  {
    id: 6,
    img: product6,
    category: "Shoes",
    parentcategory: "Shoes",
    categorycode: "CT006",
    description: "Shoes description",
    status: "Active",
  },
  {
    id: 7,
    img: product7,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT007",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 8,
    img: product8,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT008",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 9,
    img: product9,
    category: "Computers",
    parentcategory: "Computers",
    categorycode: "CT009",
    description: "Computers description",
    status: "Active",
  },
  {
    id: 10,
    img: product10,
    category: "Health Care",
    parentcategory: "Health Care",
    categorycode: "CT0010",
    description: "Health Care description",
    status: "Active",
  },
  {
    id: 11,
    img: product11,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT004",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 12,
    img: product12,
    category: "Accessories",
    parentcategory: "Accessories",
    categorycode: "CT005",
    description: "Accessories description",
    status: "Active",
  },
  {
    id: 13,
    img: product13,
    category: "Shoes",
    parentcategory: "Shoes",
    categorycode: "CT006",
    description: "Shoes description",
    status: "Active",
  },
  {
    id: 14,
    img: product14,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT007",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 15,
    img: product15,
    category: "Fruits",
    parentcategory: "Fruits",
    categorycode: "CT008",
    description: "Fruits description",
    status: "Active",
  },
  {
    id: 16,
    img: product16,
    category: "Computers",
    parentcategory: "Computers",
    categorycode: "CT009",
    description: "Computers description",
    status: "Active",
  },
  {
    id: 17,
    img: product17,
    category: "Health Care",
    parentcategory: "Health Care",
    categorycode: "CT0010",
    description: "Health Care description",
    status: "Active",
  },
];

const SubCategories = () => {
  const { open } = useAppModal();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, _setTotalRecords] = useState(5);
  const [rows, setRows] = useState(10);
  const [_searchQuery, setSearchQuery] = useState(undefined);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await fetch(`${api_url}/GetMaster?masterType=5`);
      const json = await res.json();

      const formatted = json?.data.map((item) => ({
        label: item.name,
        value: item.code,
      }));

      setCategories(formatted);
    } catch (err) {
      console.log(err);
    }
  };

  const [filteredData, setFilteredData] = useState(subcateorydata);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = subcateorydata.filter(
        (item) => item.parentcategory === selectedCategory.label,
      );

      setFilteredData(filtered);
    } else {
      setFilteredData(subcateorydata);
    }
  }, [selectedCategory]);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const columns = [
    {
      header: (
        <label className="checkboxs">
          <input type="checkbox" id="select-all" />
          <span className="checkmarks" />
        </label>
      ),

      body: () => (
        <label className="checkboxs">
          <input type="checkbox" />
          <span className="checkmarks" />
        </label>
      ),

      sortable: false,
      key: "checked",
    },
    {
      field: "logo",
      header: "Image",
      key: "logo",
      sortable: true,
      body: (rowData) => (
        <span className="productimgname">
          <Link to="#" className="product-img stock-img">
            <img alt="" src={rowData.img} />
          </Link>
        </span>
      ),
    },
    {
      field: "parentcategory",
      header: "Sub Category",
      key: "parentcategory",
      sortable: true,
    },
    {
      field: "category",
      header: "Category",
      key: "category",
      sortable: true,
    },
    {
      field: "categorycode",
      header: "Category Code",
      key: "categorycode",
      sortable: true,
    },
    {
      field: "description",
      header: "Description",
      key: "description",
      sortable: true,
    },
    {
      field: "status",
      header: "Status",
      key: "status",
      sortable: true,
      body: (rowData) => (
        <span className="badge bg-success fw-medium fs-10">
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
                <h4 className="fw-bold">Sub Category</h4>
                <h6>Manage your sub categories</h6>
              </div>
            </div>
            <TableTopHead />
            <div className="page-btn">
              <Link
                className="btn btn-primary"
                onClick={() => open(MODAL_TYPES.SUBCATEGORY)}
              >
                <i className="ti ti-circle-plus me-1"></i> Add Sub Category
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
                    {selectedCategory?.label || "Category"}
                  </Link>
                  {categories.map((item, index) => (
                    <ul className="dropdown-menu dropdown-menu-end p-3">
                      <li key={index}>
                        <Link
                          to="#"
                          className="dropdown-item rounded-1"
                          onClick={() => setSelectedCategory(item)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    </ul>
                  ))}
                </div>

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
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive sub-category-table">
                <PrimeDataTable
                  column={columns}
                  data={filteredData}
                  rows={rows}
                  setRows={setRows}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalRecords={totalRecords}
                  selectionMode="checkbox"
                  selection={selectedSubcategories}
                  onSelectionChange={(e) => setSelectedSubcategories(e.value)}
                  dataKey="id"
                />
              </div>
            </div>
          </div>
          {/* /product list */}
        </div>
        <CommonFooter />
      </div>
    </>
  );
};

export default SubCategories;
