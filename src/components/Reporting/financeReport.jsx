import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useForm, Controller } from "react-hook-form";
import { downloadExcel } from "react-export-table-to-excel";
import { getIncomeSalesReport, getPaymentPoReport, getProjectNumberReport } from "../../utils/server";

export const FinanceReport = () => {
  const currYear = new Date().getFullYear();
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: {
      report_type: "",
      year: currYear,
    },
  });
  const onSubmit = (data) => {
    console.log(data);
    if (data.year > currYear || typeof data.year !== "number") {
      alert("Please Insert Valid Year");
    } else {
      switch (data.report_type) {
        case "A":
          getProjectNumberReport().then((res) => {
            console.log(res);
            const header = [
              "Project Number",
              "Customer",
              "Originator",
              "Contract Number",
              "Project Date",
              "Project Description",
              "Value Proj IDR",
              "Value Proj Curr",
              "Currency",
              "Close Date",
            ];
            // res.data.push({ PN_val_idr: 1234 });
            downloadExcel({
              fileName: `Project Number Report (${data.year})`,
              sheet: "Sheet1",
              tablePayload: {
                header,
                body: res.data,
              },
            });
          });
          break;
        case "B":
          break;
        case "C":
          getPaymentPoReport().then((res) => {
            console.log(res);
            const header = ["Project Number", "Supplier Name", "Customer Name", "Log Dept Number", "Date Request", "Date Paid", "Total Amount"];
            // res.data.push({ PN_val_idr: 1234 });
            downloadExcel({
              fileName: `PO Paid Report (${data.year})`,
              sheet: "Sheet1",
              tablePayload: {
                header,
                body: res.data,
              },
            });
          });
          break;
        case "D":
          getIncomeSalesReport().then((res) => {
            console.log(res);
            // const header = ["Income Date", "Inv Amount", "Invoice Tax", "Actual Income", "Act vs Inv"];
            // // res.data.push({ PN_val_idr: 1234 });
            // downloadExcel({
            //   fileName: `Income Sales (${data.year})`,
            //   sheet: "Sheet1",
            //   tablePayload: {
            //     header,
            //     body: res.data,
            //   },
            // });
          });
          break;
        case "E":
          break;
        default:
          alert("No Report Type!");
      }
    }
  };

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
              <Controller
                render={({ field }) => (
                  <FormControl sx={{ m: 0.5, minWidth: 210 }}>
                    <InputLabel>Type of Report</InputLabel>
                    <Select {...field} label="Type of Report">
                      <MenuItem value={"A"}>Project Number</MenuItem>
                      <MenuItem value={"B"}>PO By Supplier Type</MenuItem>
                      <MenuItem value={"C"}>PO Paid</MenuItem>
                      <MenuItem value={"D"}>Income Invoice</MenuItem>
                      <MenuItem value={"E"}>Credit Invoice</MenuItem>
                    </Select>
                  </FormControl>
                )}
                name="report_type"
                control={control}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid item>
              <Controller
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Year"
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
                name="year"
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
