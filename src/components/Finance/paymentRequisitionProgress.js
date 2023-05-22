import { Checkbox, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Divider from "@mui/material/Divider";
import { useState } from "react";
// import { styled } from "@mui/system";

export const PaymentRequisitionProgress = () => {
  const [counter, setCounter] = useState(1);
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container={true}>
        <Grid item={true} xs={3}>
          <Grid item>
            <TextField id="pr_number" label="PR Number (Auto)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="effective_date" label="Effective Date" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="department_user" label="Department User" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="element_allocation" label="Element Allocation" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="finance_date" label="Finance Date Issue" />
          </Grid>
          <Grid item>
            <TextField id="invoices_received" label="Invoices Received" defaultValue="" />
          </Grid>
        </Grid>
        <Grid item={true} xs={3}>
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
        <Grid item={true} xs={3}>
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
        <Grid item={true} xs={3}>
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
      <br />
      <Divider />
      <br />
      <Grid container={true}>
        <Grid item xs={2}>
          <TextField id="purpose_req_01" label="Purpose of Req" defaultValue="" />
        </Grid>
        <Grid item xs={2}>
          <TextField id="amount_01" label="Amount" defaultValue="" />
        </Grid>
        <Grid item xs={2}>
          <TextField id="curr_01" label="Curr" defaultValue="" />
        </Grid>
        <Grid item xs={2}>
          <FormControlLabel sx={{ m: 1 }} control={<Checkbox id="tax_01" label="Tax" defaultValue="" />} label="Tax" />
        </Grid>
        <Grid item xs={2}>
          <TextField id="curr_today_01" label="Currency Today" defaultValue="" />
        </Grid>
        <Grid item xs={2}>
          <TextField id="curr_type_01" label="Currency Type" defaultValue="" />
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        color="inherit"
        onClick={(e) => {
          console.log(e.value);
        }}
        // className={classes.button}
      >
        Login
      </Button>
    </Box>
  );
};
