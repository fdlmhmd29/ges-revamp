import { Container, Grid } from "theme-ui";
import { Card, enSolution, idSolution } from "../lib";
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
      id="solution-section"
      sx={{ variant: "layout.container.solution" }}
    >
      <Grid
        gap={3}
        columns={[null, null, null, null, 2, 3]}
        as={"div"}
        id={"card-container__solution"}
      >
        {items.map((item) => (
          <Card
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
