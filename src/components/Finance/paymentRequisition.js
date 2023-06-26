import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { getSupplierData } from "../../utils/server";

export const PaymentRequisition = () => {
  let data;
  const [test, setTest] = useState([{}]);
  useEffect(() => {
    data = getSupplierData();
  }, []);

  const { control, handleSubmit, unregister } = useForm({
    defaultValues: {
      allocation_dept: "",
      company_code: "",
      department_number: "",
      element: "",
      invoice_no: "",
      mode_payment: "",
      po_number: "",
      pr_number: "",
      project_number: "",
      request_date: undefined,
      supplier_name: "",
      supplier_number: "",
      tax_currency: "",
      tax_idr: "",
      total_currency: "",
      total_idr: "",
      type_payment: "",
    },
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
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PR Number" />} name="pr_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Supplier Name</InputLabel>
                    <Select {...field} label="Supplier Name">
                      <MenuItem value={"A"}>Ahmadi</MenuItem>
                      <MenuItem value={"B"}>Budi</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="supplier_name"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Supplier Number" />} name="supplier_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Department Number" />} name="department_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Request Date" />}
                name="request_date"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Type Payment</InputLabel>
                    <Select {...field} label="Type Payment">
                      <MenuItem value={"A"}>Advance</MenuItem>
                      <MenuItem value={"D"}>Declare</MenuItem>
                      <MenuItem value={"N"}>Settlement</MenuItem>
                      <MenuItem value={"P"}>Payment</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="type_payment"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Mode Payment</InputLabel>
                    <Select {...field} label="Mode Payment">
                      <MenuItem value={"C"}>Cash</MenuItem>
                      <MenuItem value={"Q"}>Cheque / Giro</MenuItem>
                      <MenuItem value={"T"}>Transfer</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="mode_payment"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Project Number</InputLabel>
                    <Select {...field} label="Project Number">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
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
                    <InputLabel>Allocation Dept</InputLabel>
                    <Select {...field} label="Allocation Dept">
                      <MenuItem value={10}>Engineering </MenuItem>
                      <MenuItem value={20}>Finance & Accounting</MenuItem>
                      <MenuItem value={30}>Logictic & Purchasing</MenuItem>
                      <MenuItem value={30}>Sales & Marketing</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="allocation_dept"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Element</InputLabel>
                    <Select {...field} label="Element">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="element"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Company Code</InputLabel>
                    <Select {...field} label="Company Code">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="company_code"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total IDR" />} name="total_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Total Currency" />} name="total_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Tax IDR" />} name="tax_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Tax Currency" />} name="tax_currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="PO Number" />} name="po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Invoice No" />} name="invoice_no" control={control} />
            </Grid>
          </Grid>
          {/* Dynamic form */}
          {test.map((e, idx) => {
            return (
              <Grid container={true}>
                <Grid item xs={2}>
                  <Controller
                    defaultValue={""}
                    render={({ field }) => <TextField {...field} label="Purpose of Req" />}
                    name={`purpose_req_${idx + 1}`}
                    control={control}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Controller defaultValue={""} render={({ field }) => <TextField {...field} label="Amount" />} name={`amount_${idx + 1}`} control={control} />
                </Grid>
                <Grid item xs={2}>
                  <Controller defaultValue={""} render={({ field }) => <TextField {...field} label="Curr" />} name={`curr_${idx + 1}`} control={control} />
                </Grid>
                <Grid item xs={2}>
                  <Controller
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        sx={{ m: 1 }}
                        control={<Checkbox label="Tax" checked={!!field.value} value={true} onChange={(e) => field.onChange(e)} />}
                        label="Tax"
                      />
                    )}
                    name={`tax_${idx + 1}`}
                    control={control}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Controller
                    defaultValue={""}
                    render={({ field }) => <TextField {...field} label="Currency Today" />}
                    name={`curr_today_${idx + 1}`}
                    control={control}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Controller
                    defaultValue={""}
                    render={({ field }) => <TextField {...field} label="Currency Type" />}
                    name={`curr_type_${idx + 1}`}
                    control={control}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Button
          sx={{ m: 0.5 }}
          variant="contained"
          type="button"
          color="info"
          onClick={(e) => {
            setTest([...test, {}]);
          }}
        >
          New Data
        </Button>
        <Button
          sx={{ m: 0.5 }}
          variant="contained"
          type="button"
          color="error"
          onClick={(e) => {
            unregister(`purpose_req_${test.length}`);
            unregister(`amount_${test.length}`);
            unregister(`curr_${test.length}`);
            unregister(`tax_${test.length}`);
            unregister(`curr_today_${test.length}`);
            unregister(`curr_type_${test.length}`);
            setTest([...test.filter((e, idx) => idx < test.length - 1 || idx === 0)]);
          }}
        >
          Remove Data
        </Button>

        <Button variant="contained" type="submit" color="primary" fullWidth>
          Submit
        </Button>
        {/* </Grid> */}
      </form>
    </Box>
  );
};
