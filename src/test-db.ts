import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  try {
    const productos = await prisma.producto.findMany();
    console.log('Productos:', productos);
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error conectando a la DB:', error.message);
    } else {
      console.error('Error desconocido:', error);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((error) => {
  if (error instanceof Error) {
    console.error('Error in main function:', error.message);
  } else {
    console.error('Error desconocido en main:', error);
  }
});
