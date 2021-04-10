import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gameAction";
import Game from "../components/Game";

import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import GameDetail from "../components/GameDetail";
import Nav from "../components/Nav";

const Home = () => {
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <Nav />
      {pathID && <GameDetail />}
      {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <Games>
            {searched.map((game) => {
              return <Game game={game} key={game.id} />;
            })}
          </Games>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map((game) => {
          return <Game game={game} key={game.id} />;
        })}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => {
          return <Game game={game} key={game.id} />;
        })}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
