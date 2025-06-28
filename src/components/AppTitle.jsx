export default function AppTitle(props) {
  const { 
    title = "CineVerse",
    subtitle= "enter the marvelous universe of cinema " } = props;

  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}