import Image from "next/image";
import img from "../../assets/logo-main.svg";
import { MdArrowRight, MdEast } from "react-icons/md";

import Button from "../../components/Button";
import { BoxComponent } from "../../styles/global";
import { ContainerMain } from "./styled";
import Link from "next/link";
import NavLink from "../../components/NavLink";

export default function Main(): JSX.Element {
  return (
    <ContainerMain>
      <article>
        <Image src={img} alt="Parking Control" />
      </article>

      <BoxComponent wd="100%" algItems="end" pd="0 10px">
        <NavLink href="/menu" wd="40%">
          <Button wd="100%" jContent="space-between">
            INICIAR
            <MdEast size={20} />
          </Button>
        </NavLink>
      </BoxComponent>
    </ContainerMain>
  );
}
