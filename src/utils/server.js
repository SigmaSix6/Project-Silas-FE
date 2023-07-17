import axios from "axios";
axios.defaults.baseURL = "http://localhost:3001";

const getSupplierData = async () => {
  try {
    const response = await axios.get("/finance/supplier-data");
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getProjectNumber = async () => {
  try {
    const response = await axios.get("/finance/project-number");
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getElement = async () => {
  try {
    const response = await axios.get("/finance/element");
    return response.data;
  } catch (error) {
    console.error(error);
    return false;
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

export { getSupplierData, getProjectNumber, getElement };
