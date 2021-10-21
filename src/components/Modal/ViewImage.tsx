import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return(
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg="pGray.800"
          maxW='900px' 
          w="auto"
      >
      <ModalBody p={0} >
        <Image
            src={imgUrl}
            alt="modal image"
            maxW='900px'
            maxH='600px'
            w="auto"
            h="auto"
          />
        </ModalBody>
        <ModalFooter>
          <Link href={imgUrl} isExternal >Abrir original</Link>         
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
