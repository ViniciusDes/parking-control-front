import { useState } from "react";
import { ContainerMenu } from "./styled";

export default function Menu(): JSX.Element {
  const [active, setActive] = useState(false);

  return (
    <ContainerMenu
      active={active}
      onClick={() => {
        setActive(active ? false : true);
      }}
    >
      <ul>
        <li>Gerencimento de vagas</li>
        <li>ADM - Sistenma</li>
        <li>Financeiro</li>
      </ul>
    </ContainerMenu>
  );
}
