import { IMenuItem } from '@/types/types';
import { Box, Link, Stack, Icon, chakra } from '@chakra-ui/react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';

const DesktopMenu: React.FC<{ menuItems: IMenuItem[] }> = ({ menuItems }) => {
  return (
    <Stack direction="row" align="center" gap="2rem" position="relative">
      {menuItems.map((item) => (
        <Box
          key={item.value}
          position="relative"
          fontWeight="500"
          fontSize="1rem"
          color="gray.800"
          cursor="pointer"
          px="0.5rem"
          py="0.5rem"
          rounded="0.25rem"
          _hover={{
            color: 'red.500',
            bg: 'gray.50',
          }}
          css={{
            '&:hover > .submenu': {
              opacity: 1,
              visibility: 'visible',
              transform: 'translateY(0)',
            },
          }}
        >
          <chakra.div display="flex" alignItems="center" gap="0.5rem">
            {item.title}
            {item.subMenu && <Icon as={FiChevronDown} fontSize="1rem" />}
          </chakra.div>
          {item.subMenu && (
            <Box
              className="submenu"
              position="absolute"
              top="100%"
              left="0"
              bg="white"
              shadow="lg"
              rounded="0.5rem"
              mt="0.5rem"
              py="1rem"
              px="1rem"
              border="0.0625rem solid"
              borderColor="gray.200"
              minW="12.5rem"
              zIndex={100}
              opacity={0}
              visibility="hidden"
              transform="translateY(-0.3125rem)"
              transition="opacity 0.2s ease-in-out, transform 0.2s ease-in-out, visibility 0.2s ease-in-out"
            >
              {item.subMenu.map((subItem, idx) => (
                <Link
                  key={idx}
                  href={subItem.href}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  py="0.5rem"
                  px="0.5rem"
                  fontSize="0.875rem"
                  color="gray.700"
                  rounded="0.25rem"
                  _hover={{
                    bg: 'gray.100',
                    color: 'red.500',
                    fontWeight: 'bold',
                  }}
                >
                  {subItem.title}
                  <Icon as={FiChevronRight} fontSize="1rem" />
                </Link>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default DesktopMenu;
