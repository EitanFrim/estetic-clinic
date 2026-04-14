const BASE_PATH = process.env.NODE_ENV === "production" ? "/estetic-clinic" : "";

export const SITE_METADATA = {
  title: "ד״ר חיים טל | קליניקה לאסתטיקה רפואית",
  description:
    "קליניקה לאסתטיקה דנטלית ורפואית בחדרה. טיפולי בוטוקס, פילרים, אסתטיקה דנטלית ועיצוב הפנים. ד״ר חיים טל - מומחה לאסתטיקה רפואית.",
  url: "https://dr-haimtal.co.il",
} as const;

export const CONTACT_INFO = {
  name: "ד״ר חיים טל",
  email: "Dr.haimtal@gmail.com",
  phone: "+972-00-000-0000",
  address: "אחד העם 7, חדרה, ישראל",
  instagram: "dr.haim_tal",
  instagramUrl: "https://www.instagram.com/dr.haim_tal",
  whatsappNumber: "97200000000",
  whatsappMessage: "שלום ד״ר חיים טל, אשמח לקבוע תור לייעוץ",
  googleMapsUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.5!2d34.92!3d32.44!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDI2JzI0LjAiTiAzNMKwNTUnMTIuMCJF!5e0!3m2!1siw!2sil!4v1",
} as const;

export function getWhatsAppUrl(): string {
  const text = encodeURIComponent(CONTACT_INFO.whatsappMessage);
  return `https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { id: "hero", label: "בית" },
  { id: "about", label: "אודות" },
  { id: "services", label: "שירותים" },
  { id: "gallery", label: "גלריה" },
  { id: "process", label: "תהליך" },
  { id: "testimonials", label: "המלצות" },
  { id: "contact", label: "צור קשר" },
] as const;

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const SERVICES: readonly Service[] = [
  {
    id: "dental-aesthetics",
    title: "אסתטיקה דנטלית",
    description:
      "ציפויי חרסינה, הלבנת שיניים ועיצוב חיוך מושלם לתוצאות טבעיות ומרשימות.",
    icon: "Sparkles",
  },
  {
    id: "fillers",
    title: "פילרים",
    description:
      "עיצוב שפתיים, מילוי קמטים והחזרת נפח לפנים באמצעות חומרי מילוי מתקדמים.",
    icon: "Droplets",
  },
  {
    id: "botox",
    title: "בוטוקס",
    description:
      "טיפולי בוטוקס מדויקים להחלקת קמטים, מניעת קמטי הבעה ומראה רענן וצעיר.",
    icon: "Syringe",
  },
  {
    id: "skin-treatments",
    title: "טיפולי עור",
    description:
      "פילינג כימי, PRP וטיפולים מתקדמים לחידוש העור, שיפור המרקם והברקת הפנים.",
    icon: "Sun",
  },
  {
    id: "facial-contouring",
    title: "עיצוב פנים",
    description:
      "עיצוב קווי מתאר הפנים, הגדרת לסת ועצמות לחיים למראה הרמוני ומאוזן.",
    icon: "Diamond",
  },
  {
    id: "smile-design",
    title: "עיצוב חיוך",
    description:
      "תכנון דיגיטלי מתקדם של החיוך המושלם בשילוב טכנולוגיות חדשניות.",
    icon: "Smile",
  },
] as const;

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    number: "01",
    title: "ייעוץ ראשוני",
    description:
      "פגישת היכרות אישית לבניית תוכנית טיפול מותאמת ליעדים ולצרכים שלכם.",
  },
  {
    number: "02",
    title: "טיפול מקצועי",
    description:
      "ביצוע הטיפול בטכנולוגיות מתקדמות ובגישה מקצועית ומדויקת.",
  },
  {
    number: "03",
    title: "תוצאות מרשימות",
    description:
      "תוצאות טבעיות ומרשימות שמשדרגות את המראה ומחזקות את הביטחון העצמי.",
  },
] as const;

export interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
}

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: "1",
    name: "שרה כ.",
    treatment: "עיצוב חיוך",
    quote:
      "ד״ר חיים טל שינה לי את החיים. התוצאות עלו על כל הציפיות שלי, וההליך היה נעים ומקצועי.",
    rating: 5,
  },
  {
    id: "2",
    name: "דנה מ.",
    treatment: "פילרים ובוטוקס",
    quote:
      "הגעתי בהמלצה של חברה ולא התאכזבתי. התוצאות טבעיות לגמרי ואני מרגישה מדהים.",
    rating: 5,
  },
  {
    id: "3",
    name: "מיכל ר.",
    treatment: "אסתטיקה דנטלית",
    quote:
      "מקצוענות ברמה הגבוהה ביותר. ד״ר טל הקשיב לכל הבקשות שלי והתוצאה מושלמת.",
    rating: 5,
  },
  {
    id: "4",
    name: "רונית ל.",
    treatment: "טיפולי עור",
    quote:
      "העור שלי נראה צעיר ורענן יותר. הטיפול היה מדויק והמעקב אחרי היה מצוין.",
    rating: 5,
  },
] as const;

export interface GalleryItem {
  id: string;
  category: string;
  label: string;
  image?: string;
}

export const GALLERY_ITEMS: readonly GalleryItem[] = [
  { id: "1", category: "fillers", label: "עיצוב שפתיים", image: `${BASE_PATH}/before-after-1.jpeg` },
  { id: "2", category: "fillers", label: "עיצוב שפתיים", image: `${BASE_PATH}/before-after-2.jpeg` },
  { id: "3", category: "fillers", label: "עיצוב שפתיים", image: `${BASE_PATH}/before-after-3.jpeg` },
  { id: "4", category: "botox", label: "החלקת קמטים" },
  { id: "5", category: "dental", label: "עיצוב חיוך" },
  { id: "6", category: "skin", label: "חידוש העור" },
] as const;
