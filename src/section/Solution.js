import { Container, Flex, Grid } from "theme-ui";
import SectionHeader from "../components/SectionHeader";
import SolutionCard from "../components/SolutionCard";
import SolutionData from "./data/Solution";

const Solution = () => {
  return (
    <Container className="solution-container" id="solution-section" sx={{}}>
      <SectionHeader title={"Cakupan Kami"} />
      <Flex
        as={"div"}
        id={"solution-card-container"}
        sx={{ gap: "20px", justifyContent: "center" }}
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
      </Flex>
    </Container>
  );
};

export default Solution;
