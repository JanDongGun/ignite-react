import axios from "axios";
import { GameDetailsURL, GameScreenShotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailData = await axios.get(GameDetailsURL(id));
  const screenData = await axios.get(GameScreenShotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenData.data,
    },
  });
};
