import { Props } from "next/script";
import styled from "styled-components";

interface ContainerMenuProps {
  active: boolean;
}

export const ContainerMenu = styled.nav<ContainerMenuProps>`
  position: relative;
  height: 100vh;

  max-width: 15vw;

  :active {
    /* background-color: #f00; */
  }

  ul {
    visibility: ${(props) => (props.active ? "visible" : "hidden")};
    opacity: ${(props) => (props.active ? 1 : 0)};
    /* opacity: 0; */
    transition: visibility 0.4s, opacity 0.5s linear;
    /* transition-delay: display 1s; */

    /* display: ${(props) => (props.active ? "block" : "none")}; */

    width: 15vw;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;

    li {
      background-color: #efefef;
      border-radius: 5px;
      padding: 10px 10px;
      margin: 5px;
    }
  }
`;
