import AllNewsTitles from "../components/AllNewsTitles";

export default function MostRecentNews() {
  return (
    <div className="MostRecentNews">
      <header>
        <h1>Most Recent News</h1>
      </header>
      <AllNewsTitles limit="6" />
    </div>
  );
}
