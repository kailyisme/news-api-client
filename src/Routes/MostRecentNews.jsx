import { useState, useEffect } from "react";
import AllNewsTitles from "../components/AllNewsTitles";
import TopicsSelector from "../components/TopicsSelector";

export default function MostRecentNews() {
  const [activeTopic, setActiveTopic] = useState();
  const [newsAmount, setNewsAmount] = useState(6);
  const [allTopics, setAllTopics] = useState([]);
  useEffect(() => {
    fetch("https://nc-news-proj.herokuapp.com/api/topics")
      .then((data) => data.json())
      .then((parsedData) => {
        setAllTopics(parsedData.topics);
      });
  }, []);
  return (
    <>
      <header>
        <h1>Most Recent News</h1>
      </header>
      <TopicsSelector
        setActiveTopic={setActiveTopic}
        topics={allTopics.map((topic) => topic.slug)}
      />
      <AllNewsTitles limit={newsAmount} topic={activeTopic} />
    </>
  );
}
