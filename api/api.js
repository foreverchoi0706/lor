import axios from "axios";

const BASE_URL = "http://localhost:3001"

console.log(BASE_URL);

const instance = axios.create({
  baseURL: BASE_URL,
});

const api = {
  getVersion: async () => {
    const { data } = await instance.get("/navigation/version");
    return data;
  },

  getChampionRotations: async () => {
    const { data } = await instance.get("/navigation/champion-rotations");
    return data;
  },

  getChallengerRank: async () => {
    const { data } = await instance.get("/navigation/challenger-rank");
    return data;
  },

  getPlatformData: async () => {
    const { data } = await instance.get("/navigation/platform-data");
    return data;
  },

  summonerInfo: async (summonerName) => {
    const { data } = await instance.get("/search/summoner-info", {
      params: {
        summonerName,
      },
    });
    return data;
  },
  matchList: async (puuid) => {
    const { data } = await instance.get("/search/match-list", {
      params: {
        puuid,
      },
    });
    return data;
  },
  match: async (gameId) => {
    const { data } = await instance.get("${URL}/search//match", {
      params: {
        gameId,
      },
    });
    return data;
  },

  nextMatchList: async (puuid, beginIndex, endIndex) => {
    const { data } = await instance.get("/search/next-match-list", {
      params: {
        puuid,
        beginIndex,
        endIndex,
      },
    });
    return data;
  },

  getChampions: async () => {
    const { data } = await instance.get(
      "https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json"
    );
    return data;
  },

  getDdragon: async () => {
    return {
      champions: await axios
        .get(
          "https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json"
        )
        .then((result) => result.data),
      spells: await axios
        .get(
          "https://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/summoner.json"
        )
        .then((result) => result.data),
    };
  },
};

export default api;
