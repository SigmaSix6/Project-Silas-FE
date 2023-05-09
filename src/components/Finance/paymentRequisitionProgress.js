import { Checkbox, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";

export const PaymentRequisitionProgress = () => {
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
        <Grid container xs={3}>
          <Grid item>
            <TextField id="outlined" label="PR Number (Auto)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Effective Date" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Department User" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Element Allocation" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Finance Date Issue" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Invoices Received" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={3}>
          <Grid item>
            <TextField id="outlined" label="Supplier Invoice No" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Bank Beneficiary No" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Bank Debet No" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Giro Cheque No" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Paid Date" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Transfer Fee (IDR)" />
          </Grid>
        </Grid>
        <Grid container xs={3}>
          <Grid item>
            <TextField id="outlined" label="Total IDR" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total Currency" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Tax IDR" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Tax Currency" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Business Code" />
          </Grid>
        </Grid>
        <Grid container xs={3}>
          <Grid item>
            <TextField id="outlined" label="Supplier Name" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Department No" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Date Request" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Type Payment" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Mode Payment" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Project Number" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Number" />
          </Grid>
        </Grid>
      </Grid>
      <Grid container>
        <TextField id="outlined" label="Purpose of Req" defaultValue="" />
        <TextField id="outlined" label="Amount" defaultValue="" />
        <TextField id="outlined" label="Curr" defaultValue="" />
        <FormControlLabel control={<Checkbox id="outlined" label="Tax" defaultValue="" />} label="Tax" />
        <TextField id="outlined" label="Currency Today" defaultValue="" />
        <TextField id="outlined" label="Currency Type" defaultValue="" />
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
