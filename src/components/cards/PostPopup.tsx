import { IPostPopupProps } from '@/types/types';
import { Box, Heading, Text, Stack, IconButton, Image } from '@chakra-ui/react';
import { IoClose } from 'react-icons/io5';

const PostPopup: React.FC<IPostPopupProps> = ({ post, onClose }) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bg="blackAlpha.600"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClose}
      zIndex={9999}
    >
      <Box
        bg="white"
        p="2rem"
        rounded="lg"
        position="relative"
        onClick={(e) => e.stopPropagation()}
        maxW="800px"
        w="90%"
        boxShadow="0 4px 20px rgba(0, 0, 0, 0.1)"
      >
        <IconButton
          aria-label="Close popup"
          onClick={onClose}
          position="absolute"
          top="1.5rem"
          right="1rem"
          colorScheme="gray"
          variant="ghost"
          size="lg"
          _hover={{ bg: 'gray.200' }}
        >
          <IoClose />
        </IconButton>

        <Stack gap="1.5rem">
          <Heading as="h2" size="xl" color="gray.800" fontWeight="bold" textAlign="center">
            {post.title}
          </Heading>

          <Image
            src={post.img}
            srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
            alt={post.title}
            width={600}
            height={350}
            objectFit="cover"
            rounded="md"
            mb="1.5rem"
          />

          <Text fontSize="0.875rem" color="gray.500" fontWeight="medium" textAlign="center">
            {post.date} | {post.views} views
          </Text>

          <Text fontSize="1rem" color="gray.700" lineHeight="1.6" mb="1.5rem">
            {post.text}
          </Text>

          <Box>
            <Heading as="h3" size="md" color="gray.800" fontWeight="bold" mb="1rem">
              Author: {post.autor}
            </Heading>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default PostPopup;
