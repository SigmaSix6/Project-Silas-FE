import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const PaymentPurchaseOrder = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container>
        <Grid container xs={6}>
          <Grid item>
            <TextField id="outlined" label="DOC Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Supplier Name" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Supplier Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Project Number" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Effective Date" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date of Transfer" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Bank Document (To paid)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Bank Transfer Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Giro / Cheque Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total (IDR)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total (Currency)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Currency" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="All Total (IDR + Curr)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Transfer Fee (IDR)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Transfer Fee Other (IDR)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="All Total (IDR + Curr + Fee)" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Grid item>
            <TextField id="outlined" label="Business Unit" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Department Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Request Date" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Type Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Mode Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Type of PO" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Description of PO" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Supplier INV Number" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date Received of INV" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Amount Currency" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Amount IDR" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total Tax Currency" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total Tax IDR" defaultValue="" />
          </Grid>
        </Grid>
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
