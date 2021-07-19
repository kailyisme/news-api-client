import { useState, useEffect } from "react";
import { parseDate } from "../tools";

export default function Comments({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://nc-news-proj.herokuapp.com/api/articles/" +
        article_id +
        "/comments"
    )
      .then((data) => data.json())
      .then((data) => {
        setComments(
          data.comments.sort(
            (a, b) => new Date(a.created_at) - new Date(b.created_at)
          )
        );
        setIsLoading(false);
      });
  }, [article_id]);
  if (isLoading) {
    return "Loading!";
  }
  return comments.map((comment) => (
    <>
      <br />
      <br />
      <div className="article-date">
        {parseDate(comment.created_at)} by: <cite>{comment.author}</cite>
      </div>
      {comment.body}
    </>
  ));
}
