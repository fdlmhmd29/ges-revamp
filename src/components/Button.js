import { Button as Btn } from "theme-ui";

const Button = ({ variant, text, id }) => (
  <Btn id={id} variant={variant}>
    {text}
  </Btn>
);

export default Button;
