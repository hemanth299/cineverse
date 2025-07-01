import { useState } from "react";
import { SearchShows } from "../api/tvmaze";
function Home() {
  const [Searchstr,setSearchstr] = useState("");
  const [ApiData, setApidata] = useState(null);
  const [Error, setError] = useState(null);
  const[Option, setOption] = useState("shows");

  const oninputValueChange = (ev) => {
    setSearchstr(ev.target.value);
  }

  const onoptionchange = (ev) => {
    setOption(ev.target.value);
  }

  const onSearch= async (ev) => {
    ev.preventDefault();
    try{
      setError(null);
      const results = await SearchShows(Searchstr,Option);
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
      return ApiData[0].show?
      ApiData.map((item)=>{
        return (
          <div key={item.show.id}>
            {item.show.name}
          </div>
        );
      }):
      ApiData.map((item)=>{
        return (
          <div key={item.person.id}>
            {item.person.name}
          </div>
        );
      });
    }
    return null;
  }
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <div>{Searchstr}</div>
      <form onSubmit={onSearch}>
        <input type="text" value={Searchstr} onChange={oninputValueChange}/>
        <label >
          Shows
          <input type="radio" name="select-option" value="shows" checked={Option==="shows"} onChange={onoptionchange} />
        </label>
        <label >
          Actors
          <input type="radio" name = "select-option" value="people" checked={Option==="people"} onChange={onoptionchange}/>
        </label>
        <button type="submit">Search</button>
      </form>

      <div >{renderApiData()}</div>
      
    </div>
  );
}
export default Home;