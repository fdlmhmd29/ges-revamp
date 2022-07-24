import { Container, Flex } from "theme-ui";
import SolutionCard from "../components/SolutionCard";
import { enSolution, idSolution } from "../lib";
import { useRouter } from "next/router";

const Solution = () => {
  let router = useRouter();
  let items =
    router.locale === "id"
      ? idSolution
      : router.locale === "en"
      ? enSolution
      : null;

  return (
    <Container
      as={"section"}
      className="solution-container"
      id="solution-section"
      sx={{ mb: "-4.5rem" }}
    >
      <Flex
        as={"div"}
        id={"solution-card-container"}
        sx={{ gap: "20px", justifyContent: "center" }}
      >
        {items.map((item) => (
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
