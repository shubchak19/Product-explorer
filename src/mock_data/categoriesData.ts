export type ProductCategory = {
  name: string;
  description: string;
  image: string;
};

export const categoriesData: ProductCategory[] = [
  {
    name: "Electronics",
    description: "Latest gadgets, devices, and smart tech to power your life.",
    image: "https://placehold.co/600x400",
  },
  {
    name: "Home & Living",
    description: "Furniture, decor, and lifestyle picks to upgrade your space.",
    image: "https://placehold.co/600x400",
},
{
    name: "Fashion",
    description: "Trendy apparel, footwear, and accessories for all seasons.",
    image: "https://placehold.co/600x400",
},
{
    name: "Outdoor & Sports",
    description: "Gear up with products for fitness, adventure, and the outdoors.",
    image: "https://placehold.co/600x400",
  },
];