import { bool } from "prop-types";
import { Box, Heading, Text } from "theme-ui";

const SectionHeader = ({ title = "", slogan = "", isWhite = bool }) => (
  <Box id={"section-header"} variant={"sectionHeader"} sx={{ pb: "32px" }}>
    <Heading
      as={"h2"}
      id={"subtitle"}
      variant={"sectionHeader.title"}
      sx={{
        color: isWhite ? "primary" : "text",
        width: "50%",
        letterSpacing: "1px",
      }}
    >
      {title}
    </Heading>
    {slogan && (
      <Text as={"p"} variant={"sectionHeader.subtitle"}>
        {slogan}
      </Text>
    )}
  </Box>
);

export default SectionHeader;
