import { Box, Container, Flex, NavLink, Text, Link, Divider } from "theme-ui";
import Image from "next/image";
import {
  UilClock,
  UilEnvelope,
  UilPhone,
  UilMapMarker,
} from "@iconscout/react-unicons";

// Yellow

import mainLogo from "../../public/img/logo.png";
import klhk from "../../public/img/klhk-logo.png";
import FooterChild from "./FooterChild";

const layanan = [
  {
    id: 1,
    text: "Persetujuan Teknis",
    links: "/",
  },
  {
    id: 2,
    text: "Studi",
    links: "/",
  },
  {
    id: 3,
    text: "Monitoring",
    links: "/",
  },
  {
    id: 4,
    text: "Installasi",
    links: "/",
  },
  {
    id: 5,
    text: "RKL-RPL",
    links: "/",
  },
];
const perusahaan = [
  {
    id: 1,
    text: "Tentang Kami",
    links: "/about",
  },
  {
    id: 2,
    text: "Kontak",
    links: "/",
  },
  {
    id: 3,
    text: "Portofolio",
    links: "/",
  },
  {
    id: 4,
    text: "Klien",
    links: "/",
  },
  {
    id: 5,
    text: "Keunggulan Kami",
    links: "/",
  },
];
const hubungiKami = [
  {
    id: 1,
    icon: <UilClock size="16" color="#8c98a4" />,
    text: "Jam Kerja:",
    detail: "08.00 s/d 17.00 WIB",
  },
  {
    id: 2,
    icon: <UilEnvelope size="16" color="#8c98a4" />,
    text: "E-mail",
    link: "pt.greenfield@gmail.com",
  },
  {
    id: 3,
    icon: <UilPhone size="16" color="#8c98a4" />,
    text: "Telepon",
    tel: "(021)-7815225",
  },
];
const alamat = [
  {
    id: 1,
    icon: <UilMapMarker size="16" color="#8c98a4" />,
    text: "Jakarta Selatan",
  },
];

