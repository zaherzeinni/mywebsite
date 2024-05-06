import { Box } from "@chakra-ui/react";
const FlexRowCenter = ({
  children,
  ...props
}) => <Box display="flex" justifyContent="center" alignItems="center" {...props}>
    {children}
  </Box>;
export default FlexRowCenter;