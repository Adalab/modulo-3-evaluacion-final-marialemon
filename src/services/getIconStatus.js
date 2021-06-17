const dead = <span>💀</span>;

const alive = <span>💚</span>;

const unknown = <span>❔</span>;

const iconStatus = (status) => {
  if (status === "Alive") {
    return alive;
  } else if (status === "Dead") {
    return dead;
  } else {
    return unknown;
  }
};

export default iconStatus;
