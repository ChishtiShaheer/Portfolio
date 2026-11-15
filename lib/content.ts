export const links = {
  email: "mailto:shaheerchishti21@gmail.com",
  github: "https://github.com/ChishtiShaheer",
  linkedin: "https://linkedin.com/in/shaheer-chishti/",
};

export type Run = {
  name: string;
  tagline: string;
  status: "live" | "in progress" | "shipped" | "built";
  stack: string;
  points: string[];
  links: { label: string; href: string }[];
};

export const runs: Run[] = [
  {
    name: "PromptGuard",
    tagline: "A gateway that decides which prompts reach which LLM",
    status: "in progress",
    stack: "FastAPI, PostgreSQL, Redis, React",
    points: [
      "My final year project. Companies want their staff using LLMs but not for everything, so it sorts each prompt by technical domain and applies role-based rules that block non-work use.",
      "Prompts that pass get sent to whichever model fits best on cost, latency and accuracy. Redis semantic caching avoids paying twice for the same question, and an admin dashboard shows usage and spend.",
    ],
    links: [{ label: "Live demo", href: "https://prompt-guard-nu.vercel.app/" }],
  },
  {
    name: "End-to-end MLOps image classifier",
    tagline: "From raw images to a deployed model, with every step tracked",
    status: "live",
    stack: "TensorFlow/Keras, DVC, MLflow, Flask, Docker, GitHub Actions",
    points: [
      "Built and tuned a custom CNN and a fine-tuned MobileNetV2, with data versioned in DVC and every run tracked in MLflow on DagsHub. The best model is registered as champion, and Grad-CAM shows why it predicts what it does.",
      "Deployed as a cloud API behind a Flask app that validates uploads and logs predictions to SQLite, packaged in Docker and tested and built automatically through GitHub Actions.",
    ],
    links: [{ label: "Live demo", href: "https://two3l-0994-a2-ops.onrender.com/" }],
  },
  {
    name: "Lead enrichment engine at NitNode",
    tagline: "Apollo leads in, personalized outreach out",
    status: "shipped",
    stack: "Python, LLM pipelines",
    points: [
      "Built during my internship: a four-stage pipeline that enriches Apollo leads, scores them with an LQM-based model, and writes personalized emails. It helped grow NitNode's sales.",
    ],
    links: [],
  },
  {
    name: "AI resume scanner",
    tagline: "Match scores for resumes against job requirements",
    status: "built",
    stack: "Python, Docker, MLflow, DagsHub",
    points: [
      "Analyzes a resume against a job description and returns a match score. Experiments and model versions are tracked in MLflow on DagsHub, and the app ships as a Docker container.",
    ],
    links: [],
  },
];

export const stages = [
  {
    name: "Data",
    short: "Audit and version",
    detail:
      "I audit the dataset first: SHA-256 hashes to catch duplicates, plus dimension stats to spot odd files. Then it is versioned with DVC against a DagsHub remote, so any run can point at the exact data it used.",
    tools: "SHA-256, DVC, DagsHub",
  },
  {
    name: "Train",
    short: "Baseline vs. challenger",
    detail:
      "A custom CNN is the baseline. MobileNetV2 with fine-tuned top layers is the challenger. KerasTuner searches learning rate, dropout and how many layers to unfreeze.",
    tools: "TensorFlow/Keras, KerasTuner",
  },
  {
    name: "Track",
    short: "Compare and pick",
    detail:
      "Every run is logged to MLflow on DagsHub. The best model is registered and tagged champion, and Grad-CAM heatmaps show what it was looking at when it decided.",
    tools: "MLflow, DagsHub, Grad-CAM",
  },
  {
    name: "Ship",
    short: "Container to cloud",
    detail:
      "The model runs as a cloud inference API. A Flask app in front of it checks MIME type and dimensions, handles uploads in memory so nothing touches disk, and keeps an audit trail in SQLite. The image is CPU-optimized and non-root, and GitHub Actions tests and builds it.",
    tools: "Flask, Docker, docker-compose, GitHub Actions",
  },
];

export const log = [
  {
    when: "Jun to Sep 2026",
    title: "Associate AI Engineer, NitNode",
    body: "On-site in Lahore. Built the lead enrichment and outreach pipeline described above.",
  },
  {
    when: "2026",
    title: "10th on the regional shortlist, AI Seekho Google Antigravity National Hackathon",
    body: "Out of hundreds of teams. Issued by Google for Developers, Tech Nation Pakistan, Telenor and Innovista.",
  },
  {
    when: "2023 to now",
    title: "BSCS, FAST NUCES Lahore",
    body: "Now in my final year.",
  },
];

export const toolbox = [
  {
    area: "Models and experiments",
    text: "TensorFlow and Keras for training, KerasTuner for tuning, MLflow on DagsHub for tracking, DVC for data. Google Colab when I need a GPU.",
  },
  {
    area: "Shipping",
    text: "Docker and docker-compose, GitHub Actions, Git. I deploy to the cloud and care about health checks and non-root images.",
  },
  {
    area: "Backends and data",
    text: "Python with FastAPI and Flask, PostgreSQL (Supabase), Redis, SQL Server, Firestore. REST APIs, role-based access, Firestore security rules.",
  },
  {
    area: "Everything else I have written",
    text: "C#, Java, C, C++, Kotlin, JavaScript and React, React Native, .NET and WinUI 3, Android, SFML, and some x86 assembly.",
  },
];
