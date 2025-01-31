'use client';

import React from 'react';
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  DrawerCloseTrigger,
} from '@/components/ui/drawer';
import {
  Box,
  Stack,
  Link,
  Button,
  AccordionItem,
  AccordionItemTrigger,
  AccordionItemContent,
  AccordionRoot,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FiChevronRight, FiChevronDown } from 'react-icons/fi';
import { IMenuItem } from '@/types/types';
import Image from 'next/image';

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void; menuItems: IMenuItem[] }> = ({
  isOpen,
  onClose,
  menuItems,
}) => {
  return (
    <DrawerRoot open={isOpen} onOpenChange={(e) => !e.open && onClose()} placement="start">
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          bg="white"
          borderBottom="1px solid"
          borderColor="gray.200"
          py="1.25rem"
          px="1rem"
        >
          <Box display="flex" alignItems="center" justifyContent="flex-start">
            <Image src="/assets/Logotype.svg" alt="Logo" width={128} height={64} priority />
          </Box>

          <DrawerCloseTrigger>
            <Button variant="ghost" aria-label="Close menu">
              <Icon as={FiChevronDown} fontSize="1.5rem" />
            </Button>
          </DrawerCloseTrigger>
        </DrawerHeader>

        <DrawerBody bg="white" py="2rem" px="1rem">
          <Stack gap="1.5rem">
            <AccordionRoot collapsible>
              {menuItems.map((item, idx) => (
                <AccordionItem key={idx} value={item.value}>
                  <AccordionItemTrigger>
                    <Box
                      fontWeight="500"
                      fontSize="1rem"
                      color="gray.800"
                      py="0.75rem"
                      px="1rem"
                      _hover={{
                        color: 'red.500',
                        bg: 'gray.50',
                      }}
                      cursor="pointer"
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Text>{item.title}</Text>
                      <Box mt="0.05rem">
                        {item.subMenu && <Icon as={FiChevronDown} fontSize="1.25rem" />}
                      </Box>
                    </Box>
                  </AccordionItemTrigger>

                  {item.subMenu && (
                    <AccordionItemContent>
                      <Stack pl="1.5rem" pb="1rem" mt="0.5rem" gap="0.75rem">
                        {item.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.href}
                            fontSize="0.875rem"
                            color="gray.700"
                            _hover={{
                              color: 'red.500',
                              fontWeight: 'bold',
                              bg: 'gray.100',
                            }}
                            px="1rem"
                            py="0.75rem"
                            rounded="md"
                          >
                            <Text> {subItem.title}</Text>
                            <Box mb="0.05rem">
                              <Icon as={FiChevronRight} fontSize="1rem" />
                            </Box>
                          </Link>
                        ))}
                      </Stack>
                    </AccordionItemContent>
                  )}
                </AccordionItem>
              ))}
            </AccordionRoot>
          </Stack>
        </DrawerBody>

        <DrawerFooter
          display="flex"
          justifyContent="center"
          bg="white"
          borderTop="1px solid"
          borderColor="gray.200"
          py="1rem"
        >
          <DrawerCloseTrigger asChild>
            <Button variant="outline" size="sm">
              Close Menu
            </Button>
          </DrawerCloseTrigger>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenu;