const Footer = (props) => (
  <Box
    as={"footer"}
    sx={{
      background: "rgb(244,240,255)",
      background:
        "-moz-linear-gradient(180deg,  rgba(255,255,255,1) 0%, rgba(244,240,255,1) 100%)",
      background:
        "-webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,240,255,1) 100%)",
      background:
        "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,240,255,1) 100%)",
    }}
  >
    <Container>
      <Box as={"div"} sx={{ py: "5rem !important" }}>
        <Flex
          as={"div"}
          sx={{
            justifyContent: "space-between !important",
            flexWrap: "wrap",
          }}
        >
          <Box as={"div"} sx={{ width: "100%", maxWidth: "20rem" }}>
            {/* Logo */}

            <Link href={"/"} passHref>
              <NavLink id="nav-logo" className="logo" sx={styles.logo}>
                <Image
                  quality={100}
                  placeholder={"blur"}
                  loading={"lazy"}
                  src={mainLogo}
                  alt={"Logo Perusahaan PT Greenfield Environment Solution"}
                />
              </NavLink>
            </Link>

            {/* End of Logo */}

            {/* Right Nav Links */}
            <Flex as={"ul"} sx={{ flexDirection: "column" }}>
              <Box as={"li"}>
                <Text
                  sx={{
                    fontSize: [0, null, "0.85rem"],
                    color: "#8c98a4 !important",
                    mb: "1rem",
                  }}
                  as={"p"}
                >
                  PT Greenfield Environment Solution Bekerjasama dengan
                  Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia
                </Text>
              </Box>
              <Box as={"li"} sx={{ width: "100%", maxWidth: "15rem" }}>
                <Flex as={"div"} sx={{ flexDirection: "column !important" }}>
                  <Link
                    href={"https://www.menlhk.go.id/"}
                    target={"_blank"}
                    passHref
                  >
                    <NavLink id="nav-logo" className="logo" sx={styles.logo}>
                      <Image
                        quality={100}
                        placeholder={"blur"}
                        loading={"lazy"}
                        src={klhk}
                        alt={
                          "Logo Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia"
                        }
                      />
                    </NavLink>
                  </Link>
                </Flex>
              </Box>
            </Flex>
            {/* End of Right Nav Links */}
          </Box>
          {/* Left Nav Links */}

          {/* Pelayanan */}
          <Box>
            <Box
              as={"div"}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                pb: "1rem",
                lineHeight: 1.4,
                color: "#1e2022",
              }}
            >
              LAYANAN
            </Box>
            <Box
              as={"ul"}
              sx={{
                fontSize: [0, null, "0.85rem"],
              }}
            >
              {layanan.map((i) => (
                <Box key={i.id} as={"li"} sx={{ py: "8px", fontSize: "14px" }}>
                  <Link href={i.links} sx={styles.link}>
                    {i.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Perusahaan */}
          <Box>
            <Box
              as={"div"}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                pb: "1rem",
                lineHeight: 1.4,
                color: "#1e2022",
              }}
            >
              PERUSAHAAN
            </Box>
            <Box
              as={"ul"}
              sx={{
                fontSize: [0, null, "0.85rem"],
              }}
            >
              {perusahaan.map((i) => (
                <Box key={i.id} as={"li"} sx={{ py: "8px", fontSize: "14px" }}>
                  <Link href={i.links} sx={styles.link}>
                    {i.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Hubungi Kami */}
          <Box>
            <Box
              as={"div"}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                pb: "1rem",
                lineHeight: 1.4,
                color: "#1e2022",
              }}
            >
              HUBUNGI KAMI
            </Box>
            <Box
              as={"ul"}
              sx={{
                fontSize: [0, null, "0.85rem"],
              }}
            >
              {hubungiKami.map((i) => (
                <Box
                  key={i.id}
                  as={"li"}
                  sx={{ py: "8px", fontSize: "14px", display: "list-item" }}
                >
                  <Box as={"p"} sx={styles.link}>
                    <Flex sx={{ alignItems: "center", gap: "5px" }}>
                      <Flex as={"i"}>{i.icon}</Flex>
                      <Box as={"b"} sx={styles.link}>
                        {i.text}
                        <br />
                      </Box>
                    </Flex>
                    {i.link ? (
                      <Link sx={styles.link} href={`mailto:${i.link}`}>
                        {i.link}
                      </Link>
                    ) : null}
                    {i.tel ? (
                      <Link sx={styles.link} href={`tel:${i.tel}`}>
                        {i.tel}
                      </Link>
                    ) : null}
                    {i.detail}
                  </Box>
                </Box>
              ))}
              {alamat.map((i) => (
                <Box
                  key={i.id}
                  as={"li"}
                  sx={{ py: "8px", fontSize: "14px", display: "list-item" }}
                >
                  <Box as={"p"} sx={styles.link}>
                    <Flex sx={{ alignItems: "center", gap: "5px" }}>
                      <Flex as={"i"}>{i.icon}</Flex>
                      <Box as={"b"} sx={styles.link}>
                        {i.text}
                        <br />
                      </Box>
                    </Flex>
                    <Link
                      href="https://goo.gl/maps/VLirVh2wrVm8BLk58"
                      target={"_blank"}
                      sx={styles.link}
                    >
                      Gedung Hastacentra Lt. 2
                      <br />
                      Jl. Raya Tj. Barat No. 07, 12510
                    </Link>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Flex>
      </Box>
      <Divider sx={{ my: 0, color: "#dae8f9" }} />
      <FooterChild />
    </Container>
  </Box>
);

const styles = {
  logo: {
    pb: "1rem !important",
    width: "100%",
    maxWidth: "10rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "all 0.3s ease-in-out",
  },
  link: {
    color: "#8c98a4 !important",
    "&:hover": {
      color: "#fff",
    },
  },
};

export default Footer;
