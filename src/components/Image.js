import { Box } from "theme-ui";
import Image from "next/image";

//Yellow
import section1 from "../../public/assets/svg/section1.svg";

const ShowcaseImage = () => {
  return (
    <Box
      className={"showcase__image"}
      as={"div"}
      sx={{ display: "flex", justifyContent: "flex-end", zIndex: "-1" }}
    >
      <Image
        src={section1}
        alt={"Studi AMDAL"}
        loading={"lazy"}
        quality={100}
      />
    </Box>
  );
};

export default ShowcaseImage;
