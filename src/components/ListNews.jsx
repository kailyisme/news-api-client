import { useEffect, useState } from "react";

export default function ListNews() {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("https://nc-news-proj.herokuapp.com/api/articles")
      .then((data) => data.json())
      .then((parsedData) => setAllNews(parsedData.articles));
  });
  return (
    <div className="ListNews">
      {allNews.map((entry) => (
        <p>{entry.title}</p>
      ))}
    </div>
  );
}