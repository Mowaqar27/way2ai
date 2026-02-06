export interface Workflow {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  originalPrice: number;
  nodesCount: number;
  rating: number;
  reviews: number;
  badge?: string;
  features: string[];
  icon: string;
}

export interface Bundle {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  workflowCount: number;
  features: string[];
  popular?: boolean;
  icon: string;
}

export const categories = [
  "All",
  "Lead Generation",
  "Social Media",
  "E-Commerce",
  "CRM & Sales",
  "Data Processing",
  "AI & Chatbots",
  "Email Marketing",
  "Productivity",
];

export const workflows: Workflow[] = [
  {
    id: "1",
    title: "LinkedIn Lead Scraper & Enrichment",
    description:
      "Automatically scrape LinkedIn profiles, enrich data with email addresses, and push leads directly to your CRM.",
    category: "Lead Generation",
    price: 29,
    originalPrice: 49,
    nodesCount: 14,
    rating: 4.9,
    reviews: 127,
    badge: "Best Seller",
    features: [
      "Auto profile scraping",
      "Email enrichment",
      "CRM integration",
      "Duplicate detection",
    ],
    icon: "linkedin",
  },
  {
    id: "2",
    title: "Instagram Content Scheduler",
    description:
      "Schedule, publish and analyze Instagram posts with AI-generated captions and optimal posting times.",
    category: "Social Media",
    price: 24,
    originalPrice: 39,
    nodesCount: 11,
    rating: 4.8,
    reviews: 93,
    badge: "Popular",
    features: [
      "AI captions",
      "Auto scheduling",
      "Analytics tracking",
      "Multi-account support",
    ],
    icon: "instagram",
  },
  {
    id: "3",
    title: "Shopify Order Automation Suite",
    description:
      "Complete order management automation — from fulfillment to customer notifications and inventory updates.",
    category: "E-Commerce",
    price: 39,
    originalPrice: 69,
    nodesCount: 22,
    rating: 4.9,
    reviews: 156,
    badge: "Best Seller",
    features: [
      "Order tracking",
      "Auto fulfillment",
      "Inventory sync",
      "Customer emails",
    ],
    icon: "shopping",
  },
  {
    id: "4",
    title: "HubSpot Deal Pipeline Automator",
    description:
      "Automate your entire sales pipeline with smart deal stage transitions, follow-up reminders, and reporting.",
    category: "CRM & Sales",
    price: 34,
    originalPrice: 59,
    nodesCount: 18,
    rating: 4.7,
    reviews: 84,
    features: [
      "Pipeline automation",
      "Smart follow-ups",
      "Revenue forecasting",
      "Team notifications",
    ],
    icon: "pipeline",
  },
  {
    id: "5",
    title: "CSV/Excel Data Transformer",
    description:
      "Import, clean, transform, and export data between CSV, Excel, Google Sheets, and databases with ease.",
    category: "Data Processing",
    price: 19,
    originalPrice: 29,
    nodesCount: 9,
    rating: 4.6,
    reviews: 201,
    features: [
      "Multi-format support",
      "Data cleaning",
      "Auto mapping",
      "Scheduled imports",
    ],
    icon: "data",
  },
  {
    id: "6",
    title: "GPT Customer Support Chatbot",
    description:
      "Deploy an AI-powered customer support chatbot using GPT-4 that handles tickets, FAQs, and escalations.",
    category: "AI & Chatbots",
    price: 49,
    originalPrice: 89,
    nodesCount: 26,
    rating: 4.9,
    reviews: 178,
    badge: "New",
    features: [
      "GPT-4 powered",
      "Ticket management",
      "Knowledge base",
      "Human handoff",
    ],
    icon: "bot",
  },
  {
    id: "7",
    title: "Mailchimp Drip Campaign Builder",
    description:
      "Create sophisticated email drip campaigns with behavioral triggers, A/B testing, and analytics dashboards.",
    category: "Email Marketing",
    price: 27,
    originalPrice: 45,
    nodesCount: 15,
    rating: 4.7,
    reviews: 112,
    features: [
      "Drip sequences",
      "A/B testing",
      "Behavioral triggers",
      "Performance analytics",
    ],
    icon: "mail",
  },
  {
    id: "8",
    title: "Notion Project Tracker",
    description:
      "Sync tasks across Notion, Slack, and Google Calendar with automatic status updates and deadline reminders.",
    category: "Productivity",
    price: 22,
    originalPrice: 35,
    nodesCount: 12,
    rating: 4.8,
    reviews: 145,
    badge: "Popular",
    features: [
      "Cross-app sync",
      "Auto reminders",
      "Status updates",
      "Team dashboards",
    ],
    icon: "notion",
  },
  {
    id: "9",
    title: "Facebook Ads Lead Capture",
    description:
      "Capture leads from Facebook Ads, validate data, score leads, and route them to the right sales rep instantly.",
    category: "Lead Generation",
    price: 32,
    originalPrice: 55,
    nodesCount: 16,
    rating: 4.8,
    reviews: 98,
    features: [
      "Lead capture",
      "Data validation",
      "Lead scoring",
      "Auto routing",
    ],
    icon: "facebook",
  },
];

