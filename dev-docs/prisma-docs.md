# Prisma Documentation

## Introduction

Prisma is a next-generation TypeScript ORM that consists of these tools:
- **Prisma Client**: Auto-generated and type-safe query builder
- **Prisma Migrate**: Migration system
- **Prisma Studio**: GUI to view and edit data

## Installation

```bash
npm install prisma @prisma/client
npx prisma init
```

## Basic Setup

### Schema Definition
```prisma
// prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql" // or "mysql", "sqlite", "sqlserver"
  url      = env("DATABASE_URL")
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  name      String?
  posts     Post[]
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  content   String?
  published Boolean  @default(false)
  author    User     @relation(fields: [authorId], references: [id])
  authorId  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

### Generate Client
```bash
npx prisma generate
```

### Database Migration
```bash
npx prisma migrate dev --name init
```

## Client Usage

### Basic Queries

#### Create
```typescript
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create single record
const user = await prisma.user.create({
  data: {
    email: 'john@example.com',
    name: 'John Doe'
  }
})

// Create with relations
const userWithPost = await prisma.user.create({
  data: {
    email: 'jane@example.com',
    name: 'Jane Doe',
    posts: {
      create: [
        {
          title: 'My First Post',
          content: 'Hello World!'
        }
      ]
    }
  },
  include: {
    posts: true
  }
})

// Create many
const users = await prisma.user.createMany({
  data: [
    { email: 'user1@example.com', name: 'User 1' },
    { email: 'user2@example.com', name: 'User 2' }
  ]
})
```

#### Read
```typescript
// Find unique
const user = await prisma.user.findUnique({
  where: { email: 'john@example.com' }
})

// Find first
const firstUser = await prisma.user.findFirst({
  where: { name: { contains: 'John' } }
})

// Find many
const users = await prisma.user.findMany({
  where: {
    posts: {
      some: {
        published: true
      }
    }
  },
  include: {
    posts: true
  },
  orderBy: {
    createdAt: 'desc'
  },
  take: 10,
  skip: 0
})

// Count
const userCount = await prisma.user.count({
  where: {
    posts: {
      some: {
        published: true
      }
    }
  }
})
```

#### Update
```typescript
// Update single
const updatedUser = await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Updated Name' }
})

// Update many
const updateResult = await prisma.user.updateMany({
  where: { name: null },
  data: { name: 'Default Name' }
})

// Upsert (update or create)
const upsertedUser = await prisma.user.upsert({
  where: { email: 'john@example.com' },
  update: { name: 'John Updated' },
  create: {
    email: 'john@example.com',
    name: 'John Doe'
  }
})
```

#### Delete
```typescript
// Delete single
const deletedUser = await prisma.user.delete({
  where: { id: 1 }
})

// Delete many
const deleteResult = await prisma.user.deleteMany({
  where: {
    createdAt: {
      lt: new Date('2023-01-01')
    }
  }
})
```

## Advanced Queries

### Filtering
```typescript
// String filters
const users = await prisma.user.findMany({
  where: {
    name: {
      contains: 'John',      // LIKE '%John%'
      startsWith: 'J',       // LIKE 'J%'
      endsWith: 'Doe',       // LIKE '%Doe'
      equals: 'John Doe',    // = 'John Doe'
      not: 'Admin'           // != 'Admin'
    }
  }
})

// Number filters
const posts = await prisma.post.findMany({
  where: {
    authorId: {
      in: [1, 2, 3],         // IN (1, 2, 3)
      notIn: [4, 5],         // NOT IN (4, 5)
      lt: 10,                // < 10
      lte: 10,               // <= 10
      gt: 5,                 // > 5
      gte: 5                 // >= 5
    }
  }
})

// Date filters
const recentPosts = await prisma.post.findMany({
  where: {
    createdAt: {
      gte: new Date('2023-01-01'),
      lt: new Date('2024-01-01')
    }
  }
})

// Boolean filters
const publishedPosts = await prisma.post.findMany({
  where: {
    published: true
  }
})
```

### Relations
```typescript
// Include relations
const userWithPosts = await prisma.user.findUnique({
  where: { id: 1 },
  include: {
    posts: true
  }
})

// Select specific fields
const userWithPostTitles = await prisma.user.findUnique({
  where: { id: 1 },
  select: {
    name: true,
    email: true,
    posts: {
      select: {
        title: true,
        published: true
      }
    }
  }
})

// Nested filtering
const usersWithPublishedPosts = await prisma.user.findMany({
  where: {
    posts: {
      some: {
        published: true
      }
    }
  },
  include: {
    posts: {
      where: {
        published: true
      }
    }
  }
})
```

### Aggregations
```typescript
// Count, sum, avg, min, max
const stats = await prisma.post.aggregate({
  _count: {
    id: true
  },
  _avg: {
    authorId: true
  },
  _sum: {
    authorId: true
  },
  _min: {
    createdAt: true
  },
  _max: {
    createdAt: true
  },
  where: {
    published: true
  }
})

