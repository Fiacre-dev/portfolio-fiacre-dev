import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      w="full"
      maxW="sm"
      spacing={4}
      boxShadow="md"
      p={6}
      rounded="md"
      bg="white"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack spacing={2} alignItems="flex-start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <HStack alignItems="center" justifyContent="flex-end">
        <Text fontSize="sm" fontWeight="bold" color="blue.500">
          Learn More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
