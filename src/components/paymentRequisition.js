import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
            <TextField id="outlined" label="Supplier Name" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Supplier Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Department No." defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Date Request" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Type Payment" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Mode Payment" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Project Number" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Allocation Dept" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Element" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Company Code" defaultValue="" />
          </Grid>
        </Grid>
        <Grid container xs={4}>
          <Grid item>
            <DatePicker id="outlined" label="Target Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Status" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Approved Code" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Approved Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Entry By" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Update By" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Last Update" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Customer Name" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Number" defaultValue="" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Due Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Finance Progress" defaultValue="" />
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
