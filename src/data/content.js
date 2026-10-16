// ALL text on the site lives here. Edit this file to change content.
// Lower priority number = shown earlier. Items marked TODO owner still need your info.

export const profile = {
  name: 'Swapnil Rob',
  photo: '/profile.jpg',
  initials: 'SR',
  title: 'CS Undergraduate, AI Researcher, Full-Stack Developer and Tech Enthusiast',
  org: 'BRAC University',
  degreeLine: 'BSc in Computer Science & Engineering',
  location: 'Dhaka, Bangladesh',
  email: 'swapnilrob.27@gmail.com',
  github: 'https://github.com/swapnilrob',
  linkedin: 'https://linkedin.com/in/swapnilrob',
  cvUrl: 'https://drive.google.com/file/d/1BByVJApqnrOwZHWGEZxMQEWzwskkOchf/view?usp=sharing',          //  Google Drive URL of CV (publicly viewable)
  bio: "I'm a Computer Science & Engineering undergraduate at BRAC University working on a single question: when can we trust what an AI system tells us? My thesis checks radiology reports claim by claim against the chest X-ray itself, and my second line of research makes retrieval-augmented generation for cyber threat intelligence track where each fact came from and when it stopped being true. Alongside research I build full-stack products and hardware.",
  interests: ['AI Reliability', 'Hallucination Detection', 'Multimodal Reasoning', 'Retrieval-Augmented Generation', 'Large Language Models', 'Cyber Threat Intelligence', 'Trustworthy AI'],
};

export const education = [
  { id: 'bracu', priority: 1, name: 'BRAC University', initials: 'BU', logo: '/logos/bracu.png',
    degree: 'BSc in Computer Science & Engineering', place: 'Dhaka', period: '2022 – Expected Jan 2027',
    points: [
      'Thesis: LLM-Guided Multimodal Radiology Report Consistency and Hallucination Detection',
      'Conference paper research on provenance-aware RAG for cyber threat intelligence',
    ] },
  { id: 'dcc', priority: 2, name: 'Dhaka City College', initials: 'DCC', logo: '/logos/dcc.png',
    degree: 'Higher Secondary Certificate (HSC), Science', place: 'Dhaka', period: '2019 – 2021',
    points: ['GPA 5.00 out of 5.00'] },
  { id: 'akhs', priority: 3, name: 'A.K. High School', initials: 'AK', logo: '/logos/ak-high-school.png',
    degree: 'Secondary School Certificate (SSC), Science', place: 'Dhaka', period: '2019',
    points: ['GPA 5.00 out of 5.00'] },
];

export const research = [
  { id: 'thesis', priority: 1, title: 'LLM-Guided Radiology Hallucination Detection',
    role: 'Undergraduate Thesis', period: '2026 – Present', status: 'Ongoing',
    summary: 'A 6-stage AI pipeline that fact-checks radiology reports against chest X-rays, catches hallucinated or contradictory findings, scores each report’s reliability and generates a corrected version. Built as a full platform with encryption, two-factor auth and role-based access for users, clinicians and administrators.',
    tags: ['Multimodal LLMs', 'Claim verification', 'FastAPI', 'React', 'Express', 'AES-256', 'JWT + TOTP'],
    links: { github: null, paper: null } },
  { id: 'cti', priority: 2, title: 'Provenance-Aware RAG for Cyber Threat Intelligence',
    role: 'Conference paper research', period: '2026 – Present', status: 'Pilot validated',
    summary: 'Researching how RAG systems can track where threat intelligence came from, when it was valid, and what to do when sources conflict, making AI-generated cyber threat analysis more trustworthy. Pilot validation is complete and the direction is approved for conference submission.',
    tags: ['RAG', 'Temporal reasoning', 'Provenance', 'Conflict resolution', 'CTI'],
    links: { github: null, paper: null } },
];

export const publications = [
  { id: 'bracu-src-2026', priority: 1,
    title: 'LLM-Guided Multimodal Framework for Radiology Report Consistency and Hallucination Detection',
    authors: ['Swapnil Rob', 'Nafisa Hasan', 'Abdullah Al Noman', 'Md. Shakib-Al-Hossain'],
    venue: 'Extended abstract, BRAC University Silver Jubilee Research Conference, Dhaka',
    year: '2026',
    status: 'Accepted · Poster',
    url: null,
    abstract: '/papers/bracu-src-2026-abstract.pdf',   // TODO : add the final 1-page abstract
    poster: '/papers/bracu-src-2026-poster.jpg' },     // TODO : add the A1 poster (.jpg or .pdf)
];

