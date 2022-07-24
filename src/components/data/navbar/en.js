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
        title: "Technical Approval",
        link: "/services/technical-approval",
        submenu: [
          {
            title: "Exhaust Gas Emissions",
            link: "/services/technical-approval/exhaust-gas-emissions",
          },
          {
            title: "Hazardous Waste Management",
            link: "/services/technical-approval/hazardous-waste-management",
          },
          {
            title: "Hazardous Waste Utilization",
            link: "/services/technical-approval/hazardous-waste-utilization",
          },
        ],
      },
      {
        title: "Study",
        link: "/services/study",
        submenu: [
          {
            title: "Environmental Impact Analysis",
            link: "/services/study/environmental-impact-analysis",
          },
          {
            title: "Environmental Evaluation Document",
            link: "/services/study/environmental-evaluation-document",
          },
          {
            title: "Environmental Management Document",
            link: "/services/study/environmental-management-document",
          },
          {
            title: "Environmental Management & Monitoring Efforts",
            link: "/services/study/environmental-management-monitoring-efforts",
          },
        ],
      },
      {
        title: "Monitoring",
        link: "/services/monitoring",
      },
      {
        title: "Installation",
        link: "/services/installation",
      },
      {
        title: "RKL-RPL",
        link: "/services/environmental-management-monitoring-plan",
      },
    ],
  },
  {
    title: "Company",
    submenu: [
      {
        title: "About Us",
        link: "/company/about-us",
      },
      {
        title: "Cotact Us",
        link: "/company/contact-us",
      },
      {
        title: "Our Portfolio",
        link: "/company/our-portfolio",
      },
      {
        title: "Our Client",
        link: "/company/our-client",
      },
    ],
  },
];

export default enItems;
