type SeconderyMenuConstants = {
  id: string;
  title: string;
  url: string;
  inPage?: boolean;
};
export const SeconderyMenuConstants: SeconderyMenuConstants[] = [
  {
    id: "1",
    title: "Today's Deal",
    url: "/search?category=deal",
  },
  {
    id: "2",
    title: "New Arrivals",
    url: "/search?category=new-arrivals",
  },
  {
    id: "3",
    title: "Featured Products",
    url: "/search?category=featured-products",
  },
  {
    id: "4",
    title: "Best Sells",
    url: "/search?category=best-sells",
  },
  {
    id: "5",
    title: "Browsing History",
    url: "#browsing-history",
    inPage: true,
  },
  {
    id: "6",
    title: "Customer Service",
    url: "/search?category=customer-service",
  },
  {
    id: "7",
    title: "About Us",
    url: "/about-us",
  },
  {
    id: "8",
    title: "Contact Us",
    url: "/contact-us",
  },
  {
    id: "9",
    title: "Help",
    url: "/help",
  },
];
