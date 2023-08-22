import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";

export const MaterialPurchaseOrder = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      // component="form"
      sx={{
        "& .MuiTextField-root": { m: 0.5 },
      }}
      noValidate
      autoComplete="off"
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={6}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO No. (auto)" />} name="po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>TO</InputLabel>
                    <Select {...field} label="TO">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="to"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Contact Name" />} name="contact_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="From" />} name="from" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Date of PO" />}
                name="date_po"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Reff of PO" />} name="reff_po" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="CC1" />} name="cc_1" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="CC2" />} name="cc_2" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="CC3" />} name="cc_3" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Project Number</InputLabel>
                    <Select {...field} label="Project Number">
                      <MenuItem value={"B"}>Batam</MenuItem>
                      <MenuItem value={"R"}>Regular</MenuItem>
                      <MenuItem value={"S"}>Singapore</MenuItem>
                      <MenuItem value={"SG"}>SGS Inspection Required</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="project_number"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Description of Order" />} name="description_order" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Status Payment</InputLabel>
                    <Select {...field} label="Status Payment">
                      <MenuItem value={"B"}>Bank Transfer</MenuItem>
                      <MenuItem value={"R"}>Cash</MenuItem>
                      <MenuItem value={"S"}>Cheque / Giro</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="status_payment"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="ETA" />} name="eta" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Project Name" />} name="project_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Customer Name" />} name="customer_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="RTO Date" />} name="rto_date" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Company Code</InputLabel>
                    <Select {...field} label="Company Code">
                      <MenuItem value={"01"}>PT. SIMOCO INDONESIA</MenuItem>
                      <MenuItem value={"02"}>PT. MOBILE NETWORK INDONESIA</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="company_code"
                control={control}
              />
            </Grid>
          </Grid>
        </Grid>
        <Button variant="contained" type="submit" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};
