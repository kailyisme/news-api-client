import AllNewsTitles from "../components/AllNewsTitles";

export default function MostRecentNews() {
  return (
    <>
      <header>
        <h1>Most Recent News</h1>
      </header>
        <AllNewsTitles limit="6" />
    </>
  );
}
