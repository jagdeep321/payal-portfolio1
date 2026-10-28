/**
 * PORTFOLIO DATA CONFIGURATION FOR PAYAL ARORA
 *
 * All personal details, images, social links, and project content are centralized here.
 * To update portraits or project screenshots with actual client assets, simply replace
 * the paths or URLs in this file.
 */

export const INSTAGRAM_PROFILE_URL = "https://instagram.com/digitalspark_00"; 
// ^ NOTE: Replace the above URL with Payal's actual Instagram profile URL once available.
// Example: "https://instagram.com/payal_digitalmarketing"

export const WHATSAPP_PHONE = "917888717976";
export const DISPLAY_PHONE = "+91 78887 17976";
export const CALL_PHONE_TEL = "tel:7888717976";
export const EMAIL_ADDRESS = "itspayal85@gmail.com";
export const WHATSAPP_PREFILLED_MESSAGE = "Hi Payal, I'm interested in your digital marketing services.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(WHATSAPP_PREFILLED_MESSAGE)}`;

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  client?: string;
  role?: string;
  scope: string;
  deliverables?: string;
  images: {
    src: string;
    fallbackUrl?: string;
    alt: string;
    caption?: string;
  }[];
  tags: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year?: string;
  badge: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Payal Arora",
    monogram: "PA",
    profession: "Digital Marketer & Social Media Executive",
    heroTitlePrefix: "Payal",
    heroTitleSuffix: "Arora",
    heroSubtitle: "“Igniting brand growth and digital presence through creative strategies.”",
    location: "Amritsar, Punjab, India",
    // Replaceable hero portrait configuration
    portrait: {
      src: "/images/payal.jpeg",
      fallbackUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=85",
      alt: "Payal Arora - Digital Marketer & Social Media Executive",
      caption: "Creative Director & Growth Strategist",
    },
  },
  about: {
    heading: "About Me",
    introduction:
      "Hi, I'm Payal Arora — a dedicated freelance digital marketer and social media executive passionate about helping businesses translate their value into compelling online narratives. I specialize in end-to-end digital solutions, from crafting engaging video hooks to executing targeted ad campaigns.",
    myApproach: {
      heading: "My Approach",
      text: "I blend data-driven strategies with creative design to ensure that local businesses and growing brands not only reach their target audience but also leave a lasting impact.",
    },
    education: [
      {
        degree: "Graduation in Mathematics",
        institution: "Guru Nanak Dev University, Amritsar",
        badge: "Academic Foundation",
      },
      {
        degree: "Digital Marketing",
        institution: "Deforce Academy, Amritsar",
        badge: "Professional Specialization",
      },
    ] as EducationItem[],
    statsPills: [
      { label: "Data-Driven Strategy", value: "Analytical Mindset" },
      { label: "Meta & Ads Expertise", value: "High ROI Campaigns" },
      { label: "Content Creation", value: "Engaging Reels & Hooks" },
      { label: "Brand Presence", value: "End-to-End Execution" },
    ],
  },
  services: [
    {
      id: "social-media-management",
      title: "Social Media Management",
      description: "End-to-end profile management, organic growth reporting, and tailored content calendars.",
      iconName: "TbBrandInstagram",
      highlights: ["Organic Audience Growth", "Content Calendar Architecture", "Community Engagement"],
    },
    {
      id: "graphics-logo-designing",
      title: "Graphics & Logo Designing",
      description: "Custom brand kits, promotional graphics, and high-conversion thumbnails.",
      iconName: "TbPalette",
      highlights: ["Brand Identity Systems", "High-Conversion Creatives", "Social Promotional Assets"],
    },
    {
      id: "video-editing-content-creation",
      title: "Video Editing & Content Creation",
      description: "Short-form video scripts, engaging reel hooks, and seamless editing for higher engagement.",
      iconName: "TbVideo",
      highlights: ["Viral Reel Hooks", "Pacing & Motion Effects", "Retention-Focused Editing"],
    },
    {
      id: "paid-advertising",
      title: "Paid Advertising",
      description: "Setup and management of Meta Ads campaigns to drive leads and sales.",
      iconName: "TbTargetArrow",
      highlights: ["Targeted Funnel Setup", "A/B Creative Testing", "ROAS Optimization"],
    },
    {
      id: "profile-optimization",
      title: "Profile Optimization",
      description: "Google Business Profile configuration and optimization to capture local search traffic.",
      iconName: "TbChartBar",
      highlights: ["Local Search Dominance", "SEO Keyword Integration", "Review Growth Strategy"],
    },
    {
      id: "website-designing",
      title: "Website Designing",
      description: "Clean, user-friendly digital storefronts that showcase your brand professionally.",
      iconName: "TbDeviceDesktopAnalytics",
      highlights: ["Responsive UI/UX Layouts", "Conversion-Centric Flow", "Modern Visual Aesthetics"],
    },
  ] as ServiceItem[],
  projects: [
    {
      id: "br-interiors",
      title: "BR Interiors",
      category: "Interior Architecture & Modular Design",
      role: "Social Media Management & Content Creator",
      scope: "Developed targeted promotional graphics and short video scripts highlighting modular kitchens.",
      deliverables: "High-resolution kitchen promotional creatives, reels scripting, and targeted audience outreach.",
      images: [
        {
          src: "/images/payal interior1.PNG",
          fallbackUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
          alt: "BR Interiors - Modern modular kitchen interior design with luxury island and ambient lighting",
          caption: "Modern Modular Kitchen Architecture",
        },
        {
          src: "/images/payal interior2.PNG",
          fallbackUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85",
          alt: "BR Interiors - Contemporary modular kitchen cabinetry craftsmanship and detail",
          caption: "Contemporary Kitchen Cabinetry Detailing",
        },
      ],
      tags: ["Modular Kitchens", "Content Creation", "Reel Scripts", "Promotional Graphics"],
    },
    {
      id: "graphics-design",
      title: "Graphics Design",
      category: "Cafe & Culinary Brand Identity",
      role: "Brand Identity & Graphic Designer",
      scope: "Designed custom, eye-catching graphics to elevate the cafe's brand identity and promote its menu offerings.",
      deliverables: "High-quality promotional graphics, social media posts, and visual content tailored specifically to attract and engage a cafe audience.",
      images: [
        {
          src: "/images/payal cafe1.jpeg",
          fallbackUrl: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1000&q=85",
          alt: "Cafe Branding - Premium artisanal coffee presentation and promotional visual identity",
          caption: "Cafe Brand Atmosphere & Coffee Presentation",
        },
        {
          src: "/images/payal cafe2.jpeg",
          fallbackUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
          alt: "Cafe Menu Marketing - Social media culinary showcase and promotional layout",
          caption: "Culinary Menu Promotion & Social Visuals",
        },
      ],
      tags: ["Cafe Identity", "Menu Marketing", "Social Media Posts", "Visual Content"],
    },
    {
      id: "the-outfit-store",
      title: "Clothing Brand: The Outfit Store",
      category: "Fashion Retail & E-Commerce",
      role: "Social Media Executive",
      scope: "Managed the digital presence and audience engagement for a local apparel brand.",
      deliverables: "Developed a tailored social media strategy proposal, marketing outreach pitches, and promotional campaigns.",
      images: [
        {
          src: "/images/clothing-brand-1.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
          alt: "The Outfit Store - Modern boutique apparel showcase and seasonal collection",
          caption: "Boutique Retail Experience & Fashion Display",
        },
        {
          src: "/images/clothing-brand-2.jpg",
          fallbackUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1000&q=85",
          alt: "The Outfit Store - Editorial apparel lookbook and campaign styling",
          caption: "Editorial Lookbook & Promotional Strategy",
        },
      ],
      tags: ["Apparel Branding", "Campaign Outreach", "Strategy Proposal", "Audience Engagement"],
    },
  ] as ProjectItem[],
  contact: {
    headline: "Ready to Spark Your Digital Growth?",
    subheading:
      "Whether you need a complete social media overhaul, engaging reels, or a streamlined ad campaign, I'm ready to help your brand stand out. Let's build something great together.",
    phone: "7888717976",
    phoneDisplay: "+91 78887 17976",
    phoneTel: "tel:7888717976",
    email: "itspayal85@gmail.com",
    emailMailto: "mailto:itspayal85@gmail.com",
    whatsappUrl: WHATSAPP_URL,
    instagramUrl: INSTAGRAM_PROFILE_URL,
    instagramLabel: "@payalarora (Configure in portfolio.ts)",
  },
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Case Studies & Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
};
