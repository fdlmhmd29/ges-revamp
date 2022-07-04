import { Box, Container, Flex, Grid, NavLink, Text } from "theme-ui";
import Link from "next/link";
import Image from "next/image";

// Yellow
import mainLogo from "../../public/img/logo.png";
import klhk from "../../public/klhk-logo.png";
import lpjp from "../../public/img/lpjp.png";

const Footer = (props) => (
  <Box
    as={"footer"}
    sx={{
      py: "5rem !important",
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
      <Box as={"div"}>
        <Flex
          as={"div"}
          sx={{
            flexDirection: "row",
            gap: "15px",
            justifyContent: "space-between",
            alignItems: "flex-start",
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

            {/* Nav Links */}
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
                  Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan
                  Republik Indonesia dan memiliki sertifikat LPJP AMDAL,
                  Greenfield Environment Solution akan membantu Anda untuk
                  menerbitkan izin Lingkungan suatu bangunan dengan mudah dan
                  praktis.
                </Text>
              </Box>
              <Box as={"li"} sx={{ width: "100%", maxWidth: "15rem" }}>
                <Flex as={"div"} sx={{ flexDirection: "column !important" }}>
                  <Image
                    src={lpjp}
                    alt="Logo Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia"
                  />
                </Flex>
              </Box>
            </Flex>
            {/* End of Nav Links */}
          </Box>
          {/* Nav Links */}
          <Box as={"div"} sx={{ textAlign: "left" }}>
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
              Layanan
            </Box>
            <Box
              as={"ul"}
              sx={{
                fontSize: [0, null, "0.85rem"],
              }}
            >
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Persetujuan Teknis</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Studi</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Monitoring</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Installasi</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>RKL-RPL</a>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box as={"div"} sx={{ textAlign: "left" }}>
            <Box as={"span"}>Perusahaan</Box>
            <Box as={"ul"}>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Tentang Kami</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Kontak</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Portofolio</a>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box as={"div"} sx={{ textAlign: "left" }}>
            <Box as={"span"}>Hubungi Kami</Box>
            <Box as={"ul"}>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Tentang Kami</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Kontak</a>
                </Link>
              </Box>
              <Box as={"li"}>
                <Link href={"/"}>
                  <a>Portofolio</a>
                </Link>
              </Box>
            </Box>
          </Box>
        </Flex>
      </Box>
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
};

export default Footer;
