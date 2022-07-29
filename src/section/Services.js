import { Box, Container, Grid, Text } from "theme-ui";
import React, { useState, useEffect } from "react";

// Yellow
import { Card, ServiceDatas, ServiceCategories, SectionHeader } from "../lib";

function Services() {
  const [filter, setFilter] = useState("all");
  const [portofolio, setPortofolio] = useState([]);

  useEffect(() => {
    setPortofolio(ServiceDatas);
  }, []);

  useEffect(() => {
    setPortofolio([]);

    const filtered = ServiceDatas.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));

    setPortofolio(filtered);
  }, [filter]);

  return (
    <Box
      id="sertvices-section"
      as={"section"}
      sx={{ variant: "box.background.main" }}
    >
      <Container sx={{ variant: "layout.container.about" }}>
        <Box id="filter" as={"div"}>
          <SectionHeader
            title={"Beragam Pilihan Jasa "}
            slogan={
              "Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam menerbitkan izin Lingkungan suatu bangunan dengan mudah dan praktis"
            }
          />
          {/* Filter Buttons */}
          <Box
            as={"div"}
            className="service_filter__buttons"
            sx={styles.scrollMenu}
          >
            {ServiceCategories.map((c) => (
              <Text
                as={"p"}
                id={c.name}
                key={c.id}
                className={`service_label ${filter === c.name ? "active" : ""}`}
                onClick={() => setFilter(c.name)}
                sx={styles.scrollMenu__button}
              >
                {c.title}
              </Text>
            ))}
          </Box>

          {/* Portfolio Cards */}
          <Grid
            gap={3}
            columns={[null, null, null, 2, 3, 4]}
            as={"div"}
            id={"card-container__service"}
          >
            {portofolio.map((item) =>
              item.filtered === true ? (
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
              ) : null
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  scrollMenu: {
    backgroundColor: "transparent",
    overflow: "auto",
    whiteSpace: "nowrap",
    textAlign: [null, null, null, null, "center", "center"],
    mb: "2rem",
  },

  scrollMenu__button: {
    display: "inline-block",
    padding: "0.25rem 0.5rem",
    cursor: "pointer",
    fontSize: "0.875rem",
    // textTransform: "uppercase",
    color: "text",
    fontWeight: 500,
    letterSpacing: "0.050rem",
    transition: "all 0.3s ease",

    "&:hover": {
      color: "secondary",
    },

    "&.active": {
      backgroundColor: "primary",
      color: "white",
      padding: "0.25rem 0.5rem",
      borderRadius: "5px",
      transition: "all 0.3s ease",

      "&:hover": {
        backgroundColor: ["primary", "hsl(108, 100%, 26%)"],
      },
    },
  },
};

export default Services;
