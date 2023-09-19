import { useForm, Controller } from "react-hook-form";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const DataProjectView = () => {
  const { control, handleSubmit, unregister, setValue } = useForm({
    defaultValues: {
      allocation_dept: "",
      company_code: "",
      department_number: "",
      element: "",
      invoice_no: "",
      mode_payment: "",
      po_number: "",
      pr_number: "",
      project_number: "",
      request_date: null,
      supplier_name: "",
      supplier_number: "",
      tax_currency: "",
      tax_idr: "",
      total_currency: "",
      total_idr: "",
      type_payment: "",
    },
  });
  const onSubmit = (data) => {
    data = { ...data, detailLength: test.length };
    console.log(data);
    insertPaymentReq(data).then((res) => {
      console.log(res);
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
      <Grid container>
        <Grid item xs={4}>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Project Number" />} name="project_number" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Customer Code" disabled />} name="customer_code" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Originator" disabled />} name="originator" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Contract Number" disabled />} name="contract_number" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Project Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="project_date"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Sales Dept (Signed)" disabled />} name="sales_dept_signed" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Log Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="log_date"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Equip Received (DT)" disabled />} name="equip_received" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Invoice Code" disabled />} name="invoice_code" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Invoice Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="invoice_date"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Project Description" disabled />} name="project_description" control={control} />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Target Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="target_date"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Status" disabled />} name="status" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Approved Code" disabled />} name="approved_code" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Approved Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="approved_date"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Entry By" disabled />} name="entry_by" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Update By"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="update_by"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Last Update"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="last_update"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Customer Name" disabled />} name="customer_name" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="PO Number" disabled />} name="po_number" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Due Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="due_date"
              control={control}
            />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Finance Progress" disabled />} name="finance_progress" control={control} />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Balance Payment" disabled />} name="balance_payment" control={control} />
          </Grid>
          <Grid item>
            <Controller render={({ field }) => <TextField {...field} label="Desc Payment" disabled />} name="desc_payment" control={control} />
          </Grid>
          <Grid item>
            <Controller
              render={({ field }) => (
                <DatePicker
                  {...field}
                  sx={{ m: 0.5, maxWidth: 210 }}
                  label="Closed Date"
                  disabled
                  // onChange={(e) => {
                  //   console.log(typeof getValues("request_date"));
                  //   setValue("request_date", e);
                  // }}
                />
              )}
              name="closed_date"
              control={control}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