// Group by
const postsByAuthor = await prisma.post.groupBy({
  by: ['authorId'],
  _count: {
    id: true
  },
  _avg: {
    authorId: true
  },
  having: {
    authorId: {
      _avg: {
        gt: 5
      }
    }
  }
})
```

## Transactions

### Sequential Transactions
```typescript
const [user, post] = await prisma.$transaction([
  prisma.user.create({
    data: { email: 'user@example.com', name: 'User' }
  }),
  prisma.post.create({
    data: { title: 'Post', authorId: 1 }
  })
])
```

### Interactive Transactions
```typescript
const result = await prisma.$transaction(async (tx) => {
  // Create user
  const user = await tx.user.create({
    data: { email: 'user@example.com', name: 'User' }
  })

  // Create post for the user
  const post = await tx.post.create({
    data: {
      title: 'First Post',
      authorId: user.id
    }
  })

  // Update user with post count
  await tx.user.update({
    where: { id: user.id },
    data: { postCount: 1 }
  })

  return { user, post }
})
```

## Raw Queries

### Raw SQL
```typescript
// Raw query
const users = await prisma.$queryRaw`
  SELECT * FROM "User" WHERE "name" LIKE ${`%John%`}
`

// Raw execute
const result = await prisma.$executeRaw`
  UPDATE "User" SET "name" = 'Updated' WHERE "id" = ${userId}
`

// Unsafe raw (for dynamic queries)
const tableName = 'User'
const users = await prisma.$queryRawUnsafe(
  `SELECT * FROM "${tableName}" WHERE "id" > $1`,
  10
)
```

## Schema Features

### Data Types
```prisma
model Example {
  id          Int       @id @default(autoincrement())
  string      String
  optionalStr String?
  int         Int
  float       Float
  boolean     Boolean
  datetime    DateTime  @default(now())
  json        Json
  bytes       Bytes
  decimal     Decimal
  bigint      BigInt
  
  // Arrays (PostgreSQL only)
  tags        String[]
  numbers     Int[]
}
```

### Attributes
```prisma
model User {
  id       Int    @id @default(autoincrement())
  email    String @unique
  name     String @default("Anonymous")
  role     Role   @default(USER)
  posts    Post[]
  
  @@unique([email, name])
  @@index([email])
  @@map("users") // Custom table name
}

enum Role {
  USER
  ADMIN
  MODERATOR
}
```

### Relations
```prisma
// One-to-many
model User {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

model Post {
  id       Int  @id @default(autoincrement())
  author   User @relation(fields: [authorId], references: [id])
  authorId Int
}

// Many-to-many
model Post {
  id         Int        @id @default(autoincrement())
  categories Category[]
}

model Category {
  id    Int    @id @default(autoincrement())
  posts Post[]
}

// One-to-one
model User {
  id      Int      @id @default(autoincrement())
  profile Profile?
}

model Profile {
  id     Int  @id @default(autoincrement())
  user   User @relation(fields: [userId], references: [id])
  userId Int  @unique
}
```

## Migrations

### Development Migrations
```bash
# Create and apply migration
npx prisma migrate dev --name add-user-table

# Reset database
npx prisma migrate reset

# Deploy migrations (production)
npx prisma migrate deploy

# Check migration status
npx prisma migrate status
```

### Schema Push (Prototyping)
```bash
# Push schema changes without migration
npx prisma db push
```

## Best Practices

### Client Management
```typescript
// Singleton pattern
import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
```

### Error Handling
```typescript
import { Prisma } from '@prisma/client'

try {
  const user = await prisma.user.create({
    data: { email: 'duplicate@example.com' }
  })
} catch (error) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      console.log('Unique constraint violation')
    }
  }
  throw error
}
```

### Performance Optimization
```typescript
// Use select to fetch only needed fields
const users = await prisma.user.findMany({
  select: {
    id: true,
    name: true,
    email: true
  }
})

// Use pagination
const users = await prisma.user.findMany({
  take: 10,
  skip: page * 10,
  orderBy: { createdAt: 'desc' }
})

// Use connection pooling
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})
```

## Testing

### Test Database Setup
```typescript
// tests/setup.ts
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TEST_DATABASE_URL
    }
  }
})

beforeEach(async () => {
  // Clean database
  await prisma.post.deleteMany()
  await prisma.user.deleteMany()
})

afterAll(async () => {
  await prisma.$disconnect()
})
```

### Example Test
```typescript
import { prisma } from '../lib/prisma'

describe('User CRUD', () => {
  it('should create a user', async () => {
    const user = await prisma.user.create({
      data: {
        email: 'test@example.com',
        name: 'Test User'
      }
    })

    expect(user.email).toBe('test@example.com')
    expect(user.name).toBe('Test User')
    expect(user.id).toBeDefined()
  })

  it('should find a user by email', async () => {
    await prisma.user.create({
      data: {
        email: 'find@example.com',
        name: 'Find User'
      }
    })

    const user = await prisma.user.findUnique({
      where: { email: 'find@example.com' }
    })

    expect(user).toBeTruthy()
    expect(user?.name).toBe('Find User')
  })
})
```

## Environment Configuration

```env
# .env
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"
TEST_DATABASE_URL="postgresql://username:password@localhost:5432/test_mydb?schema=public"
```

Prisma provides excellent TypeScript integration, type safety, and developer experience for database operations in modern applications. 