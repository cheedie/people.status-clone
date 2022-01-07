import React from "react";
import { Link } from "react-router-dom";
import { contents } from "../Components/content";

const Article = () => {
  return (
    <section className="article-container">
      <div className="card-container section-center">
        {contents.map((item) => {
          const {
            id,
            image,
            alt,
            category,
            title,
            desc,
            logo,
            duration,
          } = item;
          return (
            <>
              <Link to={`/${title.toLowerCase().replaceAll(" ", "-")}`}>
                <article className="card" key={id}>
                  <img src={image} alt={alt} className="img article-img" />
                  <div className="card-contents">
                    <div className="card-content">
                      <p className="article-category">{category}</p>
                      <h2 className="article-title">{title}</h2>
                      <p className="article-desc">{desc}</p>
                    </div>
                    <footer className="article-footer">
                      <img
                        src={logo}
                        className="footer-logo"
                        alt="article logo"
                      />
                      <p className="article-time">{duration}</p>
                    </footer>
                  </div>
                </article>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Article;
