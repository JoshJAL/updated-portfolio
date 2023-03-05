import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w='100%' align='center'>
    <LinkBox cursor='pointer'>
      <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur' loading='lazy' />
      <LinkOverlay href={href} target='_blank'>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w='100%' align='center'>
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor='pointer'>
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text style={{ marginBottom: '10px' }} fontSize={14} minHeight={75}>
          {children}
        </Text>
        <Box borderColor='blackAlpha.300' borderWidth={2} borderStyle='solid' borderRadius='13px'>
          <Image src={thumbnail} alt={title} className='grid-item-thumbnail' placeholder='blur' />
        </Box>
      </LinkBox>
    </NextLink>
    <hr style={{ marginTop: '50px' }} />
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
            border-radius: 12px;
        }
    `}
  />
);
