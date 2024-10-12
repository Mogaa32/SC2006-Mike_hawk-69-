import { useState } from "react";
import {
  Flex,
  Box,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function NavBar() {
  return (
    <Box bg="lightgrey" w="100%" h="100%" p={4}>
      <Flex mt="3" justifyContent="center">
        <Flex
          direction="row"
          alignItems="left"
          w={{ base: "90%", md: "70%", lg: "50%" }}
        >
          <Menu>
            <MenuButton>
              <img
                src="../../public/RQ.png"
                alt="ReportQuest Logo"
                width="50px"
                height="50px"
              />
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link
                  as={RouterLink}
                  to="/login"
                  _hover={{ color: "blue.600" }}
                >
                  Login
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  as={RouterLink}
                  to="/register"
                  _hover={{ color: "blue.600" }}
                >
                  Register
                </Link>
              </MenuItem>
              <MenuItem>
                <Link
                  as={RouterLink}
                  to="/makereport"
                  _hover={{ color: "blue.600" }}
                >
                  Make Report
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
