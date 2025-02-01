import { Button, Input, Popover, Portal } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';

const SearchBar: React.FC<{
  searchTerm: string;
  handleSearchTerm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ searchTerm, handleSearchTerm }) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <Button variant="ghost" size="sm" aria-label="Open Search">
          <BiSearch size="20px" />
        </Button>
      </Popover.Trigger>

      <Portal>
        <Popover.Positioner>
          <Popover.Content width="18rem" bg="white" rounded="md">
            <Popover.Body py="4" px="4">
              <Input
                placeholder="Search Posts..."
                pl="10px"
                size="sm"
                variant="flushed"
                value={searchTerm}
                onChange={handleSearchTerm}
                autoFocus
              />
            </Popover.Body>
          </Popover.Content>
        </Popover.Positioner>
      </Portal>
    </Popover.Root>
  );
};

export default SearchBar;
