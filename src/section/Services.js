import { Box, Container, Grid } from "theme-ui";
import React, { useState, useEffect } from "react";

// Yellow
import { Card, ServicesData } from "../lib";
import SectionHeader from "../components/SectionHeader";

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
        <div className="service_labels">
          <button active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </button>
          <button
            active={filter === "monitoring"}
            onClick={() => setFilter("monitoring")}
          >
            Monitoring
          </button>
          <button
            active={filter === "installasi"}
            onClick={() => setFilter("installasi")}
          >
            Installasi
          </button>
          <button
            active={filter === "rkl-rpl"}
            onClick={() => setFilter("rkl-rpl")}
          >
            RKL-RPL
          </button>
          <button
            active={filter === "pertek"}
            onClick={() => setFilter("pertek")}
          >
            Pertek
          </button>
          <button
            active={filter === "studi"}
            onClick={() => setFilter("studi")}
          >
            Studi
          </button>
        </div>
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

export default Services;
