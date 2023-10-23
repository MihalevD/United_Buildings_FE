import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { autoPlay } from "react-swipeable-views-utils";
import styled from "@emotion/styled";
import SwipeableViews from "react-swipeable-views";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";
import BasicBox from "./BasicBox";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const CustomMobileStepper = styled(MobileStepper)`
  background: #f5f5f5 !important;
  borderradius: "30px";
`;

function Stepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    if (activeStep === 3) setActiveStep(-1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (activeStep === 0) setActiveStep(3);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", flexGrow: 1, borderRadius: "30px" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ borderRadius: "30px" }}
      >
        {images.map((step, index) => (
          <div
            key={step.label}
            style={{ borderRadius: "30px", backgroundColor: "black" }}
          >
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 500,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  borderRadius: "30px",
                  cursor: "pointer",
                  backgroundColor: "black",
                  transition: "0.3s",
                  ":hover": {
                    opacity: "0.5",
                    transition: "0.3s",
                  },
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <CustomMobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        backButton={
          <ChevronLeft sx={{ fontSize: "80px" }} onClick={handleBack} />
        }
        nextButton={
          <ChevronRight sx={{ fontSize: "80px" }} onClick={handleNext} />
        }
      />
    </Box>
  );
}

export default Stepper;
