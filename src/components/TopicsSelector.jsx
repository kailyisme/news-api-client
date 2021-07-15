export default function TopicsSelector({ topics, setActiveTopic }) {
  return (
    <div className="TopicsSelector">
      <button className="topicButton" onClick={() => setActiveTopic(null)}>
        All Topics
      </button>
      {topics.map((topic) => (
        <button
          key={`slug${topic}`}
          className="topicButton"
          onClick={() => setActiveTopic(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
}
