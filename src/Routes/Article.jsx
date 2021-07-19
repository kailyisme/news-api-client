import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://nc-news-proj.herokuapp.com/api/articles/" + article_id)
      .then((data) => data.json())
      .then((parsedData) => {
        setArticle(parsedData.article);
        setIsLoading(false);
      });
  }, [article_id]);
  function parseDate(dateString) {
    const regex = /^(\d{4})-(\d{2})-(\d{2})/;
    const matches = dateString.match(regex);
    const [_, year, month, day] = matches;
    return `${day}/${month}/${year}`;
  }
  if (isLoading)
    return (
      <header>
        <h1>Loading!</h1>
      </header>
    );
  return (
    <>
      <header>
        <h1>{article.title}</h1>
        <h4>
          by <cite>{article.author}</cite>
        </h4>
      </header>
      <main className="Article">
        <div className="article-date">{parseDate(article.created_at)}</div>
        <br />
        <p>{article.body}</p>
        <h2>Comments <button>show</button></h2>
      </main>
    </>
  );
}
