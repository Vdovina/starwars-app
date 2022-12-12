import { atom, selector, selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Character } from '../../types/Character';

export const characterCardState = selectorFamily({
  key: 'filmCard',
  get: (characterId: string) => async () => {
    try {
      if (characterId === '') {
        return undefined;
      }

      const response = await (await fetch(API_ROUTES.GET_CHARACTER_INFO.replace(':id', characterId))).json();
      return response as Character;
    } catch (error) {
      throw error;
    }
  },
});
