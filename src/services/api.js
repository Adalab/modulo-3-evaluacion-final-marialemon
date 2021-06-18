function getApiData() {
  //añadimos return porque la función getApiData tiene que retornar algo
  //sino saldría undefined
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((res) => res.json())
    .then((data) => {
      //filtramos los datos que nos interesan con un map
      //los retornamos en un objeto y los añadimos al array filteredData
      const filteredData = data.results.map((eachCharacter) => {
        return {
          id: eachCharacter.id,
          name: eachCharacter.name,
          img: eachCharacter.image,
          species: eachCharacter.species,
          status: eachCharacter.status,
          origin: eachCharacter.origin,
          episode: eachCharacter.episode,
          type: eachCharacter.type,
        };
      });
      return filteredData;
    });
}

export default getApiData;