export const experience = [
  { id: 'alter', priority: 1, org: 'BRACU ALTER', initials: 'AL', logo: '/logos/bracu-alter.png',
    role: 'Contributor, Electronics Team', period: 'Apr 2023 – Nov 2024',
    context: 'Rescue robotics team at LaSSET (Laboratory of Space Systems Engineering & Technology), BSRM School of Engineering, BRAC University. Builds disaster-response rovers.',
    points: [
      'Worked on electronics projects involving circuit design and microprocessor-based systems',
      'Contributed to the team’s technical documentation and research',
    ],
    tags: ['Circuit design', 'Microcontrollers', 'Rescue robotics'],
    url: null },
];

export const projects = [
  { id: 'kikhabo', priority: 1, title: 'Ki Khabo', subtitle: 'AI-Powered Smart Food Platform', year: '2026',
    context: 'CSE 471 · System Analysis and Design · Team of 4',
    summary: 'A smart food discovery platform for Dhaka that helps people find restaurants, get AI nutrition advice, recognise dishes from photos and plan meals within their budget and macros. Ships with Stripe payments, loyalty rewards and 3 user roles across 15 data models.',
    myPart: 'Built the restaurant and dish profiles, the smart meal planner, the restaurant dashboard and email notifications with NodeMailer.',
    tags: ['React 19', 'Express 5', 'MongoDB Atlas', 'Groq', 'Stripe', 'Google Maps'],
    image: null,
    links: { github: 'https://github.com/swapnilrob/ki-khabo', demo: 'https://ki-khabo-pi.vercel.app', report: null } },

      { id: 'libbot', priority: 2, title: 'LibBot', subtitle: 'Autonomous Library Book Retrieval Robot', year: '2026',
    context: 'CSE 461 · Introduction to Robotics · Team of 4',
    summary: 'An autonomous robot that follows a line through a miniature library, counts junctions to reach the right aisle, confirms the shelf with RFID, picks the book with a 3D-printed 4-servo arm and delivers it to a collection point. It stops and sounds a buzzer when an obstacle blocks its path.',
    myPart: 'Led navigation and sensor integration: calibrated the 5-channel IR array for line following, built ultrasonic obstacle detection, helped develop the movement logic and tuned the robot’s sensor-based driving through testing.',
    tags: ['Arduino Uno', 'RFID RC522', 'IR sensor array', 'HC-SR04', 'L298N', '4-servo arm'],
    image: '/projects/libbot.jpg',
    imageCaption: 'The finished robot',
    imagePosition: 'center 25%',   // which part of the photo the card shows (top of photo = arm)
    moreImages: [
      { src: '/projects/libbot-circuit.jpg', caption: 'Circuit diagram' },
    ],
    links: { github: null, demo: null, report: '/reports/libbot-report.pdf' } },

  { id: 'tracker', priority: 3, title: 'Predictive Maintenance Tracker', subtitle: 'For Engineering Labs', year: '2025',
    context: 'CSE 370 · Database Systems · Team of 2',
    summary: 'A lab equipment management system that predicts which machines are likely to fail using a risk-scoring engine, with live status monitoring over a 10-table normalised database and role-based access.',
    myPart: 'Built session-based login with automatic role detection across 4 role tables, the live equipment dashboard (a JSON API polled every 5 seconds) and issue reporting with auto-generated tracking IDs.',
    tags: ['PHP', 'MySQL', 'PDO', 'JavaScript'], image: null,
    links: { github: 'https://github.com/swapnilrob/Predictive-Maintenance-Tracker-for-Engineering-Labs', demo: null, report: null } },

  { id: 'hawkins', priority: 4, title: 'Defenders of the Hawkins', subtitle: '3D arena shooter in OpenGL', year: '2025',
    context: 'CSE 423 · Computer Graphics · Team of 3',
    summary: 'A Stranger Things–themed 3D arena shooter written from scratch in Python and OpenGL, with no game engine. Five playable characters fight through four levels ending in a Vecna boss fight, with switchable third- and first-person cameras and an AI-controlled Eleven companion.',
    myPart: 'Built the third-person and first-person camera systems, tap-vs-hold input controls, first-person gun rendering and the game state machine.',
    tags: ['Python', 'PyOpenGL', 'GLUT', '3D graphics'], image: null,
    links: { github: 'https://github.com/swapnilrob/Defenders-of-the-Hawkins', demo: null, report: null } },

  { id: 'legacy', priority: 5, title: 'Digital Legacy', subtitle: 'Encrypted Family Memory Vault', year: '2025',
    context: 'CSE 470 · Software Engineering · Team of 5',
    summary: 'A secure family memory vault where members share photos, stories and time capsules across generations, protected by AES-256 encryption and role-based access, with a family tree view.',
    myPart: 'Built the memory vault (create, edit, delete), file uploads with Multer, memory categorisation, version history and Google Drive integration.',
    tags: ['React', 'Express', 'MongoDB', 'JWT'], image: null,
    links: { github: 'https://github.com/Shakib-Al-Hossain/Digital-Legacy', demo: null, video: 'https://youtu.be/zk_Y4E2kCo8', report: null } },

  { id: 'academic-ml', priority: 6, title: 'Academic Success Prediction', subtitle: 'Machine learning on student outcomes', year: '2025',
    context: 'CSE 422 · Artificial Intelligence · Team of 2',
    summary: 'Compared four classifiers to predict student outcomes, with feature engineering, SMOTE balancing and cross-validation. Logistic Regression won with a Macro AUC of 0.641.',
    myPart: 'Ran the exploratory data analysis, implemented KNN and Logistic Regression with hyperparameter tuning, and built the evaluation: confusion matrices, per-class ROC curves and macro AUC comparison.',
    tags: ['Python', 'scikit-learn', 'TensorFlow', 'Pandas'], image: null,
    links: { github: 'https://github.com/swapnilrob/Academic-success-prediction', demo: null, report: '/reports/academic-ml-report.pdf' } },

  { id: 'healthcare-net', priority: 7, title: 'Smart Healthcare Network', subtitle: 'Multi-site hospital network design', year: '',
    context: 'CSE 421 · Computer Networks · Team of 3',
    summary: 'A hospital network in Cisco Packet Tracer connecting 810 devices across 6 medical units. Uses VLSM subnetting from a single /16 block, all four types of static routing alongside RIPv2, DHCP, and a floating static route that takes over when the main link fails.',
    myPart: 'Deployed the DNS, web and email servers across all 6 units, built the full IP address table and configured RIPv2 with static route redistribution.',
    tags: ['Cisco Packet Tracer', 'VLSM', 'RIPv2', 'Static routing', 'DHCP'],
    image: '/projects/healthcare-network.jpg',
    links: { github: 'https://github.com/swapnilrob/smart-healthcare-network-design', demo: null, report: null } },

  { id: 'procman', priority: 8, title: 'Multithreaded Process Manager', subtitle: 'OS simulator in C', year: '2025',
    context: 'CSE 321 · Operating Systems · Team of 2',
    summary: 'An OS process lifecycle simulator in pure C that handles concurrent state transitions with POSIX threads, PCB tracking and layered mutex locking.',
    myPart: 'Built the worker-thread command interpreter (fork, exit, wait, kill, sleep), the monitor thread that logs process snapshots using condition variables, and thread start-up and clean shutdown.',
    tags: ['C', 'POSIX threads', 'Mutexes'], image: null,
    links: { github: 'https://github.com/swapnilrob/multithreaded-process-manager-simulator', demo: null, report: null } },

  { id: 'morse', priority: 9, title: 'Morse Code Translator', subtitle: '8086 Assembly encoder and decoder', year: '2025',
    context: 'CSE 341 · Microprocessors · Team of 3',
    summary: 'A two-way Morse code translator in 1,800+ lines of 8086 Assembly. Encodes text with PC-speaker beeps at three speeds and decodes dot-dash input with a hand-built binary decision tree.',
    myPart: 'Designed the system architecture: the ASCII menu interface, keyboard input with backspace, 3-speed timing using the BIOS timer (INT 1Ah) and keyboard-buffer handling.',
    tags: ['8086 Assembly', 'EMU8086', 'BIOS & DOS interrupts'], image: null,
    links: { github: 'https://github.com/swapnilrob/Morse-Code-Translator', demo: null, report: null } },
];

