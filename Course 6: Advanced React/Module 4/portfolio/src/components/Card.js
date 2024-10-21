import { Heading, HStack, Image, Text, VStack, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <div>
      <HStack>
        <Box
        bg='white'
        color="black"
        borderRadius="xl"
        paddingBottom={5}
        >

          <VStack spacing={5}>
            <Image src={imageSrc} alt={title} borderRadius="xl" />
            <Box paddingX={5}>
              <Heading as="h3" size="lg" paddingBottom={3}>{title}</Heading>
              <Text fontSize="md" color="gray">{description}</Text>

              <HStack paddingTop={3}>
                <Text>See more</Text>
                <FontAwesomeIcon icon={faArrowRight} size="1x" />
              </HStack>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </div>
  );
};

export default Card;
