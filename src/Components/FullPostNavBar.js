import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/SVG/status-logo.svg";
import Expenses3 from "../assets/Exp-3.png";
import fillingExpenses from "../assets/finances-img.jpeg";
import Expenses1 from "../assets/Exp-1.png";
import Expenses2 from "../assets/Exp-2.png";

const FullPostNavBar = () => {
  return (
    <main>
      <div className="nav-container">
        <header className="header-center">
          <div className="full-post-header-contents">
            <div className="navlinks-container">
              <img src={logo} alt="logo" />
              <ul className="nav-links">
                <li>
                  <a href="/#">direct</a>
                </li>
                <li>
                  <a href="/#">get started!</a>
                </li>
                <li>
                  <a href="/#">perks</a>
                </li>
                <li>
                  <a href="/#">working here</a>
                </li>
                <li>
                  <a href="/#">health</a>
                </li>
                <li>
                  <a href="/#">travel</a>
                </li>
                <li>
                  <a href="/#">hiring</a>
                </li>
                <li>
                  <a href="/#">team lead manual</a>
                </li>
                <li>
                  <a href="/#">finance</a>
                </li>
              </ul>
            </div>
            <div className="social-links">
              <a href="/#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"></path>
                </svg>
              </a>
              <a href="/#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"></path>
                </svg>
              </a>
              <a href="/#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="6.18" cy="17.82" r="2.18"></circle>
                  <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z"></path>
                </svg>
              </a>
            </div>
          </div>
        </header>
      </div>
      <section className="full-post-header">
        <div className="full-post-details">
          <time dateTime="2021-08-20" className="full-post-time">
            20 August 2021
          </time>
          <span> /</span>
          <Link to="/" className="full-post-category">
            {" "}
            Finance
          </Link>
        </div>
        <h1 className="full-post-title">Filing Expenses</h1>
      </section>
      <section className="full-post-content">
        <img
          src={fillingExpenses}
          alt="filling expenses"
          className="full-post-image img"
        />
        <div className="post-content section-center">
          <h3>How to get reimbursed for expenses?</h3>
          <p>
            In order to be reimbursed for expenses incurred on behalf of Status
            during the development of the project, you will need to invoice
            Status and submit a report obtained through{" "}
            <a href="https://www.google.com/url?q=https%3A%2F%2Fwww.expensify.com%2F&amp;sa=D&amp;sntz=1&amp;usg=AFQjCNGpm5mx9v1hLOvSKTm5s7_iEpA4OA">
              Expensify
            </a>{" "}
            with the details of these expenses.
          </p>
          <h4>Getting set up with Expensify</h4>
          <p>
            We use Expensify to report and store the expense receipts incurred
            on behalf of Status during the development of the project.
          </p>
          <p>
            You only need to create an account with your status.im email address
            and Expensify will ask you to join the Status organization. Please
            input your full name as it appears in your BambooHR profile when
            setting up your Expensify account.
          </p>
          <p>
            You can also download the Expensify mobile app for when you're on
            the go.
          </p>
          <h4>Submitting an expense report through Expensify</h4>
          <p>
            For the Finance team to be able to approve the expense
            reimbursements, all expense reports should be submitted by the 10th
            of the month before submitting the monthly invoice on the 15th.
          </p>
          <p>
            Please follow these links if you need help with{" "}
            <a href="https://community.expensify.com/discussion/4560/how-to-create-expenses-manually">
              creating expenses
            </a>{" "}
            and{" "}
            <a href="https://community.expensify.com/discussion/4561/how-to-submit-a-report/p1?new=1">
              submitting reports
            </a>{" "}
            on Expensify
          </p>
          <p>
            If you would need further help with the creation and submission of
            expense reports, please contact the Finance team and they will be
            able to guide you through the process.
          </p>
          <h4>Adding the expenses to your monthly invoice</h4>
          <p>
            The finished and approved report from Expensify will show the total
            for each expense category. For example, if you have several costs in
            one category, Expensify will show the following:
          </p>
          <p>
            <img src={Expenses3} alt="Exp-3" loading="lazy" className="img" />
          </p>
          <p>
            <strong>
              Your invoice should only contain the total per category, not each
              expense item.
            </strong>
          </p>
          <p>
            As a guidance, we have added these categories in the invoice
            template here. To avoid any delays with the expense claim approval,
            please ensure your invoice has the same category names as the
            Expensify reports.
          </p>
          <p>
            If you would like to set up these categories in your accounting
            software, please ask the Finance team for the complete list of
            expense categories.
          </p>
          <p>
            If you need to share the report with your accountant, you can
            download a PDF report with your expenses by clicking on the top
            right corner and then on the “Download” icon:
          </p>
          <p>
            <img src={Expenses1} alt="Exp-1" loading="lazy" className="img" />
          </p>
          <p>
            <img src={Expenses2} alt="Exp-2" loading="lazy" className="img" />
          </p>
          <h3>General Guidance</h3>
          <p>
            You will always need to submit a receipt with each expense you log.
            Make sure to take photos or keep digital receipts handy - missing
            receipts might end up in your reports not being approved.
          </p>
          <p>
            Please select a Category for each expense, and include a comment
            indicating how the expense is business-related, including any
            additional context that will help the expense reviewer identify that
            the expense is appropriate. As an example:
          </p>
          <ul>
            <li>
              Team Event Expense
              <ul>
                <li>Category: Events</li>
                <li>
                  Description: &quot;Devcon Conference, Berlin - Taxi from LHR
                  airport to conference with 1 other team member, Joe&quot;
                </li>
              </ul>
            </li>
            <li>
              Another Team Event Expense
              <ul>
                <li>Category: Meals &amp; Drinks</li>
                <li>
                  Description: &quot;People Ops Meetup - Evening meal on May
                  26th with 3 others: John, Jane, Joseph&quot;
                </li>
              </ul>
            </li>
          </ul>
          <p>
            We suggest submitting an expense reimbursement report only when the
            total value is above USD 50.
          </p>
          <p>
            Expense reimbursements are paid together with the monthly
            compensation invoice. If you have questions or concerns regarding
            the expense reimbursement date, please contact the Finance team, and
            they will be happy to help you with that.
          </p>
          <p>
            For any other questions related to this process, please feel free to
            ping the Finance team in the #ask-finance channel or through an
            email to <a href="/#">billing@status.im</a>.
          </p>
        </div>
      </section>
    </main>
  );
};

export default FullPostNavBar;
