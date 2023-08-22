import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { getBankCode, getBankName } from "../../utils/server";

export const InputStatementBank = () => {
  const [bank, setBank] = useState([{}]);
  const [bankCode, setBankCode] = useState([{}]);
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      bank_name: "",
      transaction_date: null,
      remarks: "",
      transaction_code: "",
      currency_type: "",
      cheque_giro: "",
      finance_description: "",
      deposit_idr: 0,
      withdrawal_idr: 0,
      deposit_usd: 0,
      withdrawal_usd: 0,
    },
  });
  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    getBankName().then((res) => {
      setBank(res);
    });
    getBankCode().then((res) => {
      setBankCode(res);
    });
  }, []);

  return (
    <Box
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
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Bank Name</InputLabel>
                    <Select {...field} label="Bank Name">
                      {bank.length > 0 &&
                        bank.map((res, idx) => {
                          return (
                            <MenuItem key={idx} value={res.bank_name}>
                              {res.bank_name}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                )}
                name="bank_name"
                control={control}
              />
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
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Transaction Code</InputLabel>
                    <Select {...field} label="Transaction Code">
                      {bankCode.length > 0 &&
                        bankCode.map((res, idx) => {
                          return (
                            <MenuItem key={idx} value={res.code_bank}>
                              {res.bank_desc}
                              {` (${res.code_bank})`}
                            </MenuItem>
                          );
                        })}
                    </Select>
                  </FormControl>
                )}
                name="transaction_code"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Currency Type</InputLabel>
                    <Select {...field} label="Currency Type">
                      <MenuItem key={0} value={"EUR"}>
                        EUR
                      </MenuItem>
                      <MenuItem key={1} value={"RP"}>
                        RP
                      </MenuItem>
                      <MenuItem key={2} value={"USD"}>
                        USD
                      </MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="currency_type"
                control={control}
              />
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
              <Controller
                render={({ field }) => <TextField {...field} label="Deposit IDR" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />}
                name="deposit_idr"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <TextField {...field} label="Withdrawal IDR" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />}
                name="withdrawal_idr"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <TextField {...field} label="Deposit USD" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />}
                name="deposit_usd"
                control={control}
              />
            </Grid>
            <Grid item>
              <Controller
                render={({ field }) => <TextField {...field} label="Withdrawal USD" inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }} />}
                name="withdrawal_usd"
                control={control}
              />
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
