# Zod Documentation

## Introduction

Zod is a TypeScript-first schema validation library. It provides a simple way to validate data with excellent TypeScript integration and runtime type safety.

## Installation

```bash
npm install zod
```

## Basic Usage

```typescript
import { z } from "zod"

// Define a schema
const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string().email()
})

// Infer the TypeScript type
type User = z.infer<typeof UserSchema>

// Validate data
const userData = {
  name: "John Doe",
  age: 30,
  email: "john@example.com"
}

try {
  const validUser = UserSchema.parse(userData)
  console.log(validUser) // Type-safe User object
} catch (error) {
  console.error(error.errors)
}
```

## Primitive Types

### String
```typescript
const StringSchema = z.string()

// With validations
const EmailSchema = z.string().email("Invalid email")
const URLSchema = z.string().url("Invalid URL")
const UUIDSchema = z.string().uuid("Invalid UUID")
const MinLengthSchema = z.string().min(3, "Minimum 3 characters")
const MaxLengthSchema = z.string().max(100, "Maximum 100 characters")
const RegexSchema = z.string().regex(/^[A-Z]+$/, "Only uppercase letters")
```

### Number
```typescript
const NumberSchema = z.number()

// With validations
const PositiveSchema = z.number().positive("Must be positive")
const IntegerSchema = z.number().int("Must be integer")
const MinSchema = z.number().min(0, "Minimum value is 0")
const MaxSchema = z.number().max(100, "Maximum value is 100")
```

### Boolean
```typescript
const BooleanSchema = z.boolean()
```

### Date
```typescript
const DateSchema = z.date()

// With validations
const FutureDateSchema = z.date().min(new Date(), "Must be in the future")
const PastDateSchema = z.date().max(new Date(), "Must be in the past")
```

## Complex Types

### Arrays
```typescript
const StringArraySchema = z.array(z.string())
const NumberArraySchema = z.array(z.number())

// With validations
const NonEmptyArraySchema = z.array(z.string()).nonempty("Array cannot be empty")
const MinLengthArraySchema = z.array(z.string()).min(2, "At least 2 items required")
const MaxLengthArraySchema = z.array(z.string()).max(10, "Maximum 10 items allowed")
```

### Objects
```typescript
const PersonSchema = z.object({
  name: z.string(),
  age: z.number(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    zipCode: z.string()
  })
})

type Person = z.infer<typeof PersonSchema>
```

### Optional and Nullable
```typescript
const OptionalSchema = z.object({
  name: z.string(),
  nickname: z.string().optional(), // string | undefined
  description: z.string().nullable(), // string | null
  metadata: z.string().nullish() // string | null | undefined
})
```

### Unions
```typescript
const StringOrNumberSchema = z.union([z.string(), z.number()])
const StatusSchema = z.enum(["pending", "approved", "rejected"])
const LiteralSchema = z.literal("admin")

// Discriminated unions
const ResponseSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("success"), data: z.string() }),
  z.object({ type: z.literal("error"), error: z.string() })
])
```

## Advanced Validation

### Custom Validation
```typescript
const PasswordSchema = z.string()
  .min(8, "Password must be at least 8 characters")
  .refine((val) => /[A-Z]/.test(val), "Must contain uppercase letter")
  .refine((val) => /[a-z]/.test(val), "Must contain lowercase letter")
  .refine((val) => /\d/.test(val), "Must contain number")
  .refine((val) => /[!@#$%^&*]/.test(val), "Must contain special character")
```

### Transform
```typescript
const NumberStringSchema = z.string().transform((val) => parseInt(val))
const TrimmedStringSchema = z.string().transform((val) => val.trim())

// With validation after transform
const PositiveNumberStringSchema = z.string()
  .transform((val) => parseInt(val))
  .refine((val) => val > 0, "Must be positive number")
```

### Preprocess
```typescript
const PreprocessedSchema = z.preprocess(
  (val) => String(val).toLowerCase(),
  z.enum(["admin", "user", "guest"])
)
```

## Error Handling

### Basic Error Handling
```typescript
const result = UserSchema.safeParse(userData)

if (result.success) {
  console.log(result.data) // Valid data
} else {
  console.log(result.error.errors) // Validation errors
}
```

### Custom Error Messages
```typescript
const UserSchema = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string"
  }),
  age: z.number({
    required_error: "Age is required",
    invalid_type_error: "Age must be a number"
  }).min(18, "Must be at least 18 years old")
})
```

### Error Formatting
```typescript
const formatZodError = (error: z.ZodError) => {
  return error.errors.map(err => ({
    field: err.path.join('.'),
    message: err.message
  }))
}

try {
  UserSchema.parse(invalidData)
} catch (error) {
  if (error instanceof z.ZodError) {
    const formattedErrors = formatZodError(error)
    console.log(formattedErrors)
  }
}
```

