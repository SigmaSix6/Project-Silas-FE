import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Autocomplete from "@mui/material/Autocomplete";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { getSupplierData } from "../../utils/server";

export const PaymentRequisition = () => {
  let data;
  useEffect(() => {
    data = getSupplierData();
  }, []);

  const { control, handleSubmit } = useForm({
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
      request_date: "",
      supplier_name: "",
      supplier_number: "",
      tax_currency: "",
      tax_idr: "",
      total_currency: "",
      total_idr: "",
      type_payment: "",
    },
  });
  const onSubmit = (data) => console.log(data);

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
              <Controller render={({ field }) => <TextField {...field} label="PR Number" />} name="pr_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    onChange={(event, item) => {
                      field.onChange(item);
                    }}
                    options={[
                      { label: "The Godfather", id: 1 },
                      { label: "Pulp Fiction", id: 2 },
                    ]}
                    renderInput={(params) => <TextField {...params} label="Supplier Name" />}
                  />
                )}
                name="supplier_name"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Number" />} name="supplier_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department Number" />} name="department_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Request Date" />} name="request_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Type Payment" />} name="type_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Mode Payment" />} name="mode_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <Select {...field} label="Project Number" />} name="project_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <Select {...field} label="Allocation Dept" />} name="allocation_dept" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <Select {...field} label="Element" />} name="element" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <Select {...field} label="Company Code" />} name="company_code" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total IDR" />} name="total_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Currency" />} name="total_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Tax IDR" />} name="tax_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Tax Currency" />} name="tax_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Number" />} name="po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Invoice No" />} name="invoice_no" control={control} />
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
