export const categoryFormSchema = {
  code: 0,
  name: "",
  alias: "",
  status: true,
};

export const subCategoryFormSchema = {
  categoryId: null,
  code: 0,
  name: "",
  alias: "",
  description: "",
  image: null,
  status: true,
};

export const brandFormSchema = {
  code: 0,
  name: "",
  alias: "",
  image: null,
  status: true,
};

export const unitFormSchema = {
  code: 0,
  name: "",
  alias: "",
  status: true,
};

export const variantFormSchema = {
  code: 0,
  name: "",
  alias: "",
  values: "",
  status: true,
};

export const storeFormSchema = {
  code: 0,
  name: "",
  alias: "",
  username: "",
  password: "",
  email: "",
  phone: "",
  status: true,
};

export const warehouseFormSchema = {
  code: 0,
  name: "",
  alias: "",
  email: "",
  contactPerson: "",
  phone: "",
  phonework: "",
  address: "",
  city: "",
  state: "",
  postalcode: "",
  status: true,
};

export const productFormSchema = {
  storeId: null,
  warehouseId: null,
  productName: "",
  slug: "",
  sku: "",
  categoryId: null,
  subCategoryId: null,
  brandId: null,
  unitId: null,
  barcode: "",
  description: "",
  price: "",
  quantity: "",
  discountType: "",
  discountValue: "",
  taxType: "",
};

export const userFormSchema = {
  username: "",
  phone: "",
  email: "",
  role: "",
  password: "",
  confirmPassword: "",
  description: "",
  avatar: null,
};

export const customerFormSchema = {
  name: "",
  email: "",
  phone: "",
  address: "",
  status: true,
};
