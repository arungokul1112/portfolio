export const portfolioData = {
  name: "Arun Gokul K",
  title: "Software Engineer",
  subtitle: "Building scalable backend systems, real-time applications, and SaaS platforms.",
  about: {
    experience: "2+ Years Total Experience",
    currentRole: "Software Engineer at FortuneSoft Innovations",
    previousRole: "Software Developer at Udyata Information Systems",
    description: "Backend-focused Full-stack Engineer with a passion for backend architecture, scalable systems, and real-time engineering. Specialist in Node.js, NestJS, and PostgreSQL.",
  },
  skills: [
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "NestJS", "TypeScript", "RabbitMQ", "Socket.io"],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      category: "Messaging & Queues",
      items: ["RabbitMQ", "Event-driven architecture"], 
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js"],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "Postman", "Swagger"],
    },
    {
      category: "Architecture",
      items: ["RBAC", "JWT", "OAuth", "Multi-tenant SaaS", "REST APIs"],
    },
  ],
  experience: [
    {
      company: "FortuneSoft Innovations",
      role: "Software Engineer",
      period: "Current",
      highlights: [
        "Backend development for enterprise systems",
        "Scalable API architecture design",
        "Multi-tenant SaaS implementation",
      ],
    },
    {
      company: "Udyata Information Systems",
      role: "Software Developer",
      period: "1.8 Years",
      highlights: [
        "Real-time trip tracking with Socket.io",
        "PostgreSQL and MongoDB optimization",
        "RabbitMQ-based async processing",
        "Notification systems and workflow automation",
      ],
    },
    {
      company: "Luminar Technolab",
      role: "Full Stack Developer (Intern)",
      period: "8 Months",
      highlights: [
        "Full-stack web development training and project implementation",
        "Hands-on experience with MERN stack and real-world project workflows",
        "Built responsive frontends and integrated them with backend APIs",
      ],
    },
  ],
  projects: [
    {
      title: "TUKTUKO - Ride Sharing App",
      description: "Full-stack platform with real-time driver-rider interactions, secure authentication, and live trip tracking. Built with MVC architecture and integrated OpenStreetMap for geolocation.",
      role: "Full-stack Developer (Backend-focused)",
      tech: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Redis", "Socket.io", "OAuth", "JWT", "React.js", "OSM"],
      features: ["Driver & Rider Apps", "Real-time Trip Tracking", "Live Messaging", "Admin Panel", "Redis Caching"],
      highlight: "Implemented real-time trip tracking and driver-rider matching with low-latency WebSocket communication.",
    },
    {
      title: "Table Management & Reservation System",
      description: "Multi-tenant SaaS platform supporting hierarchical access (Org → Property → Outlet) with strict data isolation and interactive canvas-based floor plans.",
      role: "Backend Developer",
      tech: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "TypeORM", "JWT", "RBAC"],
      features: ["Multi-tenancy", "Interactive Floor Plans", "Guest Management", "Real-time Availability", "Operational Insights"],
      highlight: "Designed tenant-isolated architecture with complex hierarchical RBAC and interactive layouts.",
    },
    {
      title: "Vawe - Donation Platform",
      description: "Backend for a donation management system featuring project listings, automated PDF receipt generation, and recurring membership subscriptions.",
      role: "Backend Developer",
      tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "RBAC", "PDFKit"],
      features: ["Project Listing", "Secure Donations", "PDF Receipts", "Admin Approval Workflows", "Recurring Subscriptions"],
    },
    {
      title: "Elite Envoy - Global Recruitment",
      description: "Workflow management for global recruitment with dynamic form creation tailored to country-specific hiring processes and multi-step evaluation flows.",
      role: "Backend Developer",
      tech: ["Node.js", "Express.js", "PostgreSQL", "JWT", "RBAC"],
      features: ["Dynamic Forms", "Interview Scheduling", "Document Verification", "Candidate Evaluation"],
      highlight: "Enabled customizable hiring processes tailored to international recruitment standards.",
    },
    {
      title: "Simphony Delivery Integration",
      description: "Integration of delivery management with Oracle Simphony POS for seamless order handling, driver auto-matching, and event-driven notifications.",
      role: "Backend Developer",
      tech: ["Node.js", "Express.js", "PostgreSQL", "RESTful APIs", "Event-driven"],
      features: ["Order-to-Driver Matching", "Status-based Tracking", "POS Integration", "Automated Notifications"],
    },
    {
      title: "Jewelry Catalog & Order Management",
      description: "Comprehensive system for managing jewelry categories, product listings, and order tracking with secure role-based access control.",
      role: "Backend Developer",
      tech: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Sequelize", "REST APIs", "JWT"],
      features: ["Category Management", "Order Tracking", "Product Listings", "Secure RBAC"],
      highlight: "Built a scalable backend architecture for seamless jewelry retail operations.",
    },
    {
      title: "AI Customer Support",
      description: "Intelligent support system using RAG and LLMs to automate customer queries with high accuracy and real-time streaming responses.",
      role: "Full-stack Developer",
      tech: ["Next.js", "OpenAI", "Pinecone", "LangChain"],
      features: ["RAG Architecture", "Real-time streaming", "Sentiment analysis"],
      highlight: "Reduced manual support tickets by 40% through intelligent automated resolution.",
    },
    {
      title: "ChatFlow GPT",
      description: "A visual workflow builder for creating complex AI agentic workflows and multi-LLM pipelines with a drag-and-drop interface.",
      role: "Full-stack Developer",
      tech: ["React Flow", "Node.js", "OpenAI", "PostgreSQL"],
      features: ["Visual builder", "Agentic workflows", "Custom tool integration"],
      highlight: "Built a complex drag-and-drop interface for orchestrating multi-step AI reasoning.",
    },
  ],
  architecture: [
    {
      title: "Ride-sharing Architecture",
      description: "WebSocket-based live tracking with Redis caching for driver location updates.",
    },
    {
      title: "Recruitment Workflow Engine",
      description: "Dynamic multi-step hiring processes with country-specific custom form logic.",
    },
    {
      title: "SaaS Multi-tenant Flow",
      description: "Schema-level or Row-level isolation for enterprise data security.",
    },
  ],
  stats: [
    { label: "Years Experience", value: "2+" },
    { label: "Projects Completed", value: "8+" },
    { label: "API Endpoints", value: "1000+" },
    { label: "SaaS Platforms", value: "3+" },
  ],
  contact: {
    email: "arungokul36@gmail.com",
    phone: "+917012227129",
    linkedin: "https://www.linkedin.com/in/arun-gokul-k-07851a216/",
    github: "https://github.com/arungokul1112",
    resumeUrl: "/resume.pdf",
  }
};
