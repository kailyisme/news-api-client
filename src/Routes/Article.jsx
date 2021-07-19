import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/Comments";
import { parseDate } from "../tools";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [commentsCollapsed, setCommentsCollapsed] = useState(true);

  useEffect(() => {
    fetch("https://nc-news-proj.herokuapp.com/api/articles/" + article_id)
      .then((data) => data.json())
      .then((parsedData) => {
        setArticle(parsedData.article);
        setIsLoading(false);
      });
  }, [article_id]);

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
      <main className="alternative Article">
        <div className="article-date">{parseDate(article.created_at)}</div>
        <br />
        <p>{article.body}</p>
        <button
          onClick={() => {
            setCommentsCollapsed((collapsed) => !collapsed);
          }}
        >
          <h1>Comments</h1> {commentsCollapsed ? "show" : "hide"}
        </button>
        {commentsCollapsed ? null : <Comments article_id={article_id} />}
      </main>
    </>
  );
}
