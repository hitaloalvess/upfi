import { Box, Button, Stack, useToast } from '@chakra-ui/react';
import {  useForm} from 'react-hook-form';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../../services/api';
import { FileInput } from '../Input/FileInput';
import { TextInput } from '../Input/TextInput';

interface FormAddImageProps {
  closeModal: () => void;
}

export function FormAddImage({ closeModal }: FormAddImageProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState('');
  const [localImageUrl, setLocalImageUrl] = useState('');
  const toast = useToast();

  const formValidations = {
    image: {
      required: 'Arquivo obrigatório',
      validate:{
        lessThan10MB: value => value[0].size < 10000000 || 'O arquivo deve ser menor que 10MB',
        acceptedFormats: value => value[0].type.match(/\image\/(jpeg|png|gif)$/i) || 'Somente são aceitos arquivos PNG, JPEG e GIF'  
      } 
    },
    title: {
      required: 'Título obrigatório',
      minLength:{
        value:2,
        message: 'Mínimo de 2 caracteres'
      },
      maxLength:{
        value: 20,
        message: 'Máximo de 20 caracteres'
      }
    },
    description: {
      required: 'Descrição obrigatória',
      maxLength:{
        value: 65,
        message: 'Máximo de 65 caracteres'
      }
    },
  };

  const queryClient = useQueryClient();
  const mutation = useMutation(async(data : Record<string, unknown>) => {
    return await api.post('/api/images', data)
  },
    {
      onSuccess: () => { queryClient.invalidateQueries('images')}
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState,
    setError,
    trigger,
  } = useForm();
  const { errors }  = formState;

  const onSubmit  = async (data: Record<string, unknown>): Promise<void> => {
    console.log('Dentro de onSubmit')
    try {
      // TODO SHOW ERROR TOAST IF IMAGE URL DOES NOT EXISTS
      if(!imageUrl){
        toast({
          title:'Imagem não adicionada',
          description: 'É preciso adicionar e aguardar o upload de uma imagem antes de realizar o cadastro.',
          status: 'error',
          duration: 5000,
          isClosable: true
        });

        return;
      }
      // TODO EXECUTE ASYNC MUTATION
      mutation.mutateAsync(data)
      // TODO SHOW SUCCESS TOAST
      toast({
        title:'Imagem cadastrada',
        description: 'Sua imagem foi cadastrada com sucesso',
        status:'success',
        duration: 5000,
        isClosable: true
      })

    } catch {
      // TODO SHOW ERROR TOAST IF SUBMIT FAILED
      toast({
        title: 'Falha no cadastro',
        description: 'Ocorreu um erro ao tentar cadastrar a sua imagem',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    } finally {
      // TODO CLEAN FORM, STATES AND CLOSE MODAL
      reset();
      closeModal();
    }
  };

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FileInput
          setImageUrl={setImageUrl}
          localImageUrl={localImageUrl}
          setLocalImageUrl={setLocalImageUrl}
          setError={setError}
          trigger={trigger}
          error={errors.image}
          name="image"
          {...register('image', formValidations.image)}
        />

        <TextInput
          placeholder="Título da imagem..."
          name="title"
          error={errors.title}
          {...register('title', formValidations.title)}
        />

        <TextInput
          placeholder="Descrição da imagem..."
          error={errors.description}
          name="description"
          {...register('description', formValidations.description)}
        />
      </Stack>

      <Button
        my={6}
        isLoading={formState.isSubmitting}
        isDisabled={formState.isSubmitting}
        type="submit"
        w="100%"
        py={6}
      >
        Enviar
      </Button>
    </Box>
  );
}
