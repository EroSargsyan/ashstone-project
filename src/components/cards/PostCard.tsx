import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { IPostCardProps } from '@/types/types';

const PostCard: React.FC<IPostCardProps> = ({ post, onClick }) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-2px)', shadow: 'lg' }}
      onClick={onClick}
    >
      <Image
        src={post.img}
        srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        alt={post.title}
        w="100%"
        h="auto"
      />

      <Box p="1rem">
        <Text fontSize="0.75rem" color="gray.500" textTransform="uppercase" mb="0.5rem">
          {post.tags}
        </Text>

        <Heading as="h2" size="md" mb="0.5rem" color="gray.800">
          {post.title}
        </Heading>

        <Text fontSize="0.875rem" color="gray.600" mb="0.75rem">
          {post.text}
        </Text>

        <Text fontSize="0.75rem" color="gray.400">
          <span>{post.autor}</span> | <span>{post.date}</span> | <span>{post.views} views</span>
        </Text>
      </Box>
    </Box>
  );
};

export default PostCard;
