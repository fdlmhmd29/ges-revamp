import SectionHeader from "../components/SectionHeader";
import { Box, Container, Grid } from "theme-ui";

//Yellow
import Card from "../components/Card";
import icon1 from "../../public/assets/svg/icon1.svg";
import icon2 from "../../public/assets/svg/icon2.svg";
import icon3 from "../../public/assets/svg/icon3.svg";
import icon4 from "../../public/assets/svg/icon4.svg";
import icon5 from "../../public/assets/svg/icon5.svg";
import icon6 from "../../public/assets/svg/icon6.svg";
import icon7 from "../../public/assets/svg/icon7.svg";
import icon8 from "../../public/assets/svg/icon8.svg";
import icon9 from "../../public/assets/svg/icon9.svg";
import icon10 from "../../public/assets/svg/icon10.svg";

const data = [
  {
    id: 1,
    icon: icon1,
    href: "/",
    heading: "Penyusunan Laporan Monitoring",
    text: "Laporan Monitoring Kegiatan Pengelolaan dan Pemantauan Lingkungan",
    link: "/",
  },
  {
    id: 2,
    icon: icon2,
    href: "/",
    heading: "Perencanaan dan Pembangunan IPAL",
    text: "Perencanaan dan Pembangunan Installasi guna Pembuangan Air Limbah",
    link: "/",
  },
  {
    id: 3,
    icon: icon3,
    href: "/",
    heading: "Persetujuan Teknis Emisi Gas Buang",
    text: "Persetujuan Teknis Pengelolaan lingkungan untuk Emisi Gas Buang",
    link: "/",
  },
  {
    id: 4,
    icon: icon4,
    href: "/",
    heading: "Persetujuan Teknis Pengelolaan B3",
    text: "Persetujuan teknis pengelolaan, pemanfaatan atau pengarahan limbah B3",
    link: "/",
  },
  {
    id: 5,
    icon: icon5,
    href: "/",
    heading: "Persetujuan Teknis Pemanfaatan B3",
    text: "Persetujuan teknis pembuangan atau pemanfaatan serta pengolahan limbah B3",
    link: "/",
  },
  {
    id: 6,
    icon: icon6,
    href: "/",
    heading: "Rencana Pengelolaan dan Pemantauan Rinci",
    text: "Rencana Pengelolaan dan Pemantauan Lingkungan Hidup (RKL-RPL) Rinci",
    link: "/",
  },
  {
    id: 7,
    icon: icon7,
    href: "/",
    heading: "Studi Analisa Mengenai Dampak Lingkungan",
    text: "Kajian mengenai dampak besar dari kegiatan suatu usaha terhadap lingkungan hidup",
    link: "/",
  },
  {
    id: 8,
    icon: icon8,
    href: "/",
    heading: "Studi Dokumen Evaluasi Lingkungan Hidup",
    text: "Kajian Dokumen Evaluasi Dampak Lingkungan Hidup bagi Kegiatan Usaha yang Sudah Berjalan",
    link: "/",
  },
  {
    id: 9,
    icon: icon9,
    href: "/",
    heading: "Studi Dokumen Pengelolaan Lingkungan Hidup",
    text: "Bagi kegiatan usaha yang sudah atau bahkan belum memiliki izin usaha dan UKL-UPL",
    link: "/",
  },
  {
    id: 10,
    icon: icon10,
    href: "/",
    heading: "Studi Upaya Pengelolaan dan Pemantauan",
    text: "Bagi usaha dan/ atau kegiatan yang tidak berdampak penting terhadap lingkungan hidup",
    link: "/",
  },
];

const Services = () => (
  <Container as={"section"} id={"service-section"} variant={"section.primary"}>
    <Box as={"div"} sx={{}}>
      <SectionHeader
        title={"Jasa Perizinan dan Konsultasi Lingkungan"}
        slogan={
          "Layanan terlengkap dan terbaik untuk segala kebutuhan bisnis dalam menerbitkan izin Lingkungan suatu bangunan dengan mudah dan praktis."
        }
      />
      <Grid gap={3} columns={[2, null, 4]} as={"div"} id={"card-container"}>
        {data.map((item) => (
          <Card
            key={item.id}
            icon={item.icon}
            href={item.href}
            heading={item.heading}
            text={item.text}
            link={item.link}
          />
        ))}
      </Grid>
    </Box>
  </Container>
);

export default Services;
