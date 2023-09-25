import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";
import { insertPaymentOrder } from "../../utils/server";

export const PaymentPurchaseOrder = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      bank_document_paid: "",
      bank_transfer_number: "",
      business_unit: "",
      currency: "",
      department_number: "",
      doc_number: "",
      effective_date: null,
      giro_cheque_number: "",
      inv_date_received: null,
      mode_payment: "",
      po_amount_currency: "",
      po_amount_idr: "",
      po_description: "",
      po_number: "",
      po_type: "",
      project_number: "",
      request_date: null,
      supplier_inv_number: "",
      supplier_name: "",
      supplier_number: "",
      total_currency: "",
      total_idr: "",
      total_idr_curr: "",
      total_idr_curr_fee: "",
      total_tax_currency: "",
      total_tax_idr: "",
      transfer_date: null,
      transfer_fee_idr: "",
      transfer_fee_other_idr: "",
      type_payment: "",
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    insertPaymentOrder(data).then((res) => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={6}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="DOC Number" />} name="doc_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Number" />} name="po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Name" />} name="supplier_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Number" />} name="supplier_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Project Number" />} name="project_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Effective Date" />}
                name="effective_date"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Transfer Date" />}
                name="transfer_date"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Bank Document (To paid)" />} name="bank_document_paid" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Bank Transfer Number" />} name="bank_transfer_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Giro / Cheque Number" />} name="giro_cheque_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total (IDR)" />} name="total_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total (Currency)" />} name="total_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Currency" />} name="currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="All Total (IDR + Curr)" />} name="total_idr_curr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Transfer Fee (IDR)" />} name="transfer_fee_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Transfer Fee Other (IDR)" />} name="transfer_fee_other_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="All Total (IDR + Curr + Fee)" />} name="total_idr_curr_fee" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Business Unit" />} name="business_unit" control={control} />
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
              <Controller render={({ field }) => <TextField {...field} label="PO Type" />} name="po_type" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Description" />} name="po_description" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier INV Number" />} name="supplier_inv_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="INV Date Received" />}
                name="inv_date_received"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Amount Currency" />} name="po_amount_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Amount IDR" />} name="po_amount_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Tax Currency" />} name="total_tax_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Tax IDR" />} name="total_tax_idr" control={control} />
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
