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

export const MaterialStock = () => {
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
              <Controller render={({ field }) => <TextField {...field} label="Material Code" />} name="material_code" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Material Description" />} name="material_desc" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Part Number" />} name="part_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Serial Number" />} name="serial_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Initial Stock" />} name="initial_stock" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Stock Available" />} name="stock_available" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Store Location" />} name="store_location" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Last Price" />} name="last_price" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Currency" />} name="currency" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Manufacture" />} name="manufacture" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Status" />} name="status" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Model" />} name="model" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Last PO Number" />} name="last_po_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Last Project Number" />} name="last_project_number" control={control} />
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