export const bundles: Bundle[] = [
  {
    id: "b1",
    title: "Starter Pack",
    description: "Perfect for getting started with n8n automation",
    price: 49,
    originalPrice: 97,
    workflowCount: 3,
    features: [
      "3 workflow templates",
      "Setup documentation",
      "Email support",
      "Lifetime updates",
    ],
    icon: "starter",
  },
  {
    id: "b2",
    title: "Growth Bundle",
    description: "Scale your automation with our most popular workflows",
    price: 129,
    originalPrice: 297,
    workflowCount: 10,
    features: [
      "10 workflow templates",
      "Video tutorials",
      "Priority support",
      "Lifetime updates",
      "Custom node library",
    ],
    popular: true,
    icon: "growth",
  },
  {
    id: "b3",
    title: "Enterprise Suite",
    description: "Complete automation solution for large teams",
    price: 249,
    originalPrice: 589,
    workflowCount: 25,
    features: [
      "All 25+ workflow templates",
      "1-on-1 setup call",
      "Dedicated support",
      "Lifetime updates",
      "Custom modifications",
      "Team license (5 users)",
    ],
    icon: "enterprise",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    text: "These n8n workflows saved us 40+ hours per week. The lead generation bundle alone paid for itself within the first week.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Founder & CEO",
    company: "DataPulse",
    text: "The quality of these workflows is incredible. They're well-documented, easy to customize, and the support team is super responsive.",
    avatar: "MJ",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager",
    company: "ScaleUp Agency",
    text: "We replaced 3 SaaS tools with these n8n workflows. The cost savings and flexibility are unmatched. Highly recommended!",
    avatar: "ER",
    rating: 5,
  },
  {
    name: "David Park",
    role: "E-Commerce Manager",
    company: "ShopVista",
    text: "The Shopify automation suite transformed our order management. Customer satisfaction went up 35% since implementation.",
    avatar: "DP",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What is n8n and do I need it to use these workflows?",
    answer:
      "n8n is a free, open-source workflow automation tool. Yes, you'll need an n8n instance (self-hosted or cloud) to import and run these workflows. We provide setup guides for both options.",
  },
  {
    question: "How do I import a workflow into n8n?",
    answer:
      "Each workflow comes as a JSON file. Simply open your n8n editor, click the menu, select 'Import from File', and choose the JSON file. The workflow will be ready to configure with your credentials.",
  },
  {
    question: "Do I get lifetime updates?",
    answer:
      "Yes! All purchases include lifetime updates. When we improve a workflow or add new features, you'll receive the updated version via email at no extra cost.",
  },
  {
    question: "Can I customize the workflows?",
    answer:
      "Absolutely! All workflows are fully customizable. You can modify nodes, add new integrations, or adjust the logic to fit your specific needs. Enterprise bundle customers also get custom modification support.",
  },
  {
    question: "What if I need help setting up?",
    answer:
      "We offer email support for all customers and priority support for Growth Bundle purchasers. Enterprise Suite customers get a dedicated 1-on-1 setup call to ensure everything works perfectly.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact us for a full refund — no questions asked.",
  },
];

export const stats = [
  { label: "Workflows Sold", value: "12,000+" },
  { label: "Happy Customers", value: "3,500+" },
  { label: "Hours Saved", value: "500K+" },
  { label: "Average Rating", value: "4.8/5" },
];
