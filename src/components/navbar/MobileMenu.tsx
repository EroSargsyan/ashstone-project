'use client';

import React from 'react';
import {
  DrawerRoot,
  DrawerBackdrop,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
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
} from '@chakra-ui/react';
import { IMenuItem } from '@/types/types';

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void; menuItems: IMenuItem[] }> = ({
  isOpen,
  onClose,
  menuItems,
}) => {
  return (
    <DrawerRoot open={isOpen} onOpenChange={(e) => !e.open && onClose()} placement="start">
      <DrawerBackdrop />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Menu</DrawerTitle>
          <DrawerCloseTrigger>
            <Button variant="ghost">Close</Button>
          </DrawerCloseTrigger>
        </DrawerHeader>

        <DrawerBody>
          <Stack>
            <AccordionRoot collapsible>
              {menuItems.map((item, idx) => (
                <AccordionItem key={idx} value={item.value}>
                  <AccordionItemTrigger>
                    <Box fontWeight="medium" cursor="pointer" _hover={{ color: 'red.500' }}>
                      {item.title}
                    </Box>
                  </AccordionItemTrigger>
                  {item.subMenu && (
                    <AccordionItemContent>
                      <Stack pl="4" mt="2">
                        {item.subMenu.map((subItem, subIdx) => (
                          <Link
                            key={subIdx}
                            href={subItem.href}
                            fontSize="sm"
                            _hover={{ color: 'red.500' }}
                          >
                            {subItem.title}
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

        <DrawerFooter>
          <DrawerCloseTrigger asChild>
            <Button variant="outline">Close Menu</Button>
          </DrawerCloseTrigger>
        </DrawerFooter>
      </DrawerContent>
    </DrawerRoot>
  );
};

export default MobileMenu;
