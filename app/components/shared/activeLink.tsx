import Link from "next/link";
import { useRouter } from "next/router";
import {ReactElement} from "react";

interface ActiveLinkProps {
  children:
    | ReactElement
    | (({ active }: { active: boolean }) => ReactElement);
  href: string;
  as?: string;
}

export default function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const active = asPath === props.href || asPath === props.as;
  return (
    <Link {...props}>
      {typeof children === "function" ? children({ active }) : children}
    </Link>
  );
}
