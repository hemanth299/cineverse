import { useState } from "react";
import { SearchShows } from "../api/tvmaze";
function Home() {
  const [Searchstr,setSearchstr] = useState("");
  const [ApiData, setApidata] = useState(null);
  const [Error, setError] = useState(null);

  const oninputValueChange = (ev) => {
    setSearchstr(ev.target.value);
  }

  const onSearch= async (ev) => {
    ev.preventDefault();
    try{
      setError(null);
      const results = await SearchShows(Searchstr);
      setApidata(results);
    } catch (err) {
      setError(err);
      console.error("Error fetching data:", err);
    }
  }

  const renderApiData = () => {
    if (Error) {
      return <div>Error: {Error.message}</div>;
    }

    if(ApiData){
      return ApiData.map((item)=>{
        return (
          <div key={item.show.id}>
            {item.show.name}
          </div>
        );
      })
    }
    return null;
  }
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div>{Searchstr}</div>
      <form onSubmit={onSearch}>
        <input type="text" value={Searchstr} onChange={oninputValueChange}/>
        <button type="submit">Search</button>
      </form>

      <div >{renderApiData()}</div>
      
    </div>
  );
}
export default Home;