import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import RowAndColumnSpacing from "./FormCard";
import StaticDatePickerLandscape from "./Calendar";
import StaticTimePickerLandscape from "./Time";

export default function UserSteps() {
  const [activeStep, setActiveStep] = React.useState(0);

  const [date, setDate] = React.useState(new Date());

  const [time, setTime] = React.useState(new Date());

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
        width: "560px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
        mx: "auto",
        mt: 5,
        p: 1,
      }}
    >
      <Typography variant="h1" sx={{ pb: "5px" }}>
        OpenBook
      </Typography>
      <Typography variant="h3">Book Appointment Below!</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
        <Step>
          <StepLabel>Select A Date:</StepLabel>
          <StepContent>
            <Typography>
              <StaticDatePickerLandscape date={date} setDate={setDate} />
            </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
                <Button disabled onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Select A Time:</StepLabel>
          <StepContent>
            <Typography>
              <StaticTimePickerLandscape time={time} setTime={setTime} />
            </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Continue
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
        <Step>
          <StepLabel
            optional={<Typography variant="caption">Last step</Typography>}
          >
            Input Contact Information:
          </StepLabel>
          <StepContent>
            <Typography>
              <RowAndColumnSpacing />
            </Typography>
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Finish
                </Button>
                <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                  Back
                </Button>
              </div>
            </Box>
          </StepContent>
        </Step>
      </Stepper>
      {activeStep === 3 && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All Steps Completed - Pending Confirmation</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
