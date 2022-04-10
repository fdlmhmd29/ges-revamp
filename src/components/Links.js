import { Box } from "theme-ui"
import { useRouter } from "next/router"
import { NavLink } from "../lib"

const data = [
  {
    id: 1,
    title: "Blog",
    path: "/",
    includes: "/blog",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
]

const Links = (props) => {
  const router = useRouter()

  return (
    <Box id="nav-links" as={"div"} sx={styles.links}>
      <Box id="nav-links--ul" as={"ul"} sx={styles.ul}>
        {data.map((item) => (
          <li key={item.id}>
            <NavLink
              href={item.path}
              active={
                router.pathname === item.path ||
                router.pathname.includes(item.includes)
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </Box>
    </Box>
  )
}

const styles = {
  links: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
  },

  ul: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}

export default Links
