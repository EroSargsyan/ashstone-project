import { Box, Image, Text, Heading, chakra } from '@chakra-ui/react';
import { IPostCardProps } from '@/types/types';

const PostCard: React.FC<IPostCardProps> = ({ post, onClick }) => {
  return (
    <Box
      bg="white"
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      cursor="pointer"
      transition="transform 0.2s, box-shadow 0.2s"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
      onClick={onClick}
      boxShadow="0 2px 10px rgba(0, 0, 0, 0.1)"
      mb="3rem"
    >
      <Image
        src={post.img}
        srcSet={`${post.img} 1x, ${post.img_2x} 2x`}
        alt={post.title}
        w="100%"
        h="220px"
        objectFit="cover"
      />

      <Box p="1.5rem">
        <Text
          fontSize="0.875rem"
          color="#EB0028"
          textTransform="uppercase"
          mb="0.5rem"
          fontWeight="bold"
        >
          {post.tags}
        </Text>

        <Heading as="h2" size="lg" mb="1rem" color="gray.800" fontWeight="bold">
          {post.title}
        </Heading>

        <Text fontSize="0.75rem" color="black" mb="1rem">
          <span>{post.autor}</span> &nbsp;
          <chakra.span color="gray.400">•</chakra.span> &nbsp;
          <chakra.span color="gray.400">{post.date}</chakra.span> &nbsp;
          <chakra.span color="gray.400">•</chakra.span> &nbsp;
          <chakra.span color="gray.400">{post.views} views</chakra.span>
        </Text>

        <Text fontSize="1rem" color="gray.400" mb="1.25rem" lineHeight="1.6">
          {post.text}
        </Text>
      </Box>
    </Box>
  );
};

export default PostCard;
