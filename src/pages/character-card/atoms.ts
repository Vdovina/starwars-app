import { atomFamily, selectorFamily } from 'recoil';
import { Character } from '../../types/character';
import { getCharacter } from '../../service/character-service';

export const characterCardState = atomFamily<Character | null, string | undefined>({
  key: 'character_card',
  default: selectorFamily({
    key: '#character_card',
    get: (characterId: string | undefined) => async () => {
      try {
        if (!characterId) {
          return null;
        }
        const response = await getCharacter(characterId);
        return response;
      } catch (error) {
        return null;
      }
    },
  }),
});
