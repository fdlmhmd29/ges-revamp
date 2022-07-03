import { Box, Container, Flex, Grid, NavLink, Text } from "theme-ui";
import Link from "next/link";
import Image from "next/image";

// Yellow
import mainLogo from "../../public/img/logo.png";
import klhk from "../../public/klhk-logo.png";

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

            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <Box as={"div"} sx={{ maxWidth: "50%" }}>
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
                <Text sx={{ textAlign: "left" }} as={"p"}>
                  Bekerjasama dengan Kementerian Lingkungan Hidup dan Kehutanan
                  Republik Indonesia, Greenfield Environment Solution akan
                  membantu Anda untuk menerbitkan izin Lingkungan suatu bangunan
                  dengan mudah dan praktis.
                </Text>
              </Box>
              <Box as={"li"} sx={{ maxWidth: "50%" }}>
                <Flex as={"div"} sx={{ flexDirection: "column !important" }}>
                  <Image
                    src={klhk}
                    alt="Logo Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia"
                  />
                </Flex>
              </Box>
            </Flex>
            {/* End of Nav Links */}
          </Box>
          {/* Nav Links */}
          <Box as={"div"} sx={{ textAlign: "left" }}>
            <Box as={"span"}>Layanan</Box>
            <Box as={"ul"}>
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
    marginRight: "1.5rem",

    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "all 0.3s ease-in-out",
  },
};

export default Footer;
