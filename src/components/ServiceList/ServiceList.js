import React from "react";



import { Items, List } from "./ServiceListElements";
const ServiceList = () => {
  const serviceList = [
    "Latest News",
    "Personal Banking",
    "Business Banking",
    "Lending",
    "About Us",
    "Financial Answer Center",
    "Privilege",
    "Private",
    "Wealth",
    "Corporate",
    "Deals & More",
    "Interest",
    "Help",
    "Privacy",
    "Terms & Condition",
    "Fund",
    "Finance Reg",
  ];
  return (
    <Items>
      {serviceList.map((list) => (
        <List>{list}</List>
      ))}
    </Items>
  );
};

export default ServiceList;
