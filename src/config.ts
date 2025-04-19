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
  email: "contact.yuting@gmail.com",
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
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:contact.yuting@gmail.com",
    icon: "mdi:email",
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
    "I am a high school student from Singapore.",
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
My name is Yuting and I am a high school student from Singapore.
<br/><br/>
I used to code a lot but I've recently shifted my attention to other interests. Nowadays, I spend most of time studying, cubing and listening to music. <br/><br/>
On this website, I write blog posts about my experiences and sometimes other things whenever I feel like it. `, // Markdown is supported
    image_l: {
      url: "/clocktower.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/sg-flag.jpg",
      alt: "Right Picture",
    },
  },
  education: {
    description: `Here are the schools I have attended or am currently attending.`, // Markdown is supported
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
    description: `Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: [
      {
        title: "Instagram",
        url: "https://instagram.com/yuting_ig",
        icon: "mdi:instagram",
        external: true,
      },
      {
        title: "Twitter",
        url: "https://twitter.com/wyuting2011",
        icon: "mdi:twitter",
        external: true,
      },
      {
        title: "GitHub",
        url: "https://github.com/wyuting0",
        icon: "mdi:github",
        external: true,
      },
      {
        title: "Mail",
        url: "mailto:contact.yuting@gmail.com",
        icon: "mdi:email",
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
