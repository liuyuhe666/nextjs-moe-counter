import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-4 flex justify-center font-primary items-center">
          Made with ❤️ by{' '}
          <Link
            href="https://github.com/liuyuhe666"
            target="_blank"
            rel="noreferrer"
            className="text-palette-primary font-bold px-1"
          >
            Liu Yuhe
            </Link>
      </footer>
    );
}