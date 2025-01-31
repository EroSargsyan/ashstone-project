import { IPostPopupProps } from '@/types/types';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

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
        rounded="md"
        position="relative"
        onClick={(e) => e.stopPropagation()}
        maxW="600px"
        w="90%"
      >
        <Button
          onClick={onClose}
          position="absolute"
          top="1rem"
          right="1rem"
          colorScheme="gray"
          variant="ghost"
          size="sm"
        >
          Close
        </Button>
        <Heading as="h2" size="md" mb="1rem">
          {post.title}
        </Heading>
        <Text fontSize="sm" color="gray.600">
          {/* {post.description}  TODO */}
        </Text>
      </Box>
    </Box>
  );
};

export default PostPopup;
