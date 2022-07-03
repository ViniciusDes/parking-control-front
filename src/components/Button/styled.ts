import styled from "styled-components";
import { colors } from "../../styles/colors";
import { heightButton } from "../../styles/sizes";

interface ButtonProps {
  bckColor?: string;
  color?: string;
  wd?: string;
  jContent?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.jContent ? props.jContent : "initial")};

  background-color: ${(props) =>
    props.bckColor ? props.bckColor : colors.color_primary_dark};

  color: ${(props) => (props.color ? props.color : "#fff")};
  border-radius: 1rem;
  min-height: ${heightButton};
  padding: 0 10px;
  width: ${(props) => (props.wd ? props.wd : "min-content")};
`;
