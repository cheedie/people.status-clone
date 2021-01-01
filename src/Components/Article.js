import React from "react";
import { contents } from "../Components/content";

const Article = () => {
  return (
    <section className="article-container">
      <div className="card-container">
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
            <article className="card" key={id}>
              <img src={image} alt={alt} />
              <div className="card-contents">
                <p>{category}</p>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
              <footer>
                <img src={logo} alt="" />
                <p>{duration}</p>
              </footer>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Article;
