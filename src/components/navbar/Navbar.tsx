'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IMenuItem } from '@/types/types';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FiMenu } from 'react-icons/fi';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import SearchBar from './Searchbar';

const menuItems: IMenuItem[] = [
  {
    value: 'demos',
    title: 'Demos',
    subMenu: [
      { title: 'Demo 1', href: '#' },
      { title: 'Demo 2', href: '#' },
    ],
  },
  {
    value: 'post',
    title: 'Post',
    subMenu: [
      { title: 'Post Header', href: '#' },
      { title: 'Post Layout', href: '#' },
      { title: 'Share Buttons', href: '#' },
    ],
  },
  {
    value: 'features',
    title: 'Features',
    subMenu: [
      { title: 'Feature A', href: '#' },
      { title: 'Feature B', href: '#' },
    ],
  },
  {
    value: 'categories',
    title: 'Categories',
    subMenu: [
      { title: 'Category X', href: '#' },
      { title: 'Category Y', href: '#' },
    ],
  },
  { value: 'shop', title: 'Shop', href: '#' },
  { value: 'buy-now', title: 'Buy Now', href: '#' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsVisible(lastScroll > currentScroll || currentScroll < 200);
      lastScroll = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      as="nav"
      bg="white"
      shadow="md"
      position="sticky"
      top="0"
      zIndex="1000"
      transition="transform 0.3s"
      transform={isVisible ? 'translateY(0)' : 'translateY(-100%)'}
    >
      <Flex maxW="7xl" mx="auto" px="4" py="3" align="center" justify="space-between">
        <IconButton
          aria-label="Open menu"
          display={{ base: 'inline-flex', lg: 'none' }}
          onClick={() => setMobileMenuOpen(true)}
          variant="ghost"
        >
          <FiMenu />
        </IconButton>

        <Flex direction="column" align="center" w="100%" maxW="7xl" mx="auto" gap="1rem">
          <Flex w="100%" align="center" justify="space-between">
            <Box w="8rem" h="auto" mx="auto">
              <Image src="/assets/Logotype.svg" alt="Logo" width={128} height={64} priority />
            </Box>

            <Box position="relative" display="flex" alignItems="center">
              <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            </Box>
          </Flex>

          <Box display={{ base: 'none', lg: 'block' }} textAlign="center">
            <DesktopMenu menuItems={menuItems} />
          </Box>
        </Flex>
      </Flex>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        menuItems={menuItems}
      />
    </Box>
  );
};

export default Navbar;
