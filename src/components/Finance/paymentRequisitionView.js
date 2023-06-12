import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

export const PaymentRequisitionView = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
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
        <Grid container={true}>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PR Number" />} name="pr_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Name" />} name="supplier_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Number" />} name="supplier_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department No." />} name="department_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Date Request" />} name="date_request" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Type Payment" />} name="type_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Mode Payment" />} name="mode_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Project Number" />} name="project_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Allocation Dept" />} name="allocation_dept" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Element" />} name="element" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Company Code" />} name="company_code" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Target Date" />} name="target_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Status" />} name="status" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Approved Code" />} name="approved_code" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Approved Date" />} name="approved_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Entry By" />} name="entry_by" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Update By" />} name="update_by" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Last Update" />} name="last_update" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Customer Name" />} name="customer_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Number" />} name="po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Due Date" />} name="due_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Finance Progress" />} name="finance_progress" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Balance Payment" />} name="balance_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Desc Payment" />} name="desc_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Closed Date" />} name="closed_date" control={control} />
            </Grid>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};
