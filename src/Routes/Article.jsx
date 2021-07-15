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
      </header>
      <main className="Article">

      </main>
    </>
  );
}
