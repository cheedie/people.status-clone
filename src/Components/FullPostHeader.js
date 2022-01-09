import React, { useState, useRef, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { contents } from "../Components/content";

const FullPostHeader = () => {
  const scrollRef = useRef(0);
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.clientHeight;
    const scrollPercent = scrolled / maxHeight / 100;
    setScroll(scrollPercent);
  };
  window.addEventListener("scroll", onScroll);
  let { id } = useParams();
  return (
    <main>
      <div className="nav-container">
        <header className="section-center">
          <NavBar showLogo={true} />
        </header>
        <div
          ref={scrollRef}
          style={{ width: `${scroll}%` }}
          className="scroll-container"
        ></div>
      </div>

      {contents
        .filter((item) => item.title.toLowerCase() === id.replaceAll("-", " "))
        .map((data) => {
          const { id, image, alt, title, fullPost } = data;
          return (
            <Fragment key={id}>
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
                  <h1 className="full-post-title">{title}</h1>
                </div>
              </section>

              <section className="full-post-content">
                <img src={image} alt={alt} className="full-post-image img" />
                <div className="post-content section-center">
                  {/* <h3></h3> */}
                  <p>{fullPost}</p>
                </div>
              </section>
            </Fragment>
          );
        })}
      {/* <section className="full-post-content">
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
      </section> */}
    </main>
  );
};

export default FullPostHeader;
