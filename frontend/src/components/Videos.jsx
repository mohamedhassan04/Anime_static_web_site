import { Button, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { GrDislike, GrLike } from 'react-icons/gr';
import '../styles/home.css';

const Videos = ({ movies }) => {
  const videosArr = [
    'https://www.youtube.com/embed/dOXmb10TeAA?autoplay=1',
    'https://www.youtube.com/embed/RIxtNSdSlPk?autoplay=1',
    'https://www.youtube.com/embed/NGoHKfHG-6c?autoplay=1',
    'https://www.youtube.com/embed/8f9_D8ZCIdM?autoplay=1',
    'https://www.youtube.com/embed/ncb5HFEQ2BA?autoplay=1',
    'https://www.youtube.com/embed/iqSMIMuutSw?autoplay=1',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);
  const { id } = useParams();
  const anime = movies.find(item => item.id === Number(id));
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'} p={'16'}>
        <iframe
          width="100%"
          height="90%"
          src={videoSrc}
          title="YouTube video player"
          frameBorder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        <VStack alignItems={'flex-start'} w={'full'}>
          <section
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Heading
              w={'10%'}
              p="5"
              bgColor={'blackAlpha.400'}
              alignItems={'flex-start'}
              borderRadius={'35px'}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '20px',
                }}
                className="icon"
              >
                <GrLike /> 4,3K
              </div>
            </Heading>
            <Heading
              w={'10%'}
              p="5"
              bgColor={'blackAlpha.400'}
              alignItems={'flex-start'}
              borderRadius={'35px'}
              ml={'5'}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '20px',
                }}
                className="icon"
              >
                <GrDislike /> 1,2K
              </div>
            </Heading>
          </section>
          <Heading>{anime.name}</Heading>
          <Text>{anime.description}</Text>
        </VStack>
      </VStack>
      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'16'}
        spacing={'8'}
        overflowY={'auto'}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={'ghost'}
            colorScheme={'orange'}
            onClick={() => setVideoSrc(item)}
          >
            Episode {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
