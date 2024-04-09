import React from "react";
import Button from ".";
import { ThemeProvider } from "../../Context/ThemeProvider";

const BtnWrapper = () => {
  return (
    <ThemeProvider>
      <Button />
    </ThemeProvider>
  );
};

export default BtnWrapper;