import Image from "next/image";
import Link from "next/link";
// components
import Iconify from "@/components/iconify";
// sections
import FormMessage from "@/sections/form/form-message";

// ----------------------------------------------------------------------

export default function Footer() {
  const CONTACTS = [
    {
      label: "Email",
      href: "mailto:abdulmoiz.solaiman@outlook.com",
    },
    {
      label: "Phone",
      href: "tel:+639854648528",
    },
  ];

  return (
    <footer
      id="footer"
      className="fixed bottom-0 inset-x-0 z-0 pt-24 text-background bg-foreground"
    >
      <div className="px-2 md:px-4 flex flex-col lg:flex-row lg:items-baseline mb-4">
        <h1 className="text-7xl font-sans">GET IN TOUCH</h1>
        <h5 className="text-xl uppercase">[Drop Me a Messsage]</h5>
      </div>

      <div className="px-2 md:px-4 mb-6 grid grid-cols-1 lg:grid-cols-[40%_60%]">
        <div className="w-full lg:border-t border-background py-3 flex flex-col gap-2">
          {CONTACTS.map((contact) => (
            <Link
              key={contact.label}
              href={contact.href}
              className="text-xs uppercase flex gap-1 items-center hover:opacity-70 transition-opacity w-fit"
            >
              {contact.label}
              <Iconify icon="ph:arrow-up-right-thin" className="size-4" />
            </Link>
          ))}
        </div>

        <FormMessage />
      </div>

      <div className="px-2 flex justify-between items-center mb-2">
        <p className="text-xs font-sans uppercase font-thin">
          &copy;{new Date().getFullYear()} All Rights Reserved
        </p>

        <p className="text-xs uppercase font-thin opacity-50">
          Follow me&nbsp;
          <Link
            href="https://www.linkedin.com/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-semibold opacity-100 hover:opacity-70 transition-opacity"
          >
            @amsolaiman
          </Link>
        </p>
      </div>

      <Image
        src="/assets/footer_brand_name.svg"
        alt="Footer Brand"
        width={1280}
        height={88}
        draggable={false}
        className="lg:-mb-1 w-full h-fit object-bottom object-cover"
      />
    </footer>
  );
}
