import { client } from '../api/config';
import { Character } from '../interfaces/character';

export interface Response {
  info: Info;
  results: Character[];
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

const getCharacters = async (
  page: number = 1,
  signal?: AbortSignal
): Promise<Character[]> => {
  const { data } = await client.get<Response>('/character', {
    signal,
    params: {
      page,
    },
  });

  return data.results;
};
export { getCharacters };
