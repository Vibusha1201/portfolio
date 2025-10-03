// constants/index.jsx

export const myProjects = [
  {
    id: 1,
    title: "AI-Powered Cyber Threat Detection for Smart Cities",
    description:
      "An AI-driven system to detect and mitigate cyber threats in IoT-enabled smart city networks.",
    subDescription: [
      "Applied machine learning for anomaly detection and real-time threat prediction.",
      "Built data pipelines for IoT traffic monitoring and automated alerting.",
      "Improved precision by reducing false positives and highlighting suspicious patterns.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/accessories.jpg", // add this image to your assets
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Machine Learning", path: "/assets/logos/ml.svg" },
      { id: 3, name: "Wireshark", path: "/assets/logos/wireshark.svg" },
      { id: 4, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
  {
    id: 2,
    title: "Underground Cable Fault Detection System",
    description:
      "A microcontroller-based system that detects and locates underground cable faults.",
    subDescription: [
      "Implemented resistance-based distance calculation with real-time fault display.",
      "Designed a reliable embedded solution to improve infrastructure fault diagnosis.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg", // add this image to your assets
    tags: [
      { id: 1, name: "C", path: "/assets/logos/c.svg" },
      { id: 2, name: "Arduino", path: "/assets/logos/arduino.svg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/vibusha12012006/",
    icon: "/assets/socials/linkedIn.svg",
  },
];

export const experiences = [
  {
    title: "Cybersecurity Intern",
    job: "CodeAlpha",
    date: "2024",
    contents: [
      "Hands-on penetration testing and vulnerability assessment for web and network assets.",
      "Worked on threat detection, ethical hacking, and secure system design.",
      "Strengthened skills in web application testing, network security, and incident response.",
    ],
  },
  {
    title: "Cybersecurity Intern",
    job: "Alfido Tech",
    date: "2024",
    contents: [
      "Conducted VAPT on applications and networks; documented findings with PoCs.",
      "Supported security audits, threat analysis, and incident handling processes.",
      "Used industry tools (Nmap, Burp Suite, Metasploit, Nessus, Wireshark) in daily workflows.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
