import { Link } from "theme-ui";

function MoreLink(props) {
  return (
    <Link as={"a"} href={props.href} variant={"more"}>
      {props.children}
    </Link>
  );
}

export default MoreLink;
