import _instance from "./_instance";

const lol = {
  getVersion: () => _instance.get("/lol/version"),

  getSummoner: (keyword) => _instance.get(`/lol/summoner?keyword=${keyword}`),

  getChampionRotations: () => _instance.get("/lol/championRotations"),
};

export default lol;
