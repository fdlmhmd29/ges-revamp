import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box, Container } from "theme-ui";

// Yellow
import clients from "./data/Clients";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 9999,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 412,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    return (
      <Box id="clients-container" as={"section"} sx={styles.container}>
        <Container>
          <Slider {...settings}>
            {clients?.map((client) => (
              <Box key={client.id} sx={styles.imageWrapper}>
                <Image
                  quality={100}
                  loading="lazy"
                  layout="fixed"
                  src={client.logo}
                  alt={client.name}
                />
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>
    );
  }
}

const styles = {
  container: {
    background: "rgba(255,255,255,1)",
  },

  imageWrapper: {
    display: "flex !important",
    justifyContent: "center",

    ":focus": {
      outline: "none",
    },
  },
};
