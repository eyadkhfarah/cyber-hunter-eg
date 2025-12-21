// import { categories } from "@/lib/categories";

// export function getCategoryObjects(post: any) {
//   const category = categories.find(
//     (cat) => cat.title === post.properties.Category.select.name
//   );
//   const mainCategory = categories.find((category) =>
//     category.SecondaryCategory.some(
//       (sub) => sub.title === post.properties.SubCategory?.select?.name
//     )
//   );
//   const subCategory = mainCategory?.SecondaryCategory?.find(
//     (sub) => sub.title === post.properties.SubCategory?.select?.name
//   );
//   return { category, mainCategory, subCategory };
// }