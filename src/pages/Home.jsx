import { useState } from "react";
function Home() {
  const [Searchstr,setSearchstr] = useState("");

  const oninputValueChange = (ev) => {
    setSearchstr(ev.target.value);
  }

  const onSearch= async (ev) => {
    ev.preventDefault();

    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${Searchstr}`);
    const body = await response.json();
    console.log(body);
  }
  
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div>{Searchstr}</div>
      <form onSubmit={onSearch}>
        <input type="text" value={Searchstr} onChange={oninputValueChange}/>
        <button type="submit">Search</button>
      </form>
      
    </div>
  );
}
export default Home;