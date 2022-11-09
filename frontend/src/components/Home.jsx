import { Box, Button, Container, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/img001.jpg';
import img2 from '../assets/img002.jpg';
import img3 from '../assets/img003.jpg';
import img4 from '../assets/img004.jpg';
import img5 from '../assets/img005.jpg';
import CarouselGallery from './CarouselGallery';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '80%',
  transform: 'translate(-50%,-50%)',
  textTranform: 'uppercase',
  p: '4',
  borderRadius: '10',
};
const Home = ({ movies }) => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'100%'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Last Anime
        </Heading>
        <CarouselGallery movies={movies} />
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Mongas Anime
        </Heading>
        <CarouselGallery movies={movies} />
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Sport Anime
        </Heading>
        <CarouselGallery movies={movies} />
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Naruto Shippuden
        <Text fontSize={'17px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus sunt officia ab voluptas quasi non itaque nobis doloribus,
          atque, commodi tenetur rem nostrum vero, similique tempore optio illum
          laboriosam.
        </Text>
        <Button colorScheme={'orange'} w="25%">
          Play
        </Button>
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Dragon Ball Z
        <Text fontSize={'17px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus sunt officia ab voluptas quasi non itaque nobis doloribus,
          atque, commodi tenetur rem nostrum vero, similique tempore optio illum
          laboriosam.
        </Text>
        <Button colorScheme={'orange'} w="25%">
          Play
        </Button>
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Death Note
        <Text fontSize={'17px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus sunt officia ab voluptas quasi non itaque nobis doloribus,
          atque, commodi tenetur rem nostrum vero, similique tempore optio illum
          laboriosam.
        </Text>
        <Button colorScheme={'orange'} w="25%">
          Play
        </Button>
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Kundam
        <Text fontSize={'17px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus sunt officia ab voluptas quasi non itaque nobis doloribus,
          atque, commodi tenetur rem nostrum vero, similique tempore optio illum
          laboriosam.
        </Text>
        <Button colorScheme={'orange'} w="25%">
          Play
        </Button>
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img5} h="full" w={'full'} objectFit={'cover'} />
      <Heading bgColor={'blackAlpha.400'} color={'white'} {...headingOptions}>
        Hunter X Hunter
        <Text fontSize={'17px'}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          ducimus sunt officia ab voluptas quasi non itaque nobis doloribus,
          atque, commodi tenetur rem nostrum vero, similique tempore optio illum
          laboriosam.
        </Text>
        <Button colorScheme={'orange'} w="25%">
          Play
        </Button>
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
