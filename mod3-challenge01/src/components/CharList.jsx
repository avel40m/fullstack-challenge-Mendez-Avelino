import React from "react";
import { getCharacters } from "../service/Restapi";
import { useEffect, useState } from "react";
import Char from "./Char";

const CharList = () => {
  const [charList, setCharList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    setIsLoading(true);
    getCharacters()
      .then((data) => setCharList(data.results))
      .catch((e) => console.error(e))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <div className="contenedor-principal">{isLoading && <span>Loading...</span>}
      <img src={image} alt="No hay imagen" />
      </div>
      <div className="conjuntos">
        {charList.map((char) => (
          <Char
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
            imageUrl={char.image}
            setImage={setImage}
          />
        ))}
      </div>
    </>
  );
};

export default CharList;
