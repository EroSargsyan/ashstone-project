'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Flex, Text } from '@chakra-ui/react';
import Navbar from '@/components/navbar/Navbar';
import PostCard from '@/components/cards/PostCard';
import PostPopup from '@/components/cards/PostPopup';
import { IPost } from '@/types/types';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<IPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://cloud.codesupply.co/endpoint/react/data.json';

    axios
      .get(apiUrl)
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      const query = searchTerm.toLowerCase();
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) || post.text.toLowerCase().includes(query),
      );
      setFilteredPosts(filtered);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, posts]);

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box>
      <Navbar searchTerm={searchTerm} handleSearchTerm={handleSearchTerm} />

      <Box maxW="7xl" mx="auto" mt="3rem" px="3rem">
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" minH="300px">
            <Text fontSize="lg" fontWeight="medium" color="gray.500">
              Loading posts...
            </Text>
          </Box>
        ) : filteredPosts.length === 0 ? (
          <Box display="flex" justifyContent="center" alignItems="center" minH="300px">
            <Text fontSize="lg" fontWeight="medium" color="gray.500">
              No posts found.
            </Text>
          </Box>
        ) : (
          <Flex wrap="wrap" gap="3rem" justify="center">
            {filteredPosts.map((post, index) => (
              <Box
                key={index}
                w={{ base: '100%', md: 'calc(50% - 1.5rem)', lg: 'calc(33.333% - 2rem)' }}
                minH="350px"
                display="flex"
              >
                <PostCard post={post} onClick={() => setSelectedPost(post)} />
              </Box>
            ))}
          </Flex>
        )}
      </Box>

      {selectedPost && <PostPopup post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </Box>
  );
};

export default HomePage;
