import { Box, Container, Heading, Text } from "theme-ui";

const SectionHeader = ({ title = "", slogan = "" }) => (
  <Box sx={{ mb: "2rem !important" }}>
    <Heading id="subtitle" as={"h1"} sx={{ variant: "text.heading.subtitle" }}>
      {title}
    </Heading>
    {slogan && (
      <Text id="caption" as={"p"} sx={{ variant: "text.caption.mobile" }}>
        {slogan}
      </Text>
    )}
  </Box>
);

export default SectionHeader;
