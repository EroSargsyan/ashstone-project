import { useRef, useEffect } from 'react';
import { Box, IconButton, Input } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const SearchBar: React.FC<{ searchOpen: boolean; setSearchOpen: (open: boolean) => void }> = ({
  searchOpen,
  setSearchOpen,
}) => {
  const searchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [searchOpen, setSearchOpen]);

  return (
    <Box position="relative" display="flex" alignItems="center" ref={searchRef}>
      <IconButton
        aria-label="Open search"
        onClick={() => setSearchOpen(!searchOpen)}
        variant="ghost"
        _hover={{ bg: 'gray.100' }}
      >
        <BiSearch />
      </IconButton>

      {searchOpen && (
        <Box
          position="absolute"
          top="100%"
          right="0"
          width="18rem"
          bg="white"
          shadow="xl"
          rounded="md"
          mt="0.5rem"
          py="0.75rem"
          px="1rem"
          border="1px solid"
          borderColor="gray.300"
          zIndex={200}
          display="flex"
          alignItems="center"
          gap="0.5rem"
        >
          <Input
            placeholder="Type to search..."
            size="md"
            variant="outline"
            rounded="md"
            width="100%"
            _hover={{ bg: 'gray.50' }}
            _focus={{ bg: 'white' }}
            autoFocus
          />
        </Box>
      )}
    </Box>
  );
};

export default SearchBar;
