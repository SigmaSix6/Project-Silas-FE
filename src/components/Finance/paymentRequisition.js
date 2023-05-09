import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const PaymentRequisition = () => {
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
            <TextField id="outlined" label="PR Number" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Supplier Name" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Supplier Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Department No." defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date Request" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Type Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Mode Payment" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Project Number" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Allocation Dept" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Element" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Company Code" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={4}>
          <Grid item>
            <TextField id="outlined" label="Total IDR" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total Currency" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Tax IDR" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Tax Currency" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Invoice No" />
          </Grid>
        </Grid>
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
