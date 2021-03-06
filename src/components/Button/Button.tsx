import { css } from "@emotion/react";
import {
  Button as ButtonBase,
  ButtonProps as ButtonPropsBase,
} from "@material-ui/core";
import React from "react";

type ButtonProps = ButtonPropsBase;

export const Button: React.FunctionComponent<ButtonProps> = (props) => (
  <ButtonBase
    {...props}
    css={css`
      border-radius: 0;
      min-width: 0;
      padding: 0;
      text-align: center;
    `}
  >
    {props.children}
  </ButtonBase>
);
