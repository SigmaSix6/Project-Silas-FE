import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export const InvoiceProcess = () => {
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
            <TextField id="outlined" label="ID Number" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Invoice Description" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Customer Name" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Company Code" defaultValue="" />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <Select id="outlined" label="Project Number" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Type of Receipt" defaultValue="" />
          </Grid>
          <Grid item>
            <Select id="outlined" label="Element Receipts" defaultValue="" />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid item>
            <TextField id="outlined" label="Total Amount (IDR)" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Total Amount (USD)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Tax Amount (IDR)" defaultValue="" />
          </Grid>
          <Grid item>
            <TextField id="outlined" label="Tax Amount (USD)" defaultValue="" />
          </Grid>
        </Grid>
      </Grid>
      {/* <TextField id="standard-search" label="Search field" type="search" variant="standard" />
        <TextField id="standard-helperText" label="Helper text" defaultValue="Default Value" helperText="Some important text" variant="standard" /> */}
    </Box>
  );
};
