export type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const featureData: Feature[] = [
  {
    title: "Lightning Fast",
    description: "Our app is built for speed so you can work without interruptions.",
    icon: "⚡️",
  },
  {
    title: "Secure by Design",
    description: "Top-notch security is baked in to keep your data safe.",
    icon: "🔒",
  },
  {
    title: "Intuitive UI",
    description: "Enjoy a clean, easy-to-use interface designed for everyone.",
    icon: "🎨",
  },
  {
    title: "24/7 Support",
    description: "We're here any time you need help or have questions.",
    icon: "🛠️",
  },
];