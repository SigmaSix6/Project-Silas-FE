import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const DataProjectView = () => {
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
        <Grid item xs={4}>
          <Grid item>
            <TextField id="outlined" label="Project Number" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Customer Code" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Originator" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Contract Number" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Project Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Sales Dept (Signed)" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Log Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Equip Received (DT)" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Invoice Code" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Invoice Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Project Description" />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <DatePicker id="outlined" label="Target Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Status" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Approved Code" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Approved Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Entry By" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Update By" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Last Update" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Customer Name" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="PO Number" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Due Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Finance Progress" />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <TextField id="outlined" label="Balance Payment" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Desc Payment" />
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
