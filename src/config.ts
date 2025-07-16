import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Yuting",
  logo: "/logo.png",
  email: "wyuting2011@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/wyuting0",
    icon: "fa-brands:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:wyuting2011@gmail.com",
    icon: "fa-solid:envelope",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Yuting",
    description:
      "High school student from Singapore.",
    image: identity.logo,
  },
  role: "Student",
  description:
    "Hello there! I am Yuting.",
  socialLinks: socialLinks,
  links: [
    {
      title: "About me",
      url: "/about",
    },
    {
      title: "My projects",
      url: "/projects",
    },
    {
      title: "My blog",
      url: "/blog",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Yuting",
    description:
      "Full time student from Germany who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about me.",
  about: {
    description: `
Hi! My name is Yuting and I am a high school student from Singapore.
<br/><br/>
I used to code a lot but I've recently shifted my attention to other interests. Nowadays, I spend most of time studying, cubing and listening to music. <br/><br/>
On this website, I write blog posts about my experiences and sometimes other things whenever I feel like it. `, // Markdown is supported
    image_l: {
      url: "/kallang.jpeg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/sg-flag.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `Here are the schools I have attended or am currently attending:`, // Markdown is supported
    items: [
      {
        title: "Hwa Chong Institution",
        company: {
          name: "Secondary school",
          image: "/hci.png",
          url: "https://www.hci.edu.sg/",
        },
        date: "2024 - Present",
      },
      {
        title: "Anglo-Chinese School (Primary)",
        company: {
          name: "Primary school (P4-P6)",
          image: "/acsp.png",
          url: "https://www.acspri.moe.edu.sg/",
        },
        date: "2021 - 2023",
      },
      {
        title: "South View Primary School",
        company: {
          name: "Primary school (P1-P3)",
          image: "/svps.png",
          url: "https://www.southviewpri.moe.edu.sg/",
        },
        date: "2018 - 2020",
      },
    ],
  },
  connect: {
    description: `Reach out or connect with me via the platforms below:`, // Markdown is supported
    links: [
      {
        title: "Instagram",
        url: "https://instagram.com/yuting_ig",
        icon: "fa-brands:instagram",
        external: true,
      },
      {
        title: "YouTube",
        url: "https://www.youtube.com/@yuting_yt",
        icon: "fa-brands:youtube",
        external: true,
      },
      {
        title: "GitHub",
        url: "https://github.com/wyuting0",
        icon: "fa-brands:github",
        external: true,
      },
      {
        title: "Mail",
        url: "mailto:wyuting2011@gmail.com",
        icon: "fa-solid:envelope",
      },
    ],
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Yuting",
    description: "Stuff I made.",
    image: identity.logo,
  },
  subtitle: "Stuff I made.",
  projects: [
    {
      title: "Personal Website",
      description: "My personal website and blog which you are looking at right now.",
      image: "/website.png",
      year: "2024",
      url: "https://github.com/wyuting0/wyuting0.github.io",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Yuting",
    description: "Stories and sometimes other things.",
    image: identity.logo,
  },
  subtitle: "Nothing here yet.",
};
