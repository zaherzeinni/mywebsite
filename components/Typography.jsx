import { Box} from "@chakra-ui/react";
import clsx from "clsx";
//const Box = styled(Box, {
  shouldForwardProp: props => props !== "textTransformStyle"
//})
(({
  textTransformStyle,
  ellipsis
}) => ({
  textTransform: textTransformStyle || "none",
  whiteSpace: ellipsis ? "nowrap" : "normal",
  overflow: ellipsis ? "hidden" : "",
  textOverflow: ellipsis ? "ellipsis" : ""
}));

// ============================================

// ============================================

export const H1 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="h1" mb={0} mt={0} fontSize="30px" fontWeight="700" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};
export const H2 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="h2" mb={0} mt={0} fontSize="25px" fontWeight="700" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};
export const H3 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box mb={0} mt={0} component="h3" fontSize="20px" fontWeight="700" lineHeight="1.5" ellipsis={ellipsis ? 1 : undefined} textTransformStyle={textTransform} className={clsx({
    [className || ""]: true
  })} {...props}>
      {children}
    </Box>;
};
export const H4 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box mb={0} mt={0} component="h4" fontSize="17px" fontWeight="600" lineHeight="1.5" ellipsis={ellipsis ? 1 : undefined} textTransformStyle={textTransform} className={clsx({
    [className || ""]: true
  })} {...props}>
      {children}
    </Box>;
};
export const H5 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="h5" mb={0} mt={0} fontSize="16px" fontWeight="600" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};
export const H6 = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="h6" mb={0} mt={0} fontSize="14px" fontWeight="600" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};
export const Paragraph = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="p" mb={0} mt={0} fontSize="14px" {...props}>
      {children}
    </Box>;
};
export const Small = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="small" fontSize="12px" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};
export const Span = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="span" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};
export const Tiny = ({
  children,
  className,
  ellipsis,
  textTransform,
  ...props
}) => {
  return <Box textTransformStyle={textTransform} ellipsis={ellipsis ? 1 : undefined} className={clsx({
    [className || ""]: true
  })} component="small" fontSize="10px" lineHeight="1.5" {...props}>
      {children}
    </Box>;
};