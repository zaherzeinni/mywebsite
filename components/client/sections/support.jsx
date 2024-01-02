import React from "react";
import { SimpleGrid, Box, Card, Flex, Center } from "@chakra-ui/react";
import Image from "next/image";
const Support = () => {
  return (
    <div>
      <SimpleGrid spacing={10} columns={[1, 1, 2, 3]} mb={10}>

        <Card p={22} className=" !shadow-lg">
          <Flex gap={10} mx={15}>
            <Box >
              <Image
                src="/support/truck.png"
                width={64}
                height={64}
                className="!w-[64px] !h-[64px]"
              />
            </Box>

            <Box>
              <p className="text-xl font-bold">Cash On Delivery</p>

              <p className="text-sm">Your order is in our safe hands</p>
            </Box>
          </Flex>
        </Card>

        <Card p={22} className=" !shadow-lg">
          <Flex gap={10} mx={15}>
            <Box >
              <Image
                src="/support/support.png"
                width={64}
                height={64}
                className="!w-[64px] !h-[64px]"
              />
            </Box>

            <Box>
              <p className="text-xl font-bold">Dedicated Support</p>

              <p className="text-sm">Customer service all the time</p>
            </Box>
          </Flex>
        </Card>

        <Card p={22} className=" !shadow-lg">
          <Flex gap={10} mx={15}>
            <Box >
              <Image
                src="/support/money.png"
                width={64}
                height={64}
                className="!w-[64px] !h-[64px]"
              />
            </Box>

            <Box>
              <p className="text-xl font-bold">Money Back Guarantee</p>

              <p className="text-sm">
                We guarantee the worthiness of every money transaction
              </p>
            </Box>
          </Flex>
        </Card>
      </SimpleGrid>
    </div>
  );
};

export default Support;
