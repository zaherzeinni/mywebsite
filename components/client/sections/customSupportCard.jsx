import React from "react";
import { Box, Card, Button, Input } from "@chakra-ui/react";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";

const CustomSupportCard = ({ title, desc, icon, buttonText }) => {
  return (
    <Card
      flexDirection={"column"}
      borderRadius={10}
      gap={5}
      className="!bg-[#F3F8FF] !my-5 md:my-0 !shadow-2xl !rounded-3xl"
    >
      <Box flexGrow={1}>
        {icon}
        <Box padding={5}>
          <p className="text-xl font-medium text-gray-800 pb-2">{title}</p>
          <p>{desc}</p>
        </Box>
      </Box>
      <Button
        py="25"
        borderRadius={"0px 0px 9px 9px"}
        fontSize={18}
        mt="4"
        bg={"red"}
        textColor={"white"}
        _hover={{ bg: "red.600" }}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default CustomSupportCard;
