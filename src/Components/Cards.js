import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import ToastExample from "./ToastError";

const Cards = ({ userData }) => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth0();

  const handleClick = () => {
    navigate(`/UserProfile/${userData.id}`);
  };

  return (
    <>
      <Card maxW="250" my={8}>
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
            maxW="130"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{userData.name}</Heading>
            <Text color="green.500">{userData.address.city}</Text>
            <Text color="blue.600" fontSize="2xl">
              {"UID" + userData.id}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            {isAuthenticated ? (
              <Button variant="solid" colorScheme="blue" onClick={handleClick}>
                Full View
              </Button>
            ) : (
              <ToastExample />
            )}
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Cards;
