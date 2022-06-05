import React from "react";

import { Wrapper,Div,H3 } from "./FooterTopElements";

export const FooterTop = () => {

  const array1 = [
    "Personal Checking",
    "Personal Savings",
    "Personal Mortgages",
    "Personal Loans",
    "Personal Banking",
  ];
  const array2 = [
    "Business Checking",
    "Business Loans",
    "Small Business Administration",
    "Banking Additional Services",
    "E-Banking",
  ];
  const array3 = [
    "About Alister Bank",
    "Alister Bank Services",
    " Credit Cards",
    " Alister Bank Careers",
  ];
  const array4 = [
      
    "Alister Bank Recent News",
    "Alister Bank News",
    "Alister Bank Blog",
    "Alister Bank Careers",
    " Alister Bank FAQs",
  ];
  return <Wrapper>
     <Div>
     <H3>Personal Banking</H3>
      {array1.map((data=> (
          <card>
            <ul>
                <a href="/">{data}</a>
            </ul>
        </card>
            )))}
     </Div>
      <Div>
      <H3>Business Banking</H3>
      {array2.map((data=> (
          <card>
            <ul>
                <a href="/">{data}</a>
            </ul>
        </card>
            )))}
      </Div>
      <Div>
      <H3>Quick Links</H3>
      {array3.map((data=> (
          <card>
            <ul>
                <a href="/">{data}</a>
            </ul>
        </card>
            )))}
      </Div>
      <Div>
      <H3>News & Blog</H3>
      {array4.map((data=> (
          <card>
            <ul>
                <a href="/">{data}</a>
            </ul>
        </card>
            )))}
      </Div>
      
  </Wrapper>;
};
