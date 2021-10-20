import { Button, Box } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {


  const fetchImages = async ({pageParam = 0}) => await api.get(`/api/images?after=${pageParam}`);

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    fetchImages,
    {
      getNextPageParam: (lastPage, pages) => lastPage.data.after
    }
  );

  const formattedData = useMemo(() =>{
    return data?.pages.map( response => response.data).flatMap(page => page.data);
  }, [data]);

  return(
    // TODO RENDER LOADING SCREEN
    isLoading ? (
      <Loading />
    ): isError ? (
      <Error />
    ) : (
      <>
        <Header />
        <Box maxW={1120} px={20} mx="auto" my={20}>
          <CardList cards={formattedData} />
          {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
          {/* {hasNextPage && /*Botão aqui*/}
        </Box>
      </>
    )
  )
  // TODO RENDER ERROR SCREEN

  
}
