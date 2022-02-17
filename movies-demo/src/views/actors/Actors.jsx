import React, { useContext, useEffect } from 'react';
import { MoviesDataBaseContext } from '../../context';

import anime from 'animejs';
import { actorsAnimation } from '../../animation';

export const Actors = () => {
  const moviesDataBaseContext = useContext(MoviesDataBaseContext);
  const actors = moviesDataBaseContext.actorsDataBase;

  useEffect(() => {
    anime(actorsAnimation);
  }, []);

  return (
    <div>
      <div>
        <h1>Actors</h1>
      </div>
      <table className="table tableAnimation" >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Known for</th>
          </tr>
        </thead>
        <tbody>
          {
            actors.map((actor, key) => {
              return (
                <tr key={key}>
                  <td>{actor.name}</td>
                  <td>{actor.popularity}</td>
                  {actor.known_for.map((known) => {
                    return(
                      <td>{known.original_title}</td>
                    )
                  })}
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
};