import { Checkbox, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
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
              <Controller render={({ field }) => <TextField {...field} label="DOC Number" />} name="doc_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Number" />} name="po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Supplier Name</InputLabel>
                    <Select {...field} label="Supplier Name">
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
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Supplier Number</InputLabel>
                    <Select {...field} label="Supplier Number">
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
              <Controller render={({ field }) => <TextField {...field} label="Department Number" />} name="department_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Date of Request" />}
                name="date_request"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Payment Type</InputLabel>
                    <Select {...field} label="Payment Type">
                      <MenuItem value={"A"}>Advance</MenuItem>
                      <MenuItem value={"D"}>Declare</MenuItem>
                      <MenuItem value={"N"}>Settlement</MenuItem>
                      <MenuItem value={"P"}>Payment</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="payment_type"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Payment Mode</InputLabel>
                    <Select {...field} label="Payment Mode">
                      <MenuItem value={"C"}>Cash</MenuItem>
                      <MenuItem value={"Q"}>Cheque / Giro</MenuItem>
                      <MenuItem value={"T"}>Bank Transfer</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="payment_type"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Company Code</InputLabel>
                    <Select {...field} label="Company Code">
                      <MenuItem value={"01"}>PT. SIMOCO INDONESIA</MenuItem>
                      <MenuItem value={"02"}>PT. MOBILE DIGITAL NETWORK INDONESIA</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="company_code"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Request Type</InputLabel>
                    <Select {...field} label="Request Type">
                      <MenuItem value={"Material Purchase Order"}>Material Purchase Order</MenuItem>
                      <MenuItem value={"Material Other"}>Material Other</MenuItem>
                      <MenuItem value={"Material Documents"}>Material Documents</MenuItem>
                      <MenuItem value={"Material Customs"}>Material Customs</MenuItem>
                      <MenuItem value={"Material and Airfreight"}>Material and Airfreight</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="request_type"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Request Description" />} name="request_description" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Invoice Number" />} name="supp_invoice_num" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Invoice Receive Date" />}
                name="invoice_receive_date"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Amount Currency" />} name="amount_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Amount Rupiah" />} name="amount_rupiah" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Currency Type</InputLabel>
                    <Select {...field} label="Currency Type">
                      <MenuItem value={"AUD"}>AUD</MenuItem>
                      <MenuItem value={"EUR"}>EUR</MenuItem>
                      <MenuItem value={"GBP"}>GBP</MenuItem>
                      <MenuItem value={"RP"}>RP</MenuItem>
                      <MenuItem value={"USD"}>USD</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="company_code"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <FormControlLabel sx={{ m: 1 }} control={<Checkbox label="Tax" />} label="Tax" />}
                name="tax"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Tax Currency" />} name="tax_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Tax Rupiah" />} name="tax_rupiah" control={control} />
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
