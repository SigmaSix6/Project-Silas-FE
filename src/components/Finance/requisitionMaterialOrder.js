import { Checkbox, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";

export const RequisitionMaterialOrder = () => {
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
        <Grid item xs={6}>
          <Grid item>
            <DatePicker id="outlined" label="Date" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Number" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Project Name" />
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 0.5, minWidth: 120 }}>
              <Select id="outlined" label="Customer Name">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Customer PO No" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox id="outlined" label="Partial Delivery Allowed" />} label="Partial Delivery Allowed" />
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox id="outlined" label="Acceptance Protocol Required" />} label="Acceptance Protocol Required" />
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid item>
            <FormControl xs={{ m: 0.5, minWidth: 120 }}>
              <Select id="outlined" label="Customer Name">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Requested Delivery Week" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Schedule Delivery (1st)" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Schedule Delivery (2nd)" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Schedule Delivery (3rd)" />
          </Grid>
          <Grid item>
            <DatePicker id="outlined" label="Schedule Delivery (4th)" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Suggested Supplier" />
          </Grid>
        </Grid>
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
