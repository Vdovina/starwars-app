import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { pages, size, searchValue, charactersState, CharacterListState } from './atoms';
import { columns } from './columns';
import { API_ROUTES, ROUTES } from '../../constants/routes';
import { Grid, Input, Loader, TableWrapper } from '../../components';
import { getMergedCharacterList } from '../../service/characterService';
import { LoadingStatus } from '../../constants/statuses';
import { useVirtualScrolling } from '../../use/useVirtualScrolling';
import './styles.scss';

export const Characters = () => {
  const navigate = useNavigate();
  const [currentPages, setCurrentPages] = useRecoilState(pages);
  const [currentSize, setCurrentSize] = useRecoilState(size);
  const [currentSearchValue, setCurrentSearchValue] = useRecoilState(searchValue);

  const { data, loading, onScroll } = useVirtualScrolling(charactersState, getMergedCharacterList);

  console.log(data, loading);

  return (
    <>
      <header>CHARACTERS</header>

      <TableWrapper>
        <Input label="Search characters" value={currentSearchValue} onChange={setCurrentSearchValue} />
        <Grid
          rows={data?.data ?? []}
          columns={columns}
          total={data?.total}
          onLoad={onScroll}
          size={currentSize}
          setSize={setCurrentSize}
          searchValue={currentSearchValue}
          searchField="name"
          searchApi={API_ROUTES.GET_CHARACTERS}
          setSearchValue={setCurrentSearchValue}
          onRowClick={(id) => navigate(ROUTES.CHARACTER_CARD.replace(':id', id))}
        />
      </TableWrapper>
    </>
  );
};
