import Link from "next/link";
import { A } from "./styled";

interface NavLinkProps {
  children?: JSX.Element | Element | string;
  href: string;
  color?: string;
  wd?: string;
}

export default function NavLink({ href, children, color, wd }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <A wd={wd} color={color}>
        {children}
      </A>
    </Link>
  );
}
