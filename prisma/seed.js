const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
async function main() {
  const users = await prisma.users.createMany({
    data: [
      { firstName:"John",lastName:"Doe",email:"example@example.com",createdAt: new Date(),updateTimestamp: new Date(),age:20,gender:"male",status:"single" },
      { firstName:"John",lastName:"Doe",email:"example@example.com",createdAt: new Date(),updateTimestamp: new Date(),age:20,gender:"male",status:"single" }, // Duplicate unique key!
      { firstName:"John",lastName:"Doe",email:"example@example.com",createdAt: new Date(),updateTimestamp: new Date(),age:20,gender:"male",status:"single" },
      { firstName:"John",lastName:"Doe",email:"example@example.com",createdAt: new Date(),updateTimestamp: new Date(),age:20,gender:"male",status:"single" },
    ],
  });

  const companies = await prisma.companies.createMany({
    data: [
      { name: "Paul Hype Page & Co",age: 40,funding: -1,address:  "Singapore",private: false,createdAt: new Date(),updateTimestamp: new Date(),size: "small"},
      { name: "Paul Hype Page & Co",age: 40,funding: -1,address:  "Singapore",private: false,createdAt: new Date(),updateTimestamp: new Date(),size: "small"},
      { name: "Paul Hype Page & Co",age: 40,funding: -1,address:  "Singapore",private: false,createdAt: new Date(),updateTimestamp: new Date(),size: "small"}
    ],
  });

  console.log(users);
  console.log(companies);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
