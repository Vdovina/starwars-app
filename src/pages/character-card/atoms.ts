import { selectorFamily } from 'recoil';
import { API_ROUTES } from '../../constants/routes';
import { Character } from '../../types/character';

export const characterCardState = selectorFamily({
  key: 'characterCard',
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
