import {Link} from 'react-router-dom';
function Home() {
  return (
    <div className="home">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our application.</p>
      <Link to="/starred">Go to Starred page</Link>
    </div>
  );
}
export default Home;