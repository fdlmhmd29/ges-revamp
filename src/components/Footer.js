import { Box, Container, Flex, Text, Link, Divider } from "theme-ui";

// Yellow
import { NavLink, FooterChild, Logo } from "../lib";
import { mainLogo, klhk } from "../lib/image";
import { idLayanan, idPerusahaan, idHubungiKami, idAlamat } from "../lib/data";

const Header = ({ text = "" }) => {
  return (
    <Box as={"div"} sx={styles.header}>
      {text}
    </Box>
  );
};

const HeaderChild = ({ data }) => {
  return (
    <Box as={"ul"}>
      {data.map((i) => (
        <Box key={i.id} as={"li"} sx={{ py: "8px", fontSize: "14px" }}>
          <NavLink href={i.links}>{i.text}</NavLink>
        </Box>
      ))}
    </Box>
  );
};

const Footer = () => (
  <Box as={"footer"} id={"footer"} sx={styles.footer}>
    <Container id={"footer-container"}>
      <Flex as={"div"} sx={styles.footerContent}>
        <Box as={"div"} sx={{ width: "100%", maxWidth: "20rem" }}>
          <Flex as={"ul"} sx={{ flexDirection: "column" }}>
            <Box as={"li"} id="footer-logo__main" sx={styles.footerLogo}>
              <Logo
                href="/"
                logo={mainLogo}
                alt={"Logo Perusahaan PT Greenfield Environment Solution"}
              />
            </Box>
            <Box as={"li"}>
              <Text sx={styles.footerText} as={"p"}>
                PT Greenfield Environment Solution Bekerjasama dengan
                Kementerian Lingkungan Hidup dan Kehutanan Republik Indonesia
              </Text>
            </Box>
            <Box as={"li"} id="footer-logo__klhk" sx={styles.footerLogo}>
              <Logo
                href="https://www.menlhk.go.id"
                logo={klhk}
                alt={"Logo Perusahaan PT Greenfield Environment Solution"}
              />
            </Box>
          </Flex>
        </Box>

        {/* Pelayanan */}
        <Box>
          <Header text={"Layanan"} />
          <HeaderChild data={idLayanan} />
        </Box>
        {/* Perusahaan */}
        <Box>
          <Header text={"Perusahaan"} />
          <HeaderChild data={idPerusahaan} />
        </Box>
        {/* Hubungi Kami */}
        <Box>
          <Header text={"Hubungi Kami"} />
          <Box
            as={"ul"}
            sx={{
              fontSize: [0, null, "0.85rem"],
            }}
          >
            {idHubungiKami.map((i) => (
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
                    <NavLink href={`mailto:${i.link}`}>{i.link}</NavLink>
                  ) : null}
                  {i.tel ? (
                    <NavLink sx={styles.link} href={`tel:${i.tel}`}>
                      {i.tel}
                    </NavLink>
                  ) : null}
                  {i.detail}
                </Box>
              </Box>
            ))}
            {idAlamat.map((i) => (
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
                  <NavLink href="https://goo.gl/maps/VLirVh2wrVm8BLk58">
                    Gedung Hastacentra Lt. 2
                    <br />
                    Jl. Raya Tj. Barat No. 07, 12510
                  </NavLink>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Flex>

      <Divider sx={{ my: 0, color: "#ddd" }} />

      <FooterChild />
    </Container>
    <Box sx={{ backgroundColor: "#f4b313" }}>
      <Container>
        <Flex
          as={"div"}
          sx={{
            py: "1rem !important",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text as={"p"} sx={styles.footerChildText}>
            &copy; Greenfield Environment Solution. All rights reserved (
            {new Date().getFullYear()})
          </Text>
          <Text as={"p"} sx={styles.footerChildText}>
            Dibuat dengan ❤️ oleh{" "}
            <Link
              sx={{
                color: "black",
                fontWeight: "Bold",
                transition: "ease-in 0.2s",
                "&:hover": { color: "#e81224" },
              }}
              href="https://github.com/fdlmhmd29"
            >
              fdlmhmd29
            </Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  </Box>
);

const styles = {
  footer: {
    background: "rgb(244,240,255)",
    background:
      "-moz-linear-gradient(180deg,  rgba(255,255,255,1) 0%, rgba(244,240,255,1) 100%)",
    background:
      "-webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,240,255,1) 100%)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(244,240,255,1) 100%)",
  },
  footerContent: {
    justifyContent: "space-between !important",
    flexWrap: "wrap",
    py: "5rem !important",
  },
  header: {
    textTransform: "uppercase",
    fontSize: "1rem",
    fontWeight: 600,
    pb: "1rem",
    lineHeight: 1.4,
    color: "#1e2022",
  },
  footerLogo: {
    pb: "1rem !important",
    width: "100%",
    maxWidth: "10rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    transition: "all 0.3s ease-in-out",
  },
  footerText: {
    fontSize: [0, null, "14px"],
    color: "#8c98a4 !important",
    mb: "1rem",
  },
  footerChildText: {
    color: "#fff",
    fontSize: "12px",
  },
  link: {
    color: "#8c98a4 !important",
  },
};

export default Footer;
