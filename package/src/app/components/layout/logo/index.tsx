import Image from "next/image";
import Link from "next/link";

const Logo = (props?: { sticky?: boolean }) => {
    const isSticky = Boolean(props?.sticky);
    return (
        <Link
            href="/"
            className="flex items-center opacity-100 transition-opacity duration-300 hover:opacity-95 shrink-0"
            aria-label="Creditor Academy Home"
        >
            <Image
                src={isSticky ? "/images/logo/creditorlogo.png" : "/images/logo/creditorlogowhite.png"}
                alt="Creditor Academy"
                width={1718}
                height={463}
                quality={100}
                priority
                unoptimized
                className="h-8 sm:h-9 md:h-10 lg:h-11 w-auto object-contain max-w-[180px] sm:max-w-[210px] md:max-w-[240px]"
            />
        </Link>
    );
};

export default Logo;
