import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
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
        <Grid container>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="CA ID Number" />} name="ca_id_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier (Employee) Name" />} name="supplier_employee_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Number" />} name="supplier_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department Number" />} name="department_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Project Number" />} name="project_number" control={control} />
            </Grid>
            <Grid item>
              <DatePicker id="outlined" label="Date of Request" />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Type of Payment" />} name="type_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Mode of Payment" />} name="mode_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Request Purpose" />} name="request_purpose" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Effective Date" />} name="effective_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Advance Amount (IDR)" />} name="advance_amount_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Advance Amount (Curr)" />} name="advance_amount_curr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Date of Finance Progress" />} name="date_finance_progress" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Amount Balance" />} name="amount_balance" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Return To Cash (IDR)" />} name="return_to_cash_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Amount Balance (Currency)" />} name="amount_balance_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Return To Cash (Currency)" />} name="return_to_cash_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Effective Date" />} name="effective_date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} label="Date out in Field" />} name="date_out_field" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Employee on Duty" />} name="total_employee_on_duty" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Element Allocation" />} name="element_allocation" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Cheque or Giro Number" />} name="cheque_giro_number" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Ticket (Airplane and Tram)" />} name="ticket_airplane_tram" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Airport Tax (Ticket)" />} name="airport_tax_ticket" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Taxi" />} name="taxi" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Meal" />} name="meal" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Accomodation" />} name="accomodation" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Park and Toll (Ticket)" />} name="park_toll_ticket" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Documentation (Admin)" />} name="documentation_admin" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Fee Comission" />} name="fee_comission" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Local Material Purchase" />} name="local_material_purchase" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Delivery of Material" />} name="delivery_of_material" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Rental Car" />} name="rental_car" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Fuel" />} name="fuel" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Telp Voucher" />} name="telp_voucher" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Other 1" />} name="other_1" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Other 2" />} name="other_2" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Other 3" />} name="other_3" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Other 4" />} name="other_4" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Other 5" />} name="other_5" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Currency" />} name="currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Accomodation" />} name="accomodation" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Ticket (Airplane)" />} name="ticket_airplane" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Meal" />} name="meal" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Entertainment" />} name="entertainment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Taxi" />} name="taxi" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Other" />} name="other" control={control} />
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
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};
