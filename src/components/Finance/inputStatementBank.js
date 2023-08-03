import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useForm, Controller } from "react-hook-form";

export const InputStatementBank = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });
  const onSubmit = (data) => console.log(data);

  return (
    <Box
      component="form"
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
              <Controller render={({ field }) => <TextField {...field} label="ID Number (Auto)" />} name="id_number_auto" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Bank Name" />} name="bank_name" control={control} />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <DatePicker {...field} sx={{ m: 0.5, maxWidth: 210 }} label="Transaction Date" />}
                name="transaction_date"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Remarks" />} name="remarks" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Transaction Code" />} name="transaction_code" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Currency Type" />} name="currency_type" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Cheque or Giro" />} name="cheque_giro" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Finance Description" />} name="finance_description" control={control} />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Deposit IDR" />} name="deposit_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Withdrawal IDR" />} name="withdrawal_idr" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Deposit USD" />} name="deposit_usd" control={control} />
            </Grid>
            <Grid item>
              <Controller render={({ field }) => <TextField {...field} label="Withdrawal USD" />} name="withdrawal_usd" control={control} />
            </Grid>
          </Grid>
          <Button variant="contained" type="submit" color="primary" fullWidth>
            Submit
          </Button>
        </Grid>
      </form>
    </Box>
  );
};
