'use client';

import React, { useState } from 'react';
import { Box, Flex, IconButton, Input } from '@chakra-ui/react';
import { BiSearch } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const menuItems = [
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
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box as="nav" bg="white" shadow="md" position="sticky" top="0" zIndex="1000">
      <Flex maxW="7xl" mx="auto" px="4" py="2" align="center" justify="space-between">
        {/* Left: Hamburger for mobile */}
        <IconButton
          aria-label="Open menu"
          display={{ base: 'inline-flex', lg: 'none' }}
          onClick={() => setMenuOpen(true)}
          variant="ghost"
        >
          <FiMenu />
        </IconButton>

        {/* Logo */}
        <Box fontSize="1.5rem" fontWeight="bold" color="gray.800">
          LOGOTYPE
        </Box>

        {/* Desktop Menu */}
        <Box display={{ base: 'none', lg: 'block' }}>
          <DesktopMenu menuItems={menuItems} />
        </Box>

        {/* Right: Search Icon */}
        <IconButton
          aria-label="Toggle search"
          variant="ghost"
          onClick={() => setSearchOpen((prev) => !prev)}
        >
          <BiSearch />
        </IconButton>
      </Flex>

      {/* Search bar */}
      {searchOpen && (
        <Box px="4" py="2" bg="gray.50">
          <Input placeholder="Search..." size="md" borderColor="gray.300" rounded="md" autoFocus />
        </Box>
      )}

      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} menuItems={menuItems} />
    </Box>
  );
};

export default Navbar;
