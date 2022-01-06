import React from "react";
import footerLogo from "../assets/SVG/logo_dribbble.png";
import fillingExpenses from "../assets/finances-img.jpeg";
import thirdPartyImg from "../assets/invoices-img.jpeg";
import gettingPaid from "../assets/getting-paid-img.jpeg";
import trialImg from "../assets/trial-period.jpeg";
import whoImg from "../assets/who-is-who.jpeg";

export const contents = [
  {
    id: 1,
    image: fillingExpenses,
    alt: "filling expenses article",
    category: "finance",
    title: "filing expenses",
    desc:
      "How to get reimbursed for expenses? In order to be reimbursed for expenses incurred on behalf of Status during the development of the project, you will need to invoice Status and submit a",
    logo: footerLogo,
    duration: "3 min read",
  },
  {
    id: 2,
    image: thirdPartyImg,
    alt: "third party article",
    category: "finance",
    title: "Third party invoices format",
    desc:
      "When subscribing to services or paying external vendors &amp; contractors, please make sure that the invoices they provide are fully complete. This page has more information on what we'll need. Here's a sample",
    logo: footerLogo,
    duration: "I min read",
  },
  {
    id: 3,
    image: gettingPaid,
    alt: "getting paid article",
    category: "finance",
    title: "getting paid",
    desc:
      "Send your invoice (in PDF format only) to billing@status.im, latest on the 15th.Your invoicing period is the current calendar month (e.g. invoice by 15th October for your services in",
    logo: footerLogo,
    duration: "4 min read",
  },
  {
    id: 4,
    image: trialImg,
    alt: "trial period article",
    category: "get started",
    title: "the trial period",
    desc:
      "We consider your first +/- 12 weeks of contributing full-time as a trial period. The trial period length varies if you're on a day/hour contributor agreement, so please do ask anyone in",
    logo: footerLogo,
    duration: "4 min read",
  },
  {
    id: 5,
    image: whoImg,
    alt: "who is who article",
    category: "get started",
    title: "who is who",
    desc:
      "It’s hard to get to know everyone straight away. Here are some helpful ways to connect with your fellow Status folk:  Ask your lead about the important people relevant to your work",
    logo: footerLogo,
    duration: "1 min read",
  },
];
