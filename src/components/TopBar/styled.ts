import styled from "styled-components";
import { colors } from "../../styles/colors";
import Button from "../Button";


interface ButtonProps {
  bckColor?: string;
  color?: string;
  wd?: string;
  jContent?: string;
}

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 4rem;
  background-color: ${colors.color_primary_dark};
  border-radius: 0 0 10px 10px;

  p {
    font-size: 16px;
  }
`;

export const ButtonBack = styled(Button)<ButtonProps>;
