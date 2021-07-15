import { useEffect, useState } from "react";

export default function AllNewsTitles({ limit, topic, order = "desc" }) {
  const [allNews, setAllNews] = useState([]);
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
    console.log(query + "<<<query");
    fetch("https://nc-news-proj.herokuapp.com/api/articles" + query)
      .then((data) => data.json())
      .then((parsedData) => {
        console.log("articles>>>" + parsedData.articles)
        setAllNews(parsedData.articles);
      });
  }, [query]);
  return (
    <div className="GridNewsTitles">
      {allNews.slice(0, limit).map((entry) => (
        <p className="articleTitle" key={`article${entry.title}`}>
          {entry.title}
        </p>
      ))}
    </div>
  );
}
