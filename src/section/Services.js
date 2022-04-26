import { Box, Button, Container, Grid, Text } from "theme-ui";
import React, { useState, useEffect } from "react";

// Yellow
import { Card, ServicesData } from "../lib";
import SectionHeader from "../components/SectionHeader";

const category = [
  {
    id: 1,
    name: "all",
    title: "Semua",
  },
  {
    id: 2,
    name: "pertek",
    title: "Pertek",
  },
  {
    id: 3,
    name: "studi",
    title: "Studi",
  },
  {
    id: 4,
    name: "rkl-rpl",
    title: "RKL-RPL",
  },
  {
    id: 5,
    name: "monitoring",
    title: "Monitoring",
  },
  {
    id: 6,
    name: "installasi",
    title: "Installasi",
  },
];

function Services() {
  const [filter, setFilter] = useState("all");
  const [portofolio, setPortofolio] = useState([]);

  useEffect(() => {
    setPortofolio(ServicesData);
  }, []);

  useEffect(() => {
    setPortofolio([]);

    const filtered = ServicesData.map((p) => ({
      ...p,
      filtered: p.category.includes(filter),
    }));

    setPortofolio(filtered);
  }, [filter]);

  return (
    <Box id="sertvices-container" as={"section"} sx={styles.container}>
      <Container as={"section"}>
        <Box as={"div"}>
          <SectionHeader
            title={"Jasa Perizinan dan Konsultasi Lingkungan"}
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
            <Box as={"div"}>
              {category.map((c) => (
                <Text
                  as={"p"}
                  id={c.name}
                  key={c.id}
                  className={`service_label ${
                    filter === c.name ? "active" : ""
                  }`}
                  onClick={() => setFilter(c.name)}
                  sx={styles.scrollMenu__button}
                >
                  {c.title}
                </Text>
              ))}
            </Box>
          </Box>

          {/* Portfolio Cards */}
          <Grid gap={3} columns={[2, null, 4]} as={"div"} id={"card-container"}>
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
  container: {
    py: "5rem !important",

    background: "rgb(244,240,255)",
    background: "rgb(244,240,255)",
    background:
      "-moz-linear-gradient(0deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
    background:
      "-webkit-linear-gradient(0deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
    background:
      "linear-gradient(0deg, rgba(244,240,255,1) 0%, rgba(255,255,255,1) 100%)",
  },
  scrollMenu: {
    backgroundColor: "transparent",
    overflow: "auto",
    whiteSpace: "nowrap",
    textAlign: "center",
    marginBottom: "1.25rem",
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
