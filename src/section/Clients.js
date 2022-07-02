import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Box } from "theme-ui";
import clients from "./data/Clients";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 100000,
          settings: {
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 3,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ],
    };
    return (
      <Box id="clients-container" as={"section"} sx={styles.container}>
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
      </Box>
    );
  }
}

const styles = {
  container: {
    py: "4rem !important",
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
