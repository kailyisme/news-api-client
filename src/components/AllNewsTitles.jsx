import { useEffect, useState } from "react";

export default function AllNewsTitles({ limit }) {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("https://nc-news-proj.herokuapp.com/api/articles?order=desc")
      .then((data) => data.json())
      .then((parsedData) => {
        setAllNews(parsedData.articles);
        if (!limit) {
          limit = parsedData.articles.length;
        }
      });
  }, []);
  return (
    <div className="GridNewsTitles">
      {allNews.slice(0, limit).map((entry) => (
        <p className="articleTitle">{entry.title}</p>
      ))}
    </div>
  );
}