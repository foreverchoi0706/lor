import _instance from "./_instance";

const lol = {
  getChampionRotations: () => {
    return _instance.get("/navigation/champion-rotations");
  },
};

export default lol;
