const human = <span>👤</span>;

const alien = <span>👽</span>;

const iconSpecies = (species) => {
  if (species === "Human") {
    return human;
  } else if (species === "Alien") {
    return alien;
  }
};

export default iconSpecies;
