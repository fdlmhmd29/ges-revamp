import { Box, Button, Container, Grid } from "theme-ui";
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
    <Container as={"section"} id={"service-section"} sx={{ py: "1.875rem" }}>
      <Box as={"div"} sx={{}}>
        <SectionHeader
          title={"Jasa Perizinan dan Konsultasi Lingkungan"}
          slogan={
            "Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam menerbitkan izin Lingkungan suatu bangunan dengan mudah dan praktis."
          }
        />

        {/* Filter Buttons */}
        <Box
          as={"div"}
          className="service_filter__buttons"
          sx={styles.filterContainer}
        >
          {category.map((c) => (
            <Button
              as={"div"}
              id={c.name}
              type="button"
              key={c.id}
              className={`service_label ${filter === c.name ? "active" : ""}`}
              onClick={() => setFilter(c.name)}
              sx={styles.filterButton}
            >
              {c.title}
            </Button>
          ))}
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
  );
}

const styles = {
  filterContainer: {
    backgroundColor: "transparent",
    borderRadius: "0.25rem",
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
  },

  filterButton: {
    fontSize: "1.125rem",
    fontWeight: "600",
    color: "white",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "gray.100",
    },
    "&.active": {
      backgroundColor: "white",
      color: "primary",
    },
  },
};

export default Services;
