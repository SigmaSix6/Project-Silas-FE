import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const getSupplierData = async () => {
  try {
    const response = await axios.get("/finance/supplier-data");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProjectNumber = async () => {
  try {
    const response = await axios.get("/finance/project-number");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getElement = async () => {
  try {
    const response = await axios.get("/finance/element");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getBankName = async () => {
  try {
    const response = await axios.get("/finance/bank-name");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getBankCode = async () => {
  try {
    const response = await axios.get("/finance/bank-code");
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getEmployee = async (data) => {
  try {
    const response = await axios.get("/finance/employee", data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const insertPaymentReq = async (data) => {
  try {
    const response = await axios.post("/finance/insert-payment-req", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const insertPaymentOrder = async (data) => {
  try {
    const response = await axios.post("/finance/insert-payment-order", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const insertBankActivity = async (data) => {
  try {
    const response = await axios.post("/finance/insert-bank-activity", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const insertCashAdvance = async (data) => {
  try {
    const response = await axios.post("/finance/insert-cash-adv", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getProjectNumberReport = async (data) => {
  try {
    const response = await axios.get("/finance/report/project-number-report", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getPaymentPoReport = async (data) => {
  try {
    const response = await axios.get("/finance/report/payment-po-report", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getIncomeSalesReport = async (data) => {
  try {
    const response = await axios.get("/finance/report/income-sales-report", data);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

// Optionally the request above could also be done as
// axios
//   .get("/user", {
//     params: {
//       ID: 12345,
//     },
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

// Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get("/user?ID=12345");
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }
// }

export {
  getSupplierData,
  getProjectNumber,
  getElement,
  insertPaymentReq,
  getBankCode,
  getBankName,
  getEmployee,
  insertPaymentOrder,
  insertBankActivity,
  insertCashAdvance,
  getProjectNumberReport,
  getPaymentPoReport,
  getIncomeSalesReport,
};
