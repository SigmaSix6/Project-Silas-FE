import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const InputStatementBank = () => {
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
        <Grid container xs={6}>
          <Grid item>
            <TextField id="outlined" label="ID Number (Auto)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Bank Name" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Transaction Date" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Remarks" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Transaction Code" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Currency Type" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Cheque or Giro" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Finance Description" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={6}>
          <Grid item>
            <TextField id="outlined" label="Deposit IDR" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Withdrawal IDR" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Deposit USD" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Withdrawal USD" defaultValue="" />
          </Grid>
        </Grid>
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
