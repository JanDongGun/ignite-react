import axios from "axios";
import {
  popularGamesURL,
  upComingGameURL,
  newGameURL,
  searchGameURL,
} from "../api";

// Action Creator

export const loadGames = () => async (dispatch) => {
  // Fetch AXIOS

  const popularData = await axios.get(popularGamesURL());
  const upComingData = await axios.get(upComingGameURL());
  const newGameData = await axios.get(newGameURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      newGames: newGameData.data.results,
      upComing: upComingData.data.results,
    },
  });
};

export const fetchSearch = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
