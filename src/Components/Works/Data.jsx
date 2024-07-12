import ecomm from "../../assets/ecomm.jpg";
import carRental from "../../assets/car-rental.jpg";
import vps from "../../assets/vps-main.jpg";

export const projectsData = [
  {
    id: 1,
    image: ecomm,
    title: "RAOUF e-commerce",
    category: "web",
    tools: "ts,react",
    url: "https://raouf-ecomm.vercel.app/",
  },
  {
    id: 2,
    image: carRental,
    title: "Car Rental",
    category: "web",
    tools: "js,react",
    url: "https://car-rental-bni.vercel.app/",
  },
  {
    id: 3,
    image: vps,
    title: "Vps",
    category: "web",
    tools: "nextjs,ts,tailwind",
    url: "https://vps-app2.vercel.app/",
  },
];

export const projectsNav = [
  {
    name: "all",
  },

  {
    name: "web",
  },
  {
    name: "CMS",
  },
];
