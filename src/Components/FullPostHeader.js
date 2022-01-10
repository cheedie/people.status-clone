import React, { useState, useRef, Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import { contents } from "./content";

const FullPostHeader = () => {
  const scrollRef = useRef(0);
  const [scroll, setScroll] = useState(0);
  const onScroll = () => {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
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
                  <p>{fullPost}</p>
                </div>
              </section>
            </Fragment>
          );
        })}
    </main>
  );
};

export default FullPostHeader;
