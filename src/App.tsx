import React, { FunctionComponent, useState, useEffect } from "react";
import Pokemon from "./models/pokemon";
import { POKEMONS } from "./models/mocks-pokemon";

const App: FunctionComponent = () => {
  const [pokemons, getPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    getPokemon(POKEMONS);
  }, []);

  return (
    <div className="container">
      <h3 className="center">Pokedex</h3>
      <div className="row">
        {pokemons.map(({id, name, picture, created}) => (
          <div className="col s6 m4" key={id}>
            <div className="card horizontal">
              <div className="card-image">
                <img src={picture} alt={name} />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <p>{name}</p>
                  <p><small>{created.toString()}</small></p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;