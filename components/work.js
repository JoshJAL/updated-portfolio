import NextLink from 'next/link';
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export const Title = ({ children }) => (
  <Box>
    <NextLink href='/projects'>
      <Link>Projects</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display='inline-block' as='h3' fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

export const WorkImage = ({ src, alt }) => (
  <Image
    borderColor='blackAlpha.300'
    borderWidth={2}
    borderStyle='solid'
    borderRadius='lg'
    w='full'
    src={src}
    alt={alt}
    mb={4}
  />
);

export const Meta = ({ children }) => (
  <Badge colorScheme='green' mr={2}>
    {children}
  </Badge>
);
