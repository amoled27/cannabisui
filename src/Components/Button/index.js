import React, { useContext } from "react";
import { useTheme } from "../../Context/ThemeProvider";

const Button = ({ label, ...props }) => {
  const {theme} = useTheme();
  const buttonStyle = {
    // backgroundColor: theme.colors.primary,
    // color: theme.colors.light,
    // padding: `${theme.spacing.md} ${theme.spacing.lg}`,
    // border: "none",
    // borderRadius: "4px",
    // fontFamily: theme.fonts.primary,
    // cursor: "pointer",
  };
  return (
    <button style={buttonStyle} {...props}>
      {label}
    </button>
  );
};

export default Button;
