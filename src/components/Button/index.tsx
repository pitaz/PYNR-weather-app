import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import { ButtonProps } from "./interfaces";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const CustomButton: FC<ButtonProps> = ({title, onClick}) => {
  const classes = useStyles();
  return (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
