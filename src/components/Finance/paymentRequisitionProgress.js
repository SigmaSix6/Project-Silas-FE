import { Checkbox, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";

export const PaymentRequisitionProgress = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });
  const onSubmit = (data) => console.log(data);

  const [counter, setCounter] = useState(1);
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
          <Grid item={true} xs={3}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PR Number (Auto)" />} name="pr_number_auto" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Effective Date" />} name="effective_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department User" />} name="department_user" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Element Allocation" />} name="element_allocation" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Finance Date Issue" />} name="finance_date_issue" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Invoices Received" />} name="invoices_received" control={control} />
            </Grid>
          </Grid>
          <Grid item={true} xs={3}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Invoice No" />} name="supplier_invoice_no" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Bank Beneficiary No" />} name="bank_beneficiary_no" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Bank Debet No" />} name="bank_debet_no" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Giro Cheque No" />} name="giro_cheque_no" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Paid Date" />} name="paid_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Transfer Fee (IDR)" />} name="transfer_fee_idr" control={control} />
            </Grid>
          </Grid>
          <Grid item={true} xs={3}>
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
              <Controller render={({ field }) => <TextField {...field} label="Tax Currency" />} name="tax_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Business Code" />} name="business_code" control={control} />
            </Grid>
          </Grid>
          <Grid item={true} xs={3}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Name" />} name="supplier_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department No" />} name="department_no" control={control} />
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
              <Controller render={({ field }) => <TextField {...field} label="PO Number" />} name="po_number" control={control} />
            </Grid>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        <Grid container={true}>
          <Grid item xs={2}>
            <TextField id="purpose_req_01" label="Purpose of Req" />
          </Grid>
          <Grid item xs={2}>
            <TextField id="amount_01" label="Amount" />
          </Grid>
          <Grid item xs={2}>
            <TextField id="curr_01" label="Curr" />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel sx={{ m: 1 }} control={<Checkbox id="tax_01" label="Tax" />} label="Tax" />
          </Grid>
          <Grid item xs={2}>
            <TextField id="curr_today_01" label="Currency Today" />
          </Grid>
          <Grid item xs={2}>
            <TextField id="curr_type_01" label="Currency Type" />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};
