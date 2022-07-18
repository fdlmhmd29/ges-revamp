import { Link } from "theme-ui";

function MoreLink({ href = "", variant = "", text = "" }) {
  return (
    <Link as={"a"} href={href} variant={variant}>
      {text}
    </Link>
  );
}

export default MoreLink;
