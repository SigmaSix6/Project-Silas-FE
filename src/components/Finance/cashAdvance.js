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
      record_number: "",
      // select: {},
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
              <Controller render={({ field }) => <TextField {...field} label="Record Number" />} name="record_number" control={control} defaultValue="" />
              {/* <TextField id="outlined" label="Record Number" defaultValue="" /> */}
            </Grid>
            <Grid item>
              <Select id="outlined" label="Employee Name" defaultValue="" />
            </Grid>
            <Grid item>
              <Select id="outlined" label="Employee Number" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Department No." defaultValue="" />
            </Grid>
            <Grid item>
              <DatePicker id="outlined" label="Project Number" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Requisition Date" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Type Payment" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Mode Payment" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Purpose of Request" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Total IDR Request" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Total Currency Request" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Plan to Date on Field" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Plan to Date out from Field" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Total Manpower On Duty" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Department User" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Element Allocation" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Company Code" defaultValue="" />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <TextField id="outlined" label="Ticket (Airplane / Tram)" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Airport Tax" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Taxi" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Meal" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Accomodation" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Park / Toll" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Documentation" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Fee Commission" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Local Material Purchase" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Material Delivery" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Rental Car" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Fuel" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Telephone Voucher" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Others" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Others" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Others" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Others" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Others" defaultValue="" />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <TextField id="outlined" label="Currency" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Amount of Curr" defaultValue="" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Accomodation" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Ticket (Airplane)" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Meal" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Entertainment" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Taxi" />
            </Grid>
            <Grid item>
              <TextField id="outlined" label="Other" />
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
