import { Box, Container, Link, Flex, Text } from "theme-ui";
import { UilMapMarkerQuestion } from "@iconscout/react-unicons";

const Help = () => (
  <Container
    as={"section"}
    id={"help-section"}
    sx={{ textAlign: "center !important" }}
  >
    <Box
      as={"div"}
      id={"help-cta"}
      sx={{
        textAlign: "center !important",
        fontSize: "0.875rem",
        letterSpacing: "0.5px",
        padding: "1rem !important",
        borderRadius: "50rem !important",
        px: "1.5rem !important",
        py: "1rem !important",
        display: "inline-block !important",
        border: "0.0625rem solid #cbcdd4 !important",
      }}
    >
      <Flex id={"help-container"} as={"div"} sx={{ alignItems: "center" }}>
        <UilMapMarkerQuestion color={"#26b600"} />
        <Text as={"p"} id={"help-text"} sx={{ pl: 2 }}>
          Belum tahu layanan yang sesuai?
        </Text>
        <Link
          id={"help-link"}
          as={"a"}
          href={"mailto:pt.greenfield@gmail.com"}
          sx={{ pl: 2, fontWeight: 500 }}
        >
          Konsultasikan dengan kami!
        </Link>
      </Flex>
    </Box>
  </Container>
);

export default Help;