## Schema Composition

### Extending Schemas
```typescript
const BaseUserSchema = z.object({
  name: z.string(),
  email: z.string().email()
})

const AdminUserSchema = BaseUserSchema.extend({
  role: z.literal("admin"),
  permissions: z.array(z.string())
})

// Merge schemas
const MergedSchema = BaseUserSchema.merge(z.object({
  createdAt: z.date()
}))
```

### Partial and Required
```typescript
const UserSchema = z.object({
  name: z.string(),
  email: z.string(),
  age: z.number()
})

// Make all fields optional
const PartialUserSchema = UserSchema.partial()

// Make specific fields optional
const PartialNameSchema = UserSchema.partial({ name: true })

// Make all fields required (opposite of partial)
const RequiredUserSchema = UserSchema.required()
```

### Pick and Omit
```typescript
const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
  createdAt: z.date()
})

// Pick specific fields
const PublicUserSchema = UserSchema.pick({
  id: true,
  name: true,
  email: true
})

// Omit specific fields
const UserWithoutPasswordSchema = UserSchema.omit({
  password: true
})
```

## API Integration

### Request Validation
```typescript
import { z } from "zod"

const CreateUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  age: z.number().min(18, "Must be at least 18")
})

// Express.js middleware
const validateCreateUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    CreateUserSchema.parse(req.body)
    next()
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors })
    }
    next(error)
  }
}

// Usage
app.post('/users', validateCreateUser, (req, res) => {
  // req.body is now type-safe
  const userData = req.body as z.infer<typeof CreateUserSchema>
  // Handle user creation
})
```

### Response Validation
```typescript
const APIResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown(),
  message: z.string().optional()
})

const fetchUserData = async (id: string) => {
  const response = await fetch(`/api/users/${id}`)
  const rawData = await response.json()
  
  // Validate response
  const validatedData = APIResponseSchema.parse(rawData)
  return validatedData
}
```

## Form Integration

### With React Hook Form
```typescript
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old")
})

type FormData = z.infer<typeof FormSchema>

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(FormSchema)
  })

  const onSubmit = (data: FormData) => {
    // Data is already validated and type-safe
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      
      <input {...register("lastName")} />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      
      <input {...register("email")} type="email" />
      {errors.email && <p>{errors.email.message}</p>}
      
      <input {...register("age", { valueAsNumber: true })} type="number" />
      {errors.age && <p>{errors.age.message}</p>}
      
      <button type="submit">Submit</button>
    </form>
  )
}
```

## Environment Variables Validation

```typescript
import { z } from "zod"

const EnvSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().transform((val) => parseInt(val)),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32, "JWT secret must be at least 32 characters"),
  API_KEY: z.string().optional()
})

// Validate environment variables at startup
const env = EnvSchema.parse(process.env)

// Now env is type-safe
console.log(`Server running on port ${env.PORT}`)
```

## Testing with Zod

```typescript
import { z } from "zod"

describe("User Schema Validation", () => {
  const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    age: z.number().min(18)
  })

  it("should validate correct user data", () => {
    const validUser = {
      name: "John Doe",
      email: "john@example.com",
      age: 25
    }

    expect(() => UserSchema.parse(validUser)).not.toThrow()
  })

  it("should reject invalid email", () => {
    const invalidUser = {
      name: "John Doe",
      email: "invalid-email",
      age: 25
    }

    expect(() => UserSchema.parse(invalidUser)).toThrow()
  })

  it("should reject underage user", () => {
    const underageUser = {
      name: "Jane Doe",
      email: "jane@example.com",
      age: 16
    }

    expect(() => UserSchema.parse(underageUser)).toThrow()
  })
})
```

## Best Practices

1. **Use TypeScript inference** with `z.infer<typeof Schema>`
2. **Provide clear error messages** for better user experience
3. **Validate at boundaries** (API endpoints, form submissions)
4. **Use safeParse** for non-throwing validation
5. **Compose schemas** for reusability
6. **Validate environment variables** at application startup
7. **Use discriminated unions** for complex data structures
8. **Transform data** when needed with `.transform()`

## Performance Tips

1. **Reuse schema instances** instead of creating new ones
2. **Use `.safeParse()`** to avoid try/catch overhead
3. **Validate only necessary data** with `.pick()` or `.omit()`
4. **Cache compiled schemas** for repeated validations

Zod provides excellent TypeScript integration and runtime validation, making it perfect for building type-safe applications with reliable data validation. 