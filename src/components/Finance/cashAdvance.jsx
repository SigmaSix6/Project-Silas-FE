import { Grid, Select } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";

export const CashAdvance = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      accomodation: "",
      airport_tax: "",
      amount_curr: "",
      company_code: "",
      currency: "",
      department_no: "",
      department_user: "",
      documentation: "",
      enterrtainment: "",
      fee_comission: "",
      fuel: "",
      local_material_purchase: "",
      material_delivery: "",
      meal: "",
      mode_payment: "",
      other: "",
      others_1: "",
      others_2: "",
      others_3: "",
      others_4: "",
      others_5: "",
      park_toll: "",
      plan_date_on_field: "",
      plan_date_out_field: "",
      project_number: "",
      purpose_of_request: "",
      record_number: "",
      rental_car: "",
      requisition_date: null,
      taxi: "",
      telephone_voucher: "",
      ticket_airplane: "",
      ticket_airplane_tram: "",
      total_currency_request: "",
      total_idr_request: "",
      total_manpower_duty: "",
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
              <Controller render={({ field }) => <TextField {...field} label="Record Number" />} name="record_number" control={control} />
            </Grid>
            <Grid item>
              <Select label="Employee Name" defaultValue={""} />
            </Grid>
            <Grid item>
              <Select label="Employee Number" defaultValue={""} />
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
              <Controller render={({ field }) => <TextField {...field} label="Type Payment" />} name="type_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Mode Payment" />} name="mode_payment" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Purpose of Request" />} name="purpose_of_request" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total IDR Request" />} name="total_idr_request" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Currency Request" />} name="total_currency_request" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Plan to Date on Field" />} name="plan_date_on_field" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Plan to Date on Field" />} name="plan_date_out_field" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Manpower On Duty" />} name="total_manpower_duty" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department User" />} name="department_user" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Element Allocation" />} name="total_manpower_duty" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Company Code" />} name="company_code" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Ticket (Airplane / Tram)" />} name="ticket_airplane_tram" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Airport Tax" />} name="airport_tax" control={control} />
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
              <Controller render={({ field }) => <TextField {...field} label="Park / Toll" />} name="park_toll" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Documentation" />} name="documentation" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Fee Comission" />} name="fee_comission" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Local Material Purchase" />} name="local_material_purchase" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Material Delivery" />} name="material_delivery" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Rental Car" />} name="rental_car" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Fuel" />} name="fuel" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Telephone Voucher" />} name="telephone_voucher" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Others 1" />} name="others_1" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Others 2" />} name="others_2" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Others 3" />} name="others_3" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Others 4" />} name="others_4" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Others 5" />} name="others_5" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Currency" />} name="currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Amount of Curr" />} name="amount_curr" control={control} />
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
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};
