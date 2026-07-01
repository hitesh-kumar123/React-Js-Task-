import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex rounded-lg bg-black px-6 py-3 text-white transition hover:bg-gray-800"
    >
      {children}
    </Link>
  );
}
