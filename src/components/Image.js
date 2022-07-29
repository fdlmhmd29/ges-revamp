import Image from "next/image";

//Yellow

const Images = ({ src }) => {
  return <Image src={src} alt={"Studi AMDAL"} loading={"lazy"} quality={100} />;
};

export default Images;
