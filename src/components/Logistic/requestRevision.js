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

export const RequestRevision = () => {
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
              <Controller render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Date" />} name="date" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Number" />} name="number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Project Name" />} name="project_name" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Customer Name</InputLabel>
                    <Select {...field} label="Customer Name">
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="customer_name"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Customer PO Number" />} name="customer_po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Partial Delivery Allowed" />}
                name="partial_delivery"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <FormControlLabel control={<Checkbox {...field} />} label="Acceptance Protocol Required" />}
                name="acceptance_protocol"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Delivery Instruction</InputLabel>
                    <Select {...field} label="Delivery Instruction">
                      <MenuItem value={"B"}>Batam</MenuItem>
                      <MenuItem value={"R"}>Regular</MenuItem>
                      <MenuItem value={"S"}>Singapore</MenuItem>
                      <MenuItem value={"SG"}>SGS Inspection Required</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="delivery_instruction"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Requested Delivery Week" />}
                name="req_delivery_week"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Schedule Delivery (1st)" />}
                name="schedule_01"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Schedule Delivery (2nd)" />}
                name="schedule_02"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Schedule Delivery (3rd)" />}
                name="schedule_03"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Schedule Delivery (4th)" />}
                name="schedule_04"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Suggested Supplier" />} name="suggested_supplier" control={control} />
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
