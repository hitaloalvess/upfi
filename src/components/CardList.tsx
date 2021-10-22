import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE
  const [ imageSelected, setImageSelected ] = useState<string>('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url : string){
      setImageSelected(url);
      onOpen();
  }
  return (
    <>
      <SimpleGrid columns={3} spacing={10} >
        {cards.map( card => (
          <Card key={card.ts}
            data={card}
            viewImage={handleViewImage}
          />
        ))}
      </SimpleGrid>

      {isOpen && <ModalViewImage isOpen={isOpen} onClose={onClose} imgUrl={imageSelected}/>}
    </>
  );
}
