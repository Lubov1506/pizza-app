import { _ingredients, categories, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomDecimalNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

// const generateProductItem = ({
//   productId,
//   pizzaType,
//   size,
// }: {
//   productId: number;
//   pizzaType?: 1 | 2;
//   size?: 20 | 30 | 40;
// }) => {
//   return {
//     productId,
//     price: randomDecimalNumber(190, 600),
//     pizzaType,
//     size,
//   } as Prisma.ProductItemUncheckedCreateInput;
// };

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "Admin TEST",
        email: "admin@localhost",
        password: hashSync("admin", 10),
        role: "ADMIN",
        verified: new Date(),
      },
      {
        fullName: "User TEST",
        email: "user@localhost",
        password: "user",
        role: "USER",
        verified: new Date(),
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });
  await prisma.ingredient.createMany({ data: _ingredients });

  await prisma.product.createMany({ data: products });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "/images/pizzas/pizza-1.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "/images/pizzas/pizza-2.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "/images/pizzas/pizza-3.webp",
      categoryId: 1,
      ingredients: {
        connect: _ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createMany({
    data: [
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
        price: randomDecimalNumber(190, 600),
      },

      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
        price: randomDecimalNumber(190, 600),
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
        price: randomDecimalNumber(190, 600),
      },

      { productId: 1, price: randomDecimalNumber(190, 600) },
      { productId: 2, price: randomDecimalNumber(190, 600) },
      { productId: 3, price: randomDecimalNumber(190, 600) },
      { productId: 4, price: randomDecimalNumber(190, 600) },
      { productId: 5, price: randomDecimalNumber(190, 600) },
      { productId: 6, price: randomDecimalNumber(190, 600) },
      { productId: 7, price: randomDecimalNumber(190, 600) },
      { productId: 8, price: randomDecimalNumber(190, 600) },
      { productId: 9, price: randomDecimalNumber(190, 600) },
      { productId: 10, price: randomDecimalNumber(190, 600) },
      { productId: 11, price: randomDecimalNumber(190, 600) },
      { productId: 12, price: randomDecimalNumber(190, 600) },
      { productId: 13, price: randomDecimalNumber(190, 600) },
      { productId: 14, price: randomDecimalNumber(190, 600) },
      { productId: 15, price: randomDecimalNumber(190, 600) },
      { productId: 16, price: randomDecimalNumber(190, 600) },
      { productId: 17, price: randomDecimalNumber(190, 600) },
    ],
  });
  await prisma.cart.createMany({
    data:[
        {
            userId: 1,
            totalAmount: 0,
            token: '1123'
        },
        {
            userId: 2,
            totalAmount: 10,
            token: '354'
        },
    ]
  })
  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}
async function main() {
  try {
    await down();
    await up();
  } catch (err) {
    console.error(err);
  }
}
main()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
