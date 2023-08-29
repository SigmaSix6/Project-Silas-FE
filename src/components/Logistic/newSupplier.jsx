import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm, Controller } from "react-hook-form";

export const NewSupplier = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      supplier_name: "",
      supplier_number: "",
      address: "",
      contact_name: "",
      phone_number: "",
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
          <Grid item xs={12}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} fullWidth label="Supplier Name" />} name="supplier_name" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} fullWidth label="Supplier Number" />} name="supplier_number" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} fullWidth label="Address" multiline rows={3} />} name="address" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} fullWidth label="Contact Name" />} name="contact_name" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    label="Phone Number"
                    inputProps={{ inputMode: "numeric" }}
                    onChange={(e) => {
                      let number = parseInt(e.target.value.replaceAll(".", ""));
                      if (Number.isNaN(number)) {
                        number = 0;
                      }
                      // setValue(field.name, new Intl.NumberFormat("id-EN").format(number));
                      setValue(field.name, number);
                    }}
                  />
                )}
                name="phone_number"
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
