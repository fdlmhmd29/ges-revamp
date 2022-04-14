import { Box, Heading, Text } from "theme-ui";

const SectionHeader = ({ title, slogan, isWhite }) => (
  <Box id={"section-header"} variant={"sectionHeader"}>
    <Heading
      as={"h2"}
      id={"subtitle"}
      variant={"sectionHeader.title"}
      sx={{ color: isWhite ? "primary" : "text", width: "50%" }}
    >
      {title}
    </Heading>
    <Text as={"p"} variant={"sectionHeader.subtitle"}>
      {slogan}
    </Text>
  </Box>
);

export default SectionHeader;
