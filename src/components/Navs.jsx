import {Link} from 'react-router-dom';

const LINKS = [{
  text:"Home",
  to:"/"
},
{
  text:"Starred",
  to:"/starred"
}
];
function Navs(){
  return (
    <div>
      <nav>
        <ul>
          {LINKS.map((item)=>(
            <li key= "item.to">
              <Link to={item.to}>{item.text}</Link></li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
export default Navs;