'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/react';
import Navbar from '@/components/navbar/Navbar';
import PostCard from '@/components/cards/PostCard';
import PostPopup from '@/components/cards/PostPopup';
import { IPost } from '@/types/types';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);

  useEffect(() => {
    axios
      .get('https://cloud.codesupply.co/endpoint/react/data.json')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredPosts = posts.filter((post) => {
    const query = searchTerm.toLowerCase();
    return post.title.toLowerCase().includes(query) || post.text.toLowerCase().includes(query);
  });

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box>
      <Navbar searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />

      <Box maxW="7xl" mx="auto" px={4} py={8} mt={4}>
        <Flex wrap="wrap" gap="1rem">
          {filteredPosts.map((post, index) => (
            <Box
              key={index}
              w={{ base: '100%', md: 'calc(50% - 1rem)', lg: 'calc(33.3333% - 1rem)' }}
            >
              <PostCard post={post} onClick={() => setSelectedPost(post)} />
            </Box>
          ))}
        </Flex>
      </Box>

      {selectedPost && <PostPopup post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </Box>
  );
};

export default HomePage;
