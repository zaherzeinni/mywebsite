import { Box } from "@chakra-ui/react";
const FlexBox = ({
  children,
  ...props
}) => <Box display="flex" {...props}>
    {children}
  </Box>;
export default FlexBox;