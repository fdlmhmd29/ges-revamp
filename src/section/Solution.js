import { Container, Flex, Grid } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import SolutionCard from "../components/SolutionCard";
import SolutionData from "./data/Solution";

const Solution = () => {
  return (
    <Container
      className="solution-container"
      id="solution-section"
      sx={{ maxWidth: "50%", textAlign: "center" }}
    >
      <SectionHeader title={"Cakupan Kami"} />
      <Grid
        gap={3}
        columns={[2, null, 3]}
        as={"div"}
        id={"solution-card-container"}
      >
        {SolutionData.map((item) => (
          <SolutionCard
            id={item.id}
            key={item.id}
            icon={item.icon}
            href={item.href}
            heading={item.heading}
            link={item.link}
            alt={item.heading}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Solution;
