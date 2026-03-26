export const site = {
  name: 'Prateek Goyal',
  role: 'Software Development Engineer II',
  company: 'Metaforms AI',
  location: 'Bengaluru, Karnataka, India',
  email: 'gprateek015@gmail.com',
  portraitSrc: '/portrait.jpg',
  headline:
    'Product and platform engineer — I care most about AI systems that stay reliable, observable, and affordable once they leave the demo.',
  links: {
    github: 'https://github.com/goyal-prateek',
    linkedin: 'https://www.linkedin.com/in/goyal-prateek',
    resumer: 'https://resumer.prateeklab.com/',
  },
  about: [
    'I am especially interested in AI systems and scaling them responsibly — not just calling a model, but designing workflows that degrade gracefully, stay within budget, and stay debuggable when things go wrong in the wild.',
    'On the software side I have strong hands-on experience with agentic workflows: tool use, multi-step pipelines, guardrails, and human-in-the-loop patterns — aligned with where the field is heading as products mature (measurement and evals, routing and cost control, composable tool interfaces, and operational rigor instead of benchmark chasing).',
    'I am tech-agnostic about the stack: I pick languages, runtimes, and cloud primitives for the constraint — not the logo. Lately that has meant backend services, queues and workers, data stores, observability, sandboxed execution for untrusted code, sync engines (optimistic updates, conflict handling, and keeping client and server honest), and real-time / streaming UX.',
  ],
  experience: [
    {
      company: 'Metaforms AI',
      location: 'Bengaluru',
      title: 'Software Development Engineer II',
      range: 'May 2025 – Present',
      highlights: [
        'Backend for a customer-facing Survey Programming Copilot; LLM-assisted workflows with guardrails (FastAPI, Tauri, React + Rust).',
        'Sandboxed Python execution with isolation and audit logging — safer untrusted code without host FS/network access.',
        'Excel-like grid: 10k+ cells, virtualization, undo/redo, Excel paste, optimistic sync with FastAPI.',
        'Owned releases end-to-end: API contracts, Sentry error budgets, fewer incidents via release gates and rollback automation.',
      ],
    },
    {
      company: 'Metaforms AI',
      location: 'Bengaluru',
      title: 'Software Development Engineer I',
      range: 'May 2024 – Apr 2025',
      highlights: [
        'Migrated Voice Forms streaming to LiveKit (WebRTC) — lower latency and better UX on weak networks.',
        'Async job pipeline with Redis and worker pools for high-volume form submissions; Docker + blue-green on AWS ECS.',
        'Frontend performance: service worker caching, virtualized long lists — faster loads and smoother scrolling.',
      ],
    },
  ],
  skillGroups: [
    {
      title: 'Core',
      items: [
        'FastAPI',
        'Node.js',
        'REST APIs',
        'React',
        'TypeScript',
        'PostgreSQL',
        'MongoDB',
      ],
    },
    {
      title: 'Cloud & tools',
      items: [
        'AWS (ECS, Lambda, S3, CloudFront, ALB, SQS, ECR, CloudWatch)',
        'Docker',
        'Redis',
        'CI/CD',
        'Firebase',
        'Tauri',
        'Git',
      ],
    },
    {
      title: 'Engineering',
      items: [
        'System design',
        'Distributed systems',
        'API design',
        'Observability',
        'Performance',
        'LLM integration',
        'Agentic workflows',
        'Guardrails & eval mindset',
      ],
    },
    {
      title: 'Languages',
      items: ['TypeScript / JavaScript', 'Python', 'SQL', 'Rust'],
    },
  ],
  education: {
    school: 'Jabalpur Engineering College',
    degree: 'B.Tech, Computer Science and Engineering',
    range: 'Nov 2020 – Jun 2024',
    detail: 'CGPA 8.43 / 10',
  },
  sideProject: {
    title: 'Something new is cooking',
    body: 'I am building a focused side project around tooling and UX. I will share more when it is ready for a public release.',
  },
  profilesIntro:
    'Competitive programming profiles and selected contest results.',
  profiles: [
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/goyal_prateek/',
      note: 'Knight · 2000+ rating',
    },
    {
      name: 'Codeforces',
      href: 'https://codeforces.com/profile/prateek_01',
      note: 'Specialist · peak 1470',
    },
    {
      name: 'HackerRank',
      href: 'https://www.hackerrank.com/gprateek015',
      note: 'Badges & practice',
    },
  ],
  achievements: [
    {
      text: 'Led team to the Smart India Hackathon 2022 Finals, securing a top 5 position among 125 teams.',
      link: {
        href: 'https://drive.google.com/file/d/1isbXV_g5gH0iSTI4JlZWsi2FQ2yaOA1a/view?usp=drivesdk',
        label: 'Certificate',
      },
    },
    {
      text: 'Achieved regionalist in ICPC Amritapuri and qualified ICPC Kanpur preliminary round with a rank of 620.',
    },
    {
      text: 'Specialist at Codeforces with highest rating of 1470 and Knight at LeetCode with 2000+ rating.',
    },
    {
      text: 'Ranked 292 among 29k+ participants globally and AIR 69 in LeetCode Biweekly Contest 111.',
      link: {
        href: 'https://www.linkedin.com/posts/prateek-goyal1_connections-leetcode-cp-activity-7098718746009108480-9ATy?utm_source=share&utm_medium=member_desktop',
        label: 'Post',
      },
    },
  ],
} as const

export type SiteContent = typeof site
