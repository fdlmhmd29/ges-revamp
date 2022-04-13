import { Link } from "theme-ui";

function MoreLink(props) {
  return (
    <Link as={"a"} href={props.href} variant={props.variant}>
      {props.text}
    </Link>
  );
}

export default MoreLink;
