import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";

//https://pokeapi.co/api/v2/pokemon?limit=151

function Sidebar() {

  const navigate = useNavigate();

  const [allPokemon, setAllPokemon] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setAllPokemon(response.results)
      })
      .catch((error) => {
        console.log(error);
        navigate("/error");
      });
  }, []);

  
  return (
    <nav className="sidebar">
      {/* example of 3 links */}
      {allPokemon.map((eachPokemon) => {
        return (
          <Link key={eachPokemon.name}to={`/pokemon/${eachPokemon.name}`}>{eachPokemon.name}</Link>
        )
      } )}

    </nav>
  );
}

export default Sidebar;
