import { useEffect, useState } from "react";

export default function AllNewsTitles({ limit, topic, order = "desc" }) {
  const [allNews, setAllNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const options = { topic, order };
  let query = "";
  if (!limit) {
    limit = allNews.length;
  }
  Object.keys(options).forEach((option) => {
    if (options[option]) {
      if (query === "") {
        query = `?${option}=${options[option]}`;
      } else {
        query += `&${option}=${options[option]}`;
      }
    }
  });
  useEffect(() => {
    fetch("https://nc-news-proj.herokuapp.com/api/articles" + query)
      .then((data) => data.json())
      .then((parsedData) => {
        setAllNews(parsedData.articles);
        setIsLoading(false);
      });
  }, [query]);
  if (isLoading)
    return (
      <main>
        <h1>Loading!</h1>
      </main>
    );
  return (
    <main className="GridNewsTitles">
      {allNews.slice(0, limit).map((entry) => (
        <a href={`/articles/${entry.article_id}`} className="articleTitle" key={`article${entry.title}`}>
          {entry.title}
        </a>
      ))}
    </main>
  );
}
