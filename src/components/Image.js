import { Box } from "theme-ui";
import Image from "next/image";

//Yellow

const Images = ({ src }) => {
  return (
    <Box sx={{ textAlign: "center" }} as={"div"}>
      <Image src={src} alt={"Studi AMDAL"} loading={"lazy"} quality={100} />
    </Box>
  );
};

export default Images;
