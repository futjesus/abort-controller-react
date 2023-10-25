import { FC } from 'react';
import { type Character as CharacterProps } from '../../interfaces/character';

export const Character: FC<CharacterProps> = ({ image, name, gender }) => {
  return (
    <div className="flex items-center gap-x-6 border px-3 py-2">
      <img className="h-16 w-16 rounded-full" src={image} alt="" />

      <div>
        <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
          {name}
        </h3>
        <p className="text-sm font-semibold leading-6 text-indigo-600">
          {gender}
        </p>
      </div>
    </div>
  );
};
