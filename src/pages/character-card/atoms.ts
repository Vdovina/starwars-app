import { atomFamily, selectorFamily } from 'recoil';
import { Character } from '../../types/character';
import { getCharacter } from '../../service/character-service';

export const characterCardState = atomFamily<Character | undefined, string | undefined>({
  key: 'character_card',
  default: selectorFamily({
    key: '#character_card',
    get: (characterId: string | undefined) => async () => {
      try {
        if (!characterId) {
          return undefined;
        }
        const response = await getCharacter(characterId);
        return response;
      } catch (error) {
        throw error;
      }
    },
  }),
});
