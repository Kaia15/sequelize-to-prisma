-- CreateTable
CREATE TABLE "Companies" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "age" INTEGER NOT NULL,
    "funding" INTEGER,
    "address" VARCHAR(255) DEFAULT 'Singapore',
    "private" BOOLEAN DEFAULT true,
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updateTimestamp" TIMESTAMPTZ(6) NOT NULL,
    "profit" INTEGER,
    "type" VARCHAR(255),

    CONSTRAINT "Companies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SequelizeMeta" (
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "SequelizeMeta_pkey" PRIMARY KEY ("name")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255),
    "createdAt" TIMESTAMPTZ(6) NOT NULL,
    "updateTimestamp" TIMESTAMPTZ(6) NOT NULL,
    "age" INTEGER,
    "gender" VARCHAR(255),
    "status" VARCHAR(255),

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

