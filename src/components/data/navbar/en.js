const enItems = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
    link: "/posts",
  },
  {
    title: "Services",
    submenu: [
      {
        title: "Persetujuan Teknis",
        link: "/persetujuan-teknis",
        submenu: [
          {
            title: "Emisi Gas Buang",
            link: "/emisi-gas-buang",
          },
          {
            title: "Pengelolaan Limbah B3",
            link: "/pengelolaan-limbah-b3",
          },
          {
            title: "Pemanfaatan Limbah B3",
            link: "/pemanfaatan-limbah-b3",
          },
        ],
      },
      {
        title: "Studi",
        link: "/studi",
        submenu: [
          {
            title: "Studi AMDAL",
            link: "/studi-amdal",
          },
          {
            title: "Studi DELH",
            link: "/studi-delh",
          },
          {
            title: "Studi DPLH",
            link: "/studi-dplh",
          },
          {
            title: "Studi Upaya Pengelolaan dan Pemantauan",
            link: "/studi-upaya-pengelolaan-dan-pemantauan",
          },
        ],
      },
      {
        title: "Monitoring",
        link: "/monitoring",
      },
      {
        title: "Installasi",
        link: "/instalasi",
      },
      {
        title: "RKL-RPL",
        link: "/rkl-rpl",
      },
    ],
  },
  {
    title: "Company",
    submenu: [
      {
        title: "Tentang Kami",
        link: "/about",
      },
      {
        title: "Kontak",
        link: "/kontak",
      },
      {
        title: "Portofolio",
        link: "/portofolio",
      },
      {
        title: "Klien",
        link: "/klien",
      },
      {
        title: "keunggulan Kami",
        link: "/keunggulan-kami",
      },
    ],
  },
];

export default enItems;
