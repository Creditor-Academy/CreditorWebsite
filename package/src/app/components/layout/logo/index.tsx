import Image from "next/image";
import Link from "next/link";

const Logo = (props?: { sticky?: boolean }) => {
    return (
        <Link
            href="/"
            className="flex items-center opacity-100 transition-opacity duration-300 hover:opacity-95 shrink-0"
        >
            <Image
                src="/images/logo/creditor-academy-header-logo.png"
                alt="Creditor Academy"
                width={1024}
                height={345}
                quality={100}
                priority
                className="h-11 sm:h-13 md:h-14 lg:h-15 w-auto object-contain"
            />
        </Link>
    );
};

export default Logo;