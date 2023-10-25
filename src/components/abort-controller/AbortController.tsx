import { useEffect, useState } from 'react';
import uniqBy from 'lodash/uniqBy';

import { getCharacters } from '../../repository';
import { Character } from '../../interfaces/character';
import { Character as CharacterComponent } from '../character';

export const AbortControllerComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const controller = new AbortController();

    try {
      getCharacters(currentPage, controller.signal).then((newCharacters) =>
        setCharacters(uniqBy([...characters, ...newCharacters], ({ id }) => id))
      );
    } catch {
      console.log('Unable retrieve characters');
    }

    return () => {
      controller.abort();
    };
  }, [currentPage]);

  const handleClick = () => setCurrentPage(currentPage + 1);

  return (
    <>
      <div className="flex flex-1 justify-center">
        <button
          className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          Retrieve more characters of Rick and Morty
        </button>
      </div>

      <div className="flex px-10">
        <div className="flex flex-wrap gap-1">
          {characters.map((character) => (
            <CharacterComponent key={character.id} {...character} />
          ))}
        </div>
      </div>
    </>
  );
};
