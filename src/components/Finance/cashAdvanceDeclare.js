import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const PaymentRequisitionView = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container>
        <Grid container xs={4}>
          <Grid item>
            <TextField id="outlined" label="CA ID Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Supplier (Employee) Name" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Supplier Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Department Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Project Number" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date of Request" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Type of Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Mode of Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Request Purpose" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Effective Date" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Advance Amount (IDR)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Advance Amount (Curr)" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date of Finance Progress" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Amount Balance" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Return To Cash (IDR)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Amount Balance (Currency)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Return To Cash (Currency)" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date on Duty (Field)" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date out in Field" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total Employee on Duty" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Element Allocation" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Cheque or Giro Number" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={4}>
          <Grid item>
            <TextField id="outlined" label="Ticket (Airplane and Tram)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Airport Tax (Ticket)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Taxi" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Meal" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Accomodation" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Park and Toll (Ticket)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Documentation (Admin)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Fee Comission" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Local Material Purchase" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Delivery of Material" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Rental Car" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Fuel" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Telp Voucher" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Other1" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Other2" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Other3" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Other4" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Other5" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Currency" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Accomodation" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Ticket (Airplane)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Meal" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Entertainment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Taxi" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Other" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={4}>
          <Grid item>
            <TextField id="outlined" label="Balance Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Desc Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Closed Date" />
          </Grid>
        </Grid>
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
