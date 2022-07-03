import styled from "styled-components";
import { colors } from "../../styles/colors";

interface AProps {
  color?: string;
  wd?: string;
}

export const A = styled.a<AProps>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.color ? props.color : "#fff")};
  width: ${(props) => (props.wd ? props.wd : "min-content")};
`;
