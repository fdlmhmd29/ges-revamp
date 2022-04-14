import SectionHeader from "../components/SectionHeader";
import { Box, Container, Grid } from "theme-ui";
import { Card, ServicesData } from "../lib";

const Services = () => (
  <Container as={"section"} id={"service-section"} sx={{ py: "1.875rem" }}>
    <Box as={"div"} sx={{}}>
      <SectionHeader
        title={"Jasa Perizinan dan Konsultasi Lingkungan"}
        slogan={
          "Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam menerbitkan izin Lingkungan suatu bangunan dengan mudah dan praktis."
        }
      />
      <Grid gap={3} columns={[2, null, 4]} as={"div"} id={"card-container"}>
        {ServicesData.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            icon={item.icon}
            href={item.href}
            heading={item.heading}
            text={item.text}
            link={item.link}
            alt={item.heading}
          />
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Services;
