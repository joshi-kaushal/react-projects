import React from "react";

import Accordion from "./Projects/Accordion/Accordion";
import BirthdayReminder from "./Projects/BirthdayReminder/BirthdayReminder";
import MenuApp from "./Projects/Menu/MenuApp";
import Reviews from "./Projects/Reviews/Reviews";
import Tours from "./Projects/Tours/ToursApp";
import Tabs from "./Projects/Tabs/Tabs";
import Slider from "./Projects/Slider/Slider";
import LoremIpsum from "./Projects/LoremIpsum/LoremIpsum";
import ColorGenerator from "./Projects/ColorGenerator/ColorGenerator";
import Grocery from "./Projects/Grocery/Grocery";
import NavbarApp from "./Projects/Navbar/Navbar";
import ModalApp from "./Projects/Modal/ModalApp";
import SubMenuApp from "./Projects/SubMenus/SubMenuApp";
import Cart from "./Projects/Cart/Cart";
import Cocktail from "./Projects/Cocktail/Cocktail";

const projects = [
  {
    id: 1,
    name: "Birthday Reminder",
    slug: "/birthday-reminder",
    description: "A SPA to list people having birthdays	",
    component: <BirthdayReminder />,
  },
  {
    id: 2,
    name: "Accordion",
    slug: "/accordion",
    description: "Accordion",
    component: <Accordion />,
  },
  {
    id: 3,
    name: "Cocktail",
    slug: "/cocktail",
    description: "Know more about different cocktails",
    component: <Cocktail />,
  },
  {
    id: 4,
    name: "Grocery",
    slug: "/grocery",
    description: "Shop your groceries",
    component: <Grocery />,
  },
  {
    id: 5,
    name: "Lorem Ipsum Generator",
    slug: "/lorem-ipsum",
    description: "Lorem ipsum dolor sit amet",
    component: <LoremIpsum />,
  },
  {
    id: 6,
    name: "Color Generator",
    slug: "/color-generator",
    description: "Generate a color palette",
    component: <ColorGenerator />,
  },
  {
    id: 7,
    name: "Cafe Menu",
    slug: "/cafe-menu",
    description: "Menu for a cafe...",
    component: <MenuApp />,
  },
  {
    id: 8,
    name: "Modal",
    slug: "/modal",
    description: "Modal! :)",
    component: <ModalApp />,
  },
  {
    id: 9,
    name: "Navbar",
    slug: "/navabar",
    description: "Well, a Navbar!",
    component: <NavbarApp />,
  },
  {
    id: 10,
    name: "Product Reviews",
    slug: "/product-reviews",
    description: "A review slider, but simpler.",
    component: <Reviews />,
  },
  {
    id: 11,
    name: "Designation Slider",
    slug: "/designation-slider",
    description: "A slider built without any third party library",
    component: <Slider />,
  },
  {
    id: 12,
    name: "Stripe Homepage",
    slug: "/stripe-homepage",
    description: "Clone of the homepage of Stripe",
    component: <SubMenuApp />,
  },
  {
    id: 13,
    name: "Shopping Cart",
    slug: "/cart",
    description: "A shopping cart",
    component: <Cart />,
  },
  {
    id: 14,
    name: "Job Showcase",
    slug: "/job-showcase",
    description: "Show off your jobs in your portfolio",
    component: <Tabs />,
  },
  {
    id: 15,
    name: "Tour Planner",
    slug: "/tour-planner",
    description: "Plan your tour with ease",
    component: <Tours />,
  },
];

export default projects;
