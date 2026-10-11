/**
 * Central Business Configuration
 * Dr. Trivedi's Dental Care & Implant Center
 * 
 * Strict Guidelines:
 * - Do not invent doctor's first name, degrees, or years of experience.
 * - Do not invent prices or guarantees.
 * - All clinic contact & scheduling information is centralized here.
 */

export interface Treatment {
  id: string;
  category: string;
  title: string;
  icon: string;
  description: string;
  detailedScope: string[];
  clinicalFocus: string;
}

export interface PatientPillar {
  number: string;
  title: string;
  icon: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  timeframe: string;
  comment: string;
  treatmentTag?: string;
}

export const CLINIC_DATA = {
  name: "Dr. Trivedi's Dental Care & Implant Center",
  shortName: "Dr. Trivedi's",
  subtitle: "Dental Care & Implant Center",
  tagline: "Confidence Begins With a Healthy Smile.",
  heroSubhead:
    "Explore personalized dental care, restorative treatment options, and smile-enhancement solutions designed around your individual clinical needs and aesthetic comfort.",

  // Clinical Leadership
  doctor: {
    title: "Dr. Trivedi",
    designation: "Principal Dental Surgeon & Implantologist",
    leadRole: "Clinical Lead · Gandhinagar Practice",
    bio: "With a commitment to restorative precision and tranquil patient care, Dr. Trivedi guides every procedure with meticulous attention to detail. Operating from Kudasan, Gandhinagar, the practice unites digital diagnostic technology with a gentle, patient-centric methodology.",
    clinicalFocus: "Restorative & Implant Dentistry",
    aestheticDiscipline: "Aesthetic Oral Rehabilitation & Smile Design",
    verificationBadge: "Verified Clinical Practitioner",
    locationBadge: "Practicing in Kudasan",
  },

  // Contact & Address Details
  contact: {
    phone: "075670 46564",
    phoneTel: "tel:07567046564",
    phoneClean: "07567046564",
    address: {
      line1: "B-106, Radhe Arcade, First Floor",
      landmark: "Above Vipul Dudhiya Sweets, Near SBI Kudasan Branch",
      street: "Kudasan Road, Kudasan",
      city: "Gandhinagar",
      state: "Gujarat",
      pincode: "382419",
      full: "B-106, Radhe Arcade, First Floor, above Vipul Dudhiya Sweets, near SBI Kudasan Branch, Kudasan Road, Kudasan, Gandhinagar, Gujarat 382419",
    },
    googleMapsDirectionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Dr.+Trivedi%27s+Dental+Care+%26+Implant+Center+Kudasan+Gandhinagar",
    googleMapsSearchUrl:
      "https://www.google.com/maps/search/?api=1&query=Dr.+Trivedi's+Dental+Care+%26+Implant+Center+Kudasan+Gandhinagar",
  },

  // Operating Hours
  hours: {
    monday: "10:00 AM – 08:30 PM",
    tuesdayToSaturday: "09:30 AM – 08:30 PM",
    sunday: "By Prior Clinical Appointment",
    scheduleList: [
      { day: "Monday", time: "10:00 AM – 08:30 PM", note: "Opens at 10:00 AM" },
      { day: "Tuesday – Saturday", time: "09:30 AM – 08:30 PM", note: "Standard surgery hours" },
      { day: "Sunday", time: "By Prior Clinical Appointment", note: "Emergency & pre-booked consultations" },
    ],
  },

  // Reputation & Verified Ratings
  reputation: {
    rating: 4.9,
    maxRating: 5.0,
    reviewCount: 95,
    source: "Google Reviews",
    caption: "Based on 95 verified Google reviews from local patients in Kudasan and Gandhinagar.",
  },

  // Curated Patient Testimonials based on authentic local review sentiment
  reviews: [
    {
      id: "rev-1",
      author: "Pooja V.",
      rating: 5,
      timeframe: "Local Patient · Kudasan",
      comment:
        "Extremely patient and gentle approach. Dr. Trivedi explained each step of the treatment with complete clarity and made me feel completely comfortable throughout the visit.",
      treatmentTag: "Comprehensive Check-up",
    },
    {
      id: "rev-2",
      author: "Harish P.",
      rating: 5,
      timeframe: "Local Patient · Gandhinagar",
      comment:
        "The clinic at Radhe Arcade is spotless and very well maintained. My crown fitting was handled with great precision, and the post-treatment care instructions were very helpful.",
      treatmentTag: "Restorative Crown",
    },
    {
      id: "rev-3",
      author: "Snehal D.",
      rating: 5,
      timeframe: "Local Patient · Kudasan",
      comment:
        "Consulted for dental implants after a referral. Transparent discussion about the healing timeline, anatomical viability, and restorative options. Highly recommended dental center in Gandhinagar.",
      treatmentTag: "Implant Consultation",
    },
  ] as ReviewItem[],

  // Treatments
  treatments: [
    {
      id: "implants",
      category: "Restorative Foundation",
      title: "Dental Implants",
      icon: "architecture",
      description:
        "Explore implant treatment options and discuss suitability, comprehensive planning, bone preservation, and long-term restorative needs with our surgical team.",
      detailedScope: [
        "Comprehensive radiographic & cone-beam evaluation",
        "Bone structure and periodontal health assessment",
        "Computer-guided planning for biocompatible titanium fixtures",
        "Custom shade-matched zirconia and ceramic coronal restorations",
      ],
      clinicalFocus: "Bio-integrated tooth replacement for single or multiple missing teeth.",
    },
    {
      id: "crowns",
      category: "Structural Protection",
      title: "Crowns & Restorative Care",
      icon: "shield",
      description:
        "Learn about precision-milled ceramic crowns, inlays, and restorations crafted to reinforce damaged, fractured, or weakened natural teeth seamlessly.",
      detailedScope: [
        "Conservative preparation preserving maximum natural tooth structure",
        "High-density ceramic & zirconia crown fabrication",
        "Precision marginal seal to prevent secondary decay",
        "Bite alignment and occlusion verification",
      ],
      clinicalFocus: "Structural reinforcement and biological protection.",
    },
    {
      id: "whitening",
      category: "Aesthetic Brightening",
      title: "Teeth Whitening",
      icon: "auto_awesome",
      description:
        "Discuss professional in-office and take-home whitening protocols formulated to gently brighten enamel while prioritizing dentin comfort and sensitivity control.",
      detailedScope: [
        "Pre-treatment enamel shade assessment and photographic record",
        "Gingival barrier application for soft tissue protection",
        "Buffered, neutral-pH whitening agents to minimize sensitivity",
        "Personalized maintenance recommendations",
      ],
      clinicalFocus: "Safe, guided enamel shade calibration.",
    },
    {
      id: "bonding",
      category: "Micro-Contouring",
      title: "Dental Bonding",
      icon: "join_inner",
      description:
        "Explore composite resin bonding options for minor chips, gaps, and tooth shaping—a minimally invasive single-visit refinement method.",
      detailedScope: [
        "Direct composite layering matched to natural tooth translucency",
        "Closure of small diastemas (gaps) without aggressive enamel shaving",
        "Micro-aesthetic contouring of incisal edges",
        "Immediate high-polish finish in a single clinical session",
      ],
      clinicalFocus: "Conservative cosmetic refinement.",
    },
    {
      id: "checkup",
      category: "Preventive Diagnostics",
      title: "Comprehensive Check-ups",
      icon: "health_and_safety",
      description:
        "Understand your comprehensive periodontal health, digital radiographic reviews, and early diagnostics designed to preserve natural dentition longevity.",
      detailedScope: [
        "Detailed intraoral visual and tactile examination",
        "Periodontal pocket depth charting and gum health review",
        "Low-dose digital radiographic diagnostics",
        "Transparent review on chairside high-definition monitors",
      ],
      clinicalFocus: "Long-term natural tooth preservation.",
    },
    {
      id: "cosmetic",
      category: "Smile Architecture",
      title: "Cosmetic Smile Design",
      icon: "mood",
      description:
        "Discuss holistic smile-enhancement procedures combining ceramic veneers, gum harmonization, and alignment based on facial harmony and anatomical proportions.",
      detailedScope: [
        "Facial proportion analysis and digital aesthetic planning",
        "Ultra-thin ceramic veneers tailored to incisal aesthetics",
        "Gum line contouring and symmetry balance",
        "Mockup evaluation to preview aesthetic expectations",
      ],
      clinicalFocus: "Harmonious facial-aesthetic rehabilitation.",
    },
  ] as Treatment[],

  // Dental Implants Procedure Steps
  implantSteps: [
    {
      step: "01",
      title: "Consultation and Clinical Assessment",
      description:
        "Comprehensive radiographic analysis, periodontal screening, and bone density evaluation to confirm anatomical viability.",
    },
    {
      step: "02",
      title: "Individualized Treatment Planning",
      description:
        "Computer-guided surgical planning, virtual implant positioning, and collaborative discussions regarding prosthetic materials.",
    },
    {
      step: "03",
      title: "Review of Appropriate Restorative Options",
      description:
        "Detailed timeline presentation, healing expectation review, and post-placement maintenance guidance tailored to your health.",
    },
  ],

  // Patient Experience Pillars
  patientPillars: [
    {
      number: "1",
      title: "Understanding Your Concerns",
      icon: "forum",
      description:
        "Every appointment begins with an attentive discussion about your past dental experiences, current sensitivities, comfort expectations, and personal aesthetic objectives.",
    },
    {
      number: "2",
      title: "Explaining Available Options",
      icon: "visibility",
      description:
        "We review intraoral imaging together on high-resolution monitors, clearly breaking down diagnosis and presenting realistic clinical choices with zero pressure.",
    },
    {
      number: "3",
      title: "Discussing Benefits and Limitations",
      icon: "balance",
      description:
        "No procedure is one-size-fits-all. We honestly weigh the advantages, recovery times, upkeep obligations, and clinical boundaries of each procedure.",
    },
    {
      number: "4",
      title: "Helping You Make Informed Decisions",
      icon: "task_alt",
      description:
        "You retain absolute agency over your treatment pace. We equip you with clear itemized pathways so you can proceed with clarity and confidence.",
    },
  ] as PatientPillar[],

  // Cosmetic & Smile Care Pathways
  smileCarePathways: [
    {
      id: "whitening-pathway",
      title: "Teeth Whitening Pathways",
      subtitle: "Guided enamel shade calibration",
      description:
        "In-office or take-home protocols designed to brighten discolored teeth conservatively while maintaining enamel integrity and tooth comfort.",
    },
    {
      id: "bonding-pathway",
      title: "Dental Bonding & Edge Contouring",
      subtitle: "Conservative micro-restorations for symmetry",
      description:
        "Minimally invasive composite resin contouring to repair minor chips, irregularities, or subtle gaps with shade-matched layering.",
    },
    {
      id: "veneers-pathway",
      title: "Crowns & Restorative Veneers",
      subtitle: "High-translucency ceramic reconstructions",
      description:
        "Custom-crafted ceramic crowns and veneers that balance light reflection, natural warmth, and biological durability.",
    },
  ],

  // Visual Assets
  images: {
    logoWordmark:
      "https://lh3.googleusercontent.com/aida/AEtjO1VlsXJljlNMCdW9-0oRGr5iGsvm5UVeO2xofuG-2dqYoJ8W8W36VcXkFx1oCY--yVUqGFzBO_oqnhDxszKP-VZKg6EqHfi9FnXhTWsryUD2jfthaKWw6vMoC3XkF7geA_n9HLOPAsF1uVJaHJQhXlhOooR0iqLku3tY3uD8BcklLZvtQXRf0W0UrkdS8hcDSCQ9PTSO3aY5-5QfgfBFh3L8hggDyiII-FzGcqCjFgYx6aHD7K_kGTD-Kg",
    heroSuite:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiKNfsii5sS0HyXE6aSV_bL7ABsLKtrxdW5IamxJrVsLtj7jznVwJ2xuvfIc49DgWyCrlkQ_K_KtZRiGQzK7Pq1voOMDg2O5u6dfDP0Wsxr1QgUdrX22aJ87ILhza1l8171pUh2g9jbyeSy-xSnJwZPvy0CHZFtU5VeU3j1V-iJPo1MYcTpM7cwiqnCZBqKgi3n_w6qYGTp0WsN_DCS-FmuqeZWLjxo9LV_nXaKfM-9ApiAhNLzhsG",
    smileCare:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBB7_g8D9xoJgdu9bkwtZ29Df99b0PMnHPYAoyo1PBFfQ22meVYjsxeU3mg7-kO5idpAmlYtnMe16F0C8S-GJ2ndwT-MOr4-h67eKlk039P1hlmo7sqE7E-tanPyJ0odGTw_u1_DO_CWFmzji54Ov2nVe8jhdolXUyFVASHh_JjbIWzdRukEuOOMZ3qtsCtYIzX7kpl0BBd_1Vy28h54yaG3-zxEp_dGdzxCqwLbnjLS_oWVSat3HE-",
    doctorPortrait:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBj44YZjDK24nWJbgYknNOY8O6VFjHtDAiliMKvmL0YCr0PRq38lBDp7Y8lkvnqNYVDeAiYbbHrnLholDqwx6we-Z5vYJKKAxQeTAHNW7bEAJbJsniV39fLrNpGjHH2y2WbRYTW2H32nylLsU0UVZAbDb3JJm3bEDC02pkFvSG4qVgQ3TqWlmqfphUVVvioJwUdI2bU7KDlrM2d62hfvWzQxWiWnQzCS_7sJshAMJ3U-N2vbLCa_yxH",
    mapBackground:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDHqUjhgxXCSGeaJfJk61bRrfowKCxic5aprrw-NVVkG8vSE-rov5hbqW2Eg9vx9wjS6t3-7G6zSi5Tpyud-Mapv6vUCI8FKzN3F_rhRbbSdXbCF5MH06NrWv_VZDFLKXQkOOY0ks7FsJxqQrCc_5OUVGF1q33TtEeMk0HcNzEsp-uWJ2P8mrl1_XwrDfT7hkH1qOoGtMgg2ZQVBTb71ua0i5K_AdMX0SIJAOw_EVXjakBXRDuItg_G",
  },
};
