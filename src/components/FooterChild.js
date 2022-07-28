import { Box, Container, Flex, Link, NavLink } from "theme-ui";
import { UilAsterisk, UilLinkedin } from "@iconscout/react-unicons";

const data = [
  {
    id: 1,
    text: "Privacy & Policy",
    link: "privacy-policy",
  },
  {
    id: 2,
    text: "Terms & Conditions",
    link: "terms-conditions",
  },
  {
    id: 3,
    text: "About Us",
    link: "about",
  },
  {
    id: 4,
    text: "Contact Us",
    link: "contact",
  },
  {
    id: 5,
    text: "What's New",
    link: "new",
  },
];

const FooterChild = () => (
  <Box
    sx={{
      py: "2rem !important",
    }}
  >
    <Container>
      <Flex
        as={"div"}
        sx={{ flexWrap: "wrap", justifyContent: "space-between" }}
      >
        <Box>
          {/* Nav Link */}
          <Flex as={"ul"}>
            {data.map((item, index) => (
              <Flex
                as={"li"}
                key={index}
                sx={{ alignItems: "center", gap: "10px", flexDirection: "row" }}
              >
                <Link href={`/${item.link}`} passHref>
                  <NavLink
                    sx={{ fontWeight: "400", fontSize: "12px" }}
                    id={`nav-${item.text}`}
                  >
                    {item.text}
                  </NavLink>
                </Link>
                <Flex
                  sx={{
                    alignItems: "center",
                    mr: "10px",
                  }}
                >
                  <UilAsterisk size="10" color="#8c98a4" />
                </Flex>
              </Flex>
            ))}
          </Flex>
          {/* Nav Link end */}
        </Box>
        <Box>
          <Flex as={"ul"}>
            <Box as={"li"}>
              <Link
                href="https://www.linkedin.com/company/pt-greenfield-environment-solution"
                passHref
              >
                <NavLink>
                  <UilLinkedin size="20" color="#8c98a4" />
                </NavLink>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Container>
  </Box>
);

export default FooterChild;