export const skills = [
  { id: 'lang', priority: 1, name: 'Languages', items: ['Python', 'JavaScript', 'C', 'PHP', 'SQL', 'Assembly (8086)'] },
  { id: 'web', priority: 2, name: 'Web & Backend', items: ['React', 'Node.js', 'Express', 'FastAPI', 'MongoDB', 'MySQL', 'Tailwind CSS'] },
  { id: 'ai', priority: 3, name: 'AI / ML', items: ['TensorFlow', 'scikit-learn', 'LLMs', 'RAG', 'Multimodal AI', 'OpenRouter', 'Groq'] },
  { id: 'tools', priority: 4, name: 'Tools & Platforms', items: ['Git', 'GitHub', 'Linux', 'Jupyter', 'Cisco Packet Tracer', 'Cloudinary', 'Stripe'] },
  { id: 'course', priority: 5, name: 'Relevant Coursework', items: ['Artificial Intelligence', 'Algorithms', 'Data Structures', 'Operating Systems', 'Compiler Design', 'Computer Networks', 'Database Systems', 'Software Engineering', 'Introduction to Robotics'] },
];

export const certifications = [
   // ---------- Technical ----------
  { id: 'gp-insights', group: 'technical', priority: 1, name: 'From Insights to Influence',
    issuer: 'Grameenphone Academy', date: 'Sep 2026',
    credentialUrl: 'https://www.grameenphone.academy/cert/4a446248b9bb',
    file: '/certs/gp-insights.jpg', fileType: 'image' },
  { id: 'gp-ai-analytics', group: 'technical', priority: 2, name: 'AI-Powered Analytics',
    issuer: 'Grameenphone Academy', date: 'Sep 2026',
    credentialUrl: 'https://www.grameenphone.academy/cert/9e8c1557c9c9',
    file: '/certs/gp-ai-analytics.jpg', fileType: 'image' },
  { id: 'gp-data-foundations', group: 'technical', priority: 3, name: 'Data Foundations with AI',
    issuer: 'Grameenphone Academy', date: 'Sep 2026',
    credentialUrl: 'https://www.grameenphone.academy/cert/04967d24f34b',
    file: '/certs/gp-data-foundations.jpg', fileType: 'image' },

  // ---------- Beyond Academics ----------
  { id: 'book-reading-2022', group: 'beyond', priority: 1,
    name: 'Winner, 1st Unified Book Reading Programme 2022',
    issuer: 'Private Libraries of Bangladesh · Category Ga', date: '2022',
    credentialUrl: null, file: '/certs/book-reading-2022.jpg', fileType: 'image' },
  { id: 'brac-presentation-skill', group: 'beyond', priority: 2,
    name: 'Presentation Skill',
    issuer: 'Residential Semester, BRAC University', date: 'Aug 2023',
    credentialUrl: null, file: '/certs/brac-presentation-skill.jpg', fileType: 'image' },
  { id: 'liberation-war-museum-reading', group: 'beyond', priority: 3,
    name: 'Ali Zaker Liberation War Book Reading Initiative',
    issuer: 'Liberation War Museum', date: 'Jun 2023',
    credentialUrl: null, file: '/certs/liberation-war-museum-reading.jpg', fileType: 'image' },
  { id: 'english-carnival-2017', group: 'beyond', priority: 4,
    name: '3rd National English Carnival',
    issuer: 'Notre Dame English Club', date: '2017',
    credentialUrl: null, file: '/certs/english-carnival-2017.jpg', fileType: 'image' },
  { id: 'bd-quiz-up-2018', group: 'beyond', priority: 5,
    name: 'BD Quiz Up 2018',
    issuer: 'Exchange', date: 'Mar 2018',
    credentialUrl: null, file: '/certs/bd-quiz-up-2018.jpg', fileType: 'image' },
];

export const activities = [
  { id: 'ieee-cs', group: 'technical', priority: 1, org: 'IEEE Computer Society, BRAC University Chapter',
    role: 'Member', period: 'Dec 2024 – Present', points: [], url: null },
  { id: 'pathagar', group: 'beyond', priority: 1, org: 'Anirban Pathagar', role: 'Volunteer & Program Host · Community Library', period: '2019 – Present',
    points: ['Hosts podcasts and organises community programmes that promote reading'], url: null },
  { id: 'artsoc', group: 'beyond', priority: 2, org: 'BRAC University Art & Photography Society', role: 'General Member, Event Management', period: 'Jan 2023 – Feb 2024',
    points: ['Organised two club events, including the Freshers’ Orientation'], url: null },
];