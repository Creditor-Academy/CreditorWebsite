import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",
    newTab: false,
  },
  {
    id: 3,
    title: "Membership",
    path: "/masterclass-membership",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Workshop",
  //   path: "/workshop",
  //   newTab: false,
  // },
  // {
  //   id: 4,
  //   title: "Bootcamp",
  //   path: "/bootcamp",
  //   newTab: false,
  // },
  {
    id: 5,
    title: "Courses",
    path: "/services/course-cataloges",
    newTab: false,
  },
  {
    id: 6,
    title: "Services",
    path: "/services",
    newTab: false,
  },
  {
    id: 7,
    title: "Blogs",
    path: "/Blogs",
    newTab: false,
  },
  {
    id: 8,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },

];


const footerData = {
  name: "Creditor Academy",
  tagline: "Learn the Law. Know the Difference",
  info: [
    {
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883525/creditor-website-assets/images/footer/email-arrow.svg",
      link: "counselor@creditoracademy.com",
      href: "mailto:counselor@creditoracademy.com"
    },
    {
      icon: "https://res.cloudinary.com/dlndnmuq1/image/upload/v1768883529/creditor-website-assets/images/footer/Location.svg",
      link: "600 1st Ave Seattle wa 98104",
      href: "https://www.google.com/maps/place/Pioneer+Building,+Seattle,+WA+98104,+USA/@47.6022094,-122.3333874,3a,75y,90t/data=!3m8!1e2!3m6!1sCIHM0ogKEICAgIC0xcaLCw!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fgrass-cs%2FAABkmLe5vu_l-E00YjM_eyAWMRyxaAgkZcDx95b21rwVYNd7oNMMTcPxEWFmqyG0WCjuo16dOGlv6rOMvdlsYR0-m58WAOdYiNXFG8-6vJ7RqQi6eRxV8uKy6jWN97hSazwLSY15dyHR%3Dw152-h86-k-no!7i4032!8i2268!4m11!1m2!2m1!1spioneering+building!3m7!1s0x54906abaa4095833:0xc2ed0bb3a3cf4b34!8m2!3d47.6022094!4d-122.3333874!10e5!15sChNwaW9uZWVyaW5nIGJ1aWxkaW5nkgERY29tcG91bmRfYnVpbGRpbmfgAQA!16s%2Fg%2F11q2ngl2k7?entry=ttu&g_ep=EgoyMDI2MTExNi4wIKXMDSoASAFQAw%3D%3D"
    }
  ],
  links: [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "/services" },
    { name: "Membership", href: "/masterclass-membership" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Return & Refund", href: "/return-refund" },
    { name: "Error 404", href: "/not-found" }
  ],
  socialLinks: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
    { name: "Twitter", href: "https://x.com/" }
  ],
  copyright: "© Creditor Academy 2026"
};

export const GET = async () => {
  return NextResponse.json({
    footerData,
    MenuData
  });
};
