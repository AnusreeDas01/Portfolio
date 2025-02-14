export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My Tech Stack",
    description: "Constantly trying to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-30",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Very flexible with any time zone",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Emphasizing client collaboration with transparent communication",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    title: "Designing and implementing AI-driven solutions for diverse applications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Trying to master Prompt Engineering",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a Project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [

  //id:1
  {
    quote:
      "Becoming a Full-Stack Web Developer means mastering both frontend and backend technologies, including HTML, CSS, JavaScript, React, Node.js, databases, and REST APIs. I have learned how to build dynamic, user-friendly applications, how to handle server-side logic, and how to manage databases, making a versatile developer capable of creating complete web solutions from start to finish.",
    name: "Become a Full-Stack Web Developer",
    title: "LinkedIn Learning",
    img: "/linkedin.png",
  },

  //id:2
  {
    quote:
      "Earned a certification in Big Data fundamentals, covering key concepts such as data processing, storage, and analytics using Hadoop, HDFS, MapReduce, and NoSQL databases. Developed a strong understanding of data pipelines, distributed computing, and real-world applications of big data technologies for handling large-scale datasets efficiently.",
    name: "Big Data 101",
    title: "Infosys Springboard",
    img: "/infosys.png",
  },

  //id:3
  {
    quote:
      "Covered key concepts such as network security, cryptography, threat analysis, and risk management. Developed a strong foundation in cybersecurity principles, attack prevention strategies, and security best practices. Gained hands-on experience with security tools and techniques to protect digital systems and sensitive data.",
    name: "Introduction to Cyber Security",
    title: "Infosys Springboard",
    img: "/infosys.png",
  },

  //id:4
  {
    quote:
      "Earned a certification in Programming, Data Structures, and Algorithms using Python, covering fundamental programming concepts, recursion, sorting, searching, dynamic programming, and data structures like stacks, queues, and trees. Gained hands-on experience in algorithm optimization and problem-solving, enhancing proficiency in Python for efficient and scalable software development.",
    name: "Programming, Data Structures and Algorithms Using Python",
    title: "NPTEL - National Programme on Technology Enhanced Learning",
    img: "/nptel.png",
  },

  //id:5
  {
    quote:
      "It demonstrated proficiency in C programming, algorithmic thinking, and logical problem-solving. Covered key concepts such as data types, control structures, functions, arrays, pointers, and file handling. Strengthened debugging skills and the ability to write efficient, structured, and optimized C programs.",
    name: "Problem Solving Through Programming in C",
    title: "NPTEL - National Programme on Technology Enhanced Learning",
    img: "/nptel.png",
  },

  //id:6
  {
    quote:
      "Covered data manipulation, visualization, statistical analysis, and machine learning using libraries like Pandas, NumPy, Matplotlib, and Scikit-learn. Demonstrated proficiency in handling large datasets, building predictive models, and applying data-driven insights to real-world problems.",
    name: "Python for Data Science",
    title: "NPTEL - National Programme on Technology Enhanced Learning",
    img: "/nptel.png",
  },

  //id:7
  {
    quote:
      "Earned a Software Testing certificate, demonstrating proficiency in manual and automated testing methodologies, test case design, bug tracking, and quality assurance. Gained hands-on experience with tools like Selenium, JIRA, and TestNG, ensuring software reliability and performance. Skilled in identifying defects, optimizing test strategies, and improving software quality through systematic testing processes.",
    name: "Software Testing",
    title: "NPTEL - National Programme on Technology Enhanced Learning",
    img: "/nptel.png",
  },

  //id:8
  {
    quote:
      "Learned proficiency in algorithmic problem-solving, complexity analysis, and data structures. Gained expertise in designing efficient algorithms, optimizing performance, and applying theoretical concepts to real-world applications. Developed strong analytical and computational thinking skills essential for software development, competitive programming, and technical problem-solving.",
    name: "Fundamental Algorithms: Design and Analysis",
    title: "NPTEL - National Programme on Technology Enhanced Learning",
    img: "/nptel.png",
  },

  //id:9
  {
    quote:
      "The Network Fundamentals Certificate validates knowledge of core networking concepts, including protocols, IP addressing, subnetting, routing, and network security. It demonstrates proficiency in configuring and troubleshooting network devices, ensuring secure and efficient communication. This certification is essential for roles in IT support, network administration, and cybersecurity.",
    name: "Network Fundamentals",
    title: "Infosys Springboard",
    img: "/infosys.png",
  },


];

export const companies = [
  {
    id: 1,
    name: "NextJS",
    img: "/next.svg",
    // nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "TailwindCSS",
    img: "/tail.svg",
    // nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    img: "/ts.svg",
    // nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "React",
    img: "/re.svg",
    // nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "FramerMotion",
    img: "/fm.svg",
    // nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted to build dynamic web platform with React.js, improving user interactivity and experience.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev",
    desc: "Designed and developed a cross-platform mobile app for iOS and Android using React Native, Dart, and Flutter, ensuring seamless performance and user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "personal Web and App Dev Project",
    desc: "Built multiple projects using Next.js and React.js, gaining extensive hands-on experience through college assignments.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Practicing Prompt Engineering",
    desc: "Exploring and refining skills in Prompt Engineering to craft effective AI interactions, optimize responses, and enhance user experiences through strategic prompts.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/AnusreeDas01",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "#home",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/anusree-das-01/",
  },
];