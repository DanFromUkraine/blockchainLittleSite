import { Tangerine } from "next/font/google";
import Link from "next/link";
import { GoBackButton, NavLink } from "./client";
import clsx from "clsx";
const tangerine = Tangerine({ weight: "700", subsets: ["latin"] });

function Logo() {
  return (
    <Link href="/">
      <h1 className={clsx(tangerine.className, "text-4xl")}>
        Danylo Ovsiannikov
      </h1>
    </Link>
  );
}

export type Link = {
  href: string;
  label: string;
};
const Links: Link[] = [
  {
    href: "/law",
    label: "Закони",
  },
  {
    href: "/technology",
    label: "Технології",
  },
  {
    href: "/finance",
    label: "Фінанси",
  },
];

function NavList() {
  return (
    <ul className="flex justify-center items-center gap-4 hover:text-gray-700">
      {Links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <nav>
      <header className="flex justify-between py-5 w-screen px-6">
        <Logo />
        <NavList />
        <GoBackButton />
      </header>
    </nav>
  );
}

export function NavLinkUI({
  href,
  pathname,
  label,
}: {
  href: string;
  pathname: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={clsx({ "font-bold text-black": pathname === href })}
    >
      {label}
    </Link>
  );
}

export function GoBackButtonUI({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="hover:text-slate-900">
      Повернутися
    </button>
  );
}
