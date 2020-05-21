import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Tabs, TabList, Tab, TabPanels, TabPanel, useColorMode, Flex } from '@chakra-ui/core';

import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';

const AuthPage = () => {
  const { colorMode } = useColorMode();
  const { mode } = useParams();
  console.log(mode);
  return (
    <>
      <Navbar />
      <Flex justify="center" align="center" mt={8} pos="relative" height="full">
        <Box
          bg={colorMode === 'light' ? 'gray.200' : 'gray.600'}
          w="350px"
          p={3}
          boxShadow="sm"
          rounded="lg"
        >
          <Tabs variant="enclosed-colored" isFitted m={4}>
            <TabList>
              <Tab>{mode === 'login' ? 'Log in' : 'Sign up'}</Tab>
              <Tab>{mode !== 'login' ? 'Log in' : 'Sign up'}</Tab>
            </TabList>
            <TabPanels mt={3}>
              <TabPanel>
                {mode === 'login' && <LoginForm mode={mode} />}
                {(mode === 'student' || mode === 'teacher') && <SignupForm mode={mode} />}
              </TabPanel>
              <TabPanel>
                {mode === 'login' && <SignupForm mode={mode} />}
                {(mode === 'student' || mode === 'teacher') && <LoginForm mode={mode} />}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Flex>
    </>
  );
};

export default AuthPage;
