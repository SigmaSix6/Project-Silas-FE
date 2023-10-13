import { Grid, Select } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { getEmployee, getSupplierData, insertCashAdvance } from "../../utils/server";

export const CashAdvance = () => {
  const [employeeName, setEmployeeName] = useState([{}]);
  const [employeeNumber, setEmployeeNumber] = useState([{}]);

  useEffect(() => {
    getEmployee().then((res) => {
      setEmployeeName(res);
    });
    getSupplierData().then((res) => {
      setEmployeeNumber(res);
    });
  }, []);

  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      accomodation: 0,
      airport_tax: 0,
      amount_curr: 0,
      company_code: "",
      currency: 0,
      department_no: "",
      department_user: "",
      documentation: 0,
      element_allocation: "",
      employee_name: "",
      employee_number: "",
      entertainment: 0,
      fee_comission: 0,
      foreign_accomodation: 0,
      foreign_entertainment: 0,
      foreign_meal: 0,
      foreign_other: 0,
      foreign_taxi: 0,
      foreign_ticket_airplane: 0,
      fuel: 0,
      local_material_purchase: 0,
      material_delivery: 0,
      meal: 0,
      mode_payment: "",
      no_accomodation: 0,
      no_airport_tax: 0,
      no_documentation: 0,
      no_fee_comission: 0,
      no_fuel: 0,
      no_local_material_purchase: 0,
      no_material_delivery: 0,
      no_meal: 0,
      no_others_1: 0,
      no_others_2: 0,
      no_others_3: 0,
      no_others_4: 0,
      no_others_5: 0,
      no_park_toll: 0,
      no_rental_car: 0,
      no_taxi: 0,
      no_telephone_voucher: 0,
      no_ticket_airplane_tram: 0,
      other: 0,
      others_1: 0,
      others_2: 0,
      others_3: 0,
      others_4: 0,
      others_5: 0,
      park_toll: 0,
      plan_date_on_field: null,
      plan_date_out_field: null,
      project_number: "",
      purpose_of_request: "",
      record_number: "",
      rental_car: 0,
      requisition_date: null,
      taxi: 0,
      telephone_voucher: 0,
      ticket_airplane: 0,
      ticket_airplane_tram: 0,
      total_currency_request: 0,
      total_idr_request: 0,
      total_manpower_duty: 0,
      type_payment: "",
    },
  });
  const onSubmit = (data) => {
    insertCashAdvance(data).then((res) => {
      console.log(res);
      if (res.status && res.status === 200) {
        alert(`Transaction Success (Insert ID: ${res.data.insertId})`);
      } else {
        alert(`Transaction Failed`);
      }
    });
  };

  return (
    <Box
      // component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Record Number" />} name="record_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Employee Name</InputLabel>
                    <Select
                      {...field}
                      label="Employee Name"
                      // onChange={(e) => {
                      //   setValue("supplier_name", e.target.value);
                      //   setValue("supplier_number", supplier.find((ele) => ele.supp_name === e.target.value).supp_number);
                      // }}
                    >
                      {employeeName.length > 0 &&
                        employeeName.map((res, idx) => {
                          return (
                            <MenuItem key={idx} value={res.empl_name}>
                              {res.empl_name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                )}
                name="employee_name"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Employee Number</InputLabel>
                    <Select
                      {...field}
                      label="Employee Number"
                      // onChange={(e) => {
                      //   setValue("supplier_name", e.target.value);
                      //   setValue("supplier_number", supplier.find((ele) => ele.supp_name === e.target.value).supp_number);
                      // }}
                    >
                      {employeeNumber.length > 0 &&
                        employeeNumber.map((res, idx) => {
                          return (
                            <MenuItem key={idx} value={res.supp_name}>
                              {res.supp_name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                )}
                name="employee_number"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department No." />} name="department_no" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Project Number" />} name="project_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Requisition Date" />}
                name="requisition_date"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Type Payment</InputLabel>
                    <Select {...field} label="Type Payment">
                      <MenuItem value={"A"}>Advance</MenuItem>
                      <MenuItem value={"D"}>Declare</MenuItem>
                      <MenuItem value={"N"}>Settlement</MenuItem>
                      <MenuItem value={"P"}>Payment</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="type_payment"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Mode Payment</InputLabel>
                    <Select {...field} label="Mode Payment">
                      <MenuItem value={"C"}>Cash</MenuItem>
                      <MenuItem value={"Q"}>Cheque / Giro</MenuItem>
                      <MenuItem value={"T"}>Transfer</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="mode_payment"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Purpose of Request" />} name="purpose_of_request" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Total IDR Request"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="total_idr_request"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Total Currency Request"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="total_currency_request"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Plan to Date on Field" />}
                name="plan_date_on_field"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Plan to Date out Field" />}
                name="plan_date_out_field"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Total Manpower On Duty"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="total_manpower_duty"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department User" />} name="department_user" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Element Allocation</InputLabel>
                    <Select {...field} label="Element Allocation">
                      <MenuItem value={"Cash On Hand"}>Cash On Hand</MenuItem>
                      <MenuItem value={"Material Local Purchase CA"}>Material Local Purchase CA</MenuItem>
                      <MenuItem value={"Monthly Operating"}>Monthly Operating</MenuItem>
                      <MenuItem value={"Petty Cash"}>Petty Cash</MenuItem>
                      <MenuItem value={"Project Operating"}>Project Operating</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="element_allocation"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Company Code" />} name="company_code" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Ticket (Airplane / Tram)"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="ticket_airplane_tram"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Airport Tax"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="airport_tax"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Taxi"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="taxi"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Meal"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="meal"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Accomodation"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="accomodation"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Park / Toll"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="park_toll"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Documentation"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="documentation"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Fee Comission"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="fee_comission"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Local Material Purchase"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="local_material_purchase"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Material Delivery"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="material_delivery"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Rental Car"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="rental_car"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Fuel"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="fuel"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Telephone Voucher"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="telephone_voucher"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 1"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="others_1"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 2"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="others_2"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 3"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="others_3"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 4"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="others_4"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 5"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="others_5"
                control={control}
              />
            </Grid>
            Foreign Currency
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Currency"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="currency"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Accomodation"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="foreign_accomodation"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Ticket (Airplane)"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="foreign_ticket_airplane"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Meal"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="foreign_meal"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Entertainment"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="foreign_entertainment"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Taxi"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="foreign_taxi"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Other"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="foreign_other"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            No Receipt
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Ticket (Airplane / Tram)"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_ticket_airplane_tram"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Airport Tax"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_airport_tax"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Taxi"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_taxi"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Meal"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_meal"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Accomodation"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_accomodation"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Park / Toll"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_park_toll"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Documentation"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_documentation"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Fee Comission"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_fee_comission"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Local Material Purchase"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_local_material_purchase"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Material Delivery"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_material_delivery"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Rental Car"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_rental_car"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Fuel"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_fuel"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Telephone Voucher"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_telephone_voucher"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 1"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_others_1"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 2"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_others_2"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 3"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_others_3"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 4"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_others_4"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Others 5"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="no_others_5"
                control={control}
              />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};
