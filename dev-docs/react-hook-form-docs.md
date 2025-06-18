# React Hook Form Documentation

## Introduction

React Hook Form is a performant, flexible, and extensible forms library with easy validation. It minimizes re-renders and provides better performance compared to other form libraries.

## Installation

```bash
npm install react-hook-form
```

## Basic Usage

```tsx
import { useForm } from "react-hook-form"

type FormData = {
  firstName: string
  lastName: string
  email: string
}

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("firstName", { required: "First name is required" })}
        placeholder="First Name"
      />
      {errors.firstName && <p>{errors.firstName.message}</p>}

      <input
        {...register("lastName", { required: "Last name is required" })}
        placeholder="Last Name"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}

      <input
        {...register("email", { 
          required: "Email is required",
          pattern: {
            value: /^\S+@\S+$/i,
            message: "Invalid email address"
          }
        })}
        placeholder="Email"
        type="email"
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}
```

## Core Concepts

### useForm Hook
The main hook that provides form methods and state:

```tsx
const {
  register,
  handleSubmit,
  watch,
  setValue,
  getValues,
  reset,
  formState: { errors, isSubmitting, isValid }
} = useForm<FormData>({
  defaultValues: {
    firstName: "",
    lastName: "",
    email: ""
  }
})
```

### register
Registers input fields with validation rules:

```tsx
// Basic registration
<input {...register("fieldName")} />

// With validation
<input {...register("email", {
  required: "Email is required",
  pattern: {
    value: /^\S+@\S+$/i,
    message: "Invalid email"
  },
  minLength: {
    value: 5,
    message: "Minimum 5 characters"
  }
})} />
```

### handleSubmit
Handles form submission:

```tsx
const onSubmit = (data: FormData) => {
  console.log(data)
}

const onError = (errors: any) => {
  console.log(errors)
}

<form onSubmit={handleSubmit(onSubmit, onError)}>
```

## Validation

### Built-in Validation Rules
```tsx
<input {...register("username", {
  required: "Username is required",
  minLength: {
    value: 3,
    message: "Minimum 3 characters"
  },
  maxLength: {
    value: 20,
    message: "Maximum 20 characters"
  },
  pattern: {
    value: /^[A-Za-z0-9]+$/,
    message: "Only letters and numbers allowed"
  }
})} />
```

### Custom Validation
```tsx
<input {...register("age", {
  validate: {
    positive: (value) => parseInt(value) > 0 || "Age must be positive",
    lessThan100: (value) => parseInt(value) < 100 || "Age must be less than 100"
  }
})} />
```

### Async Validation
```tsx
<input {...register("username", {
  validate: async (value) => {
    const response = await fetch(`/api/check-username/${value}`)
    const isAvailable = await response.json()
    return isAvailable || "Username is taken"
  }
})} />
```

## Form State

### Accessing Form State
```tsx
const {
  formState: {
    errors,
    isSubmitting,
    isSubmitted,
    isValid,
    isDirty,
    dirtyFields,
    touchedFields
  }
} = useForm()
```

### Watching Fields
```tsx
// Watch specific field
const watchedField = watch("fieldName")

// Watch multiple fields
const [field1, field2] = watch(["field1", "field2"])

// Watch all fields
const watchedData = watch()

// Watch with callback
useEffect(() => {
  const subscription = watch((value, { name, type }) => {
    console.log(value, name, type)
  })
  return () => subscription.unsubscribe()
}, [watch])
```

## Advanced Features

### Default Values
```tsx
const form = useForm<FormData>({
  defaultValues: {
    firstName: "John",
    lastName: "Doe",
    preferences: {
      newsletter: true,
      notifications: false
    }
  }
})

// Or async default values
const form = useForm<FormData>({
  defaultValues: async () => {
    const response = await fetch("/api/user")
    return response.json()
  }
})
```

### Field Arrays
```tsx
import { useFieldArray } from "react-hook-form"

type FormData = {
  items: { name: string; quantity: number }[]
}

export default function DynamicForm() {
  const { control, register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      items: [{ name: "", quantity: 0 }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  })

  return (
    <form onSubmit={handleSubmit(console.log)}>
      {fields.map((field, index) => (
        <div key={field.id}>
          <input
            {...register(`items.${index}.name` as const)}
            placeholder="Item name"
          />
          <input
            {...register(`items.${index}.quantity` as const, {
              valueAsNumber: true
            })}
            type="number"
            placeholder="Quantity"
          />
          <button type="button" onClick={() => remove(index)}>
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => append({ name: "", quantity: 0 })}
      >
        Add Item
      </button>
      <button type="submit">Submit</button>
    </form>
  )
}
```

### Controller for Custom Components
```tsx
import { Controller } from "react-hook-form"

<Controller
  name="customField"
  control={control}
  rules={{ required: "This field is required" }}
  render={({ field, fieldState }) => (
    <CustomComponent
      {...field}
      error={fieldState.error?.message}
    />
  )}
/>
```

## Integration with UI Libraries

### With Material-UI
```tsx
import { Controller } from "react-hook-form"
import { TextField } from "@mui/material"

<Controller
  name="email"
  control={control}
  rules={{ required: "Email is required" }}
  render={({ field, fieldState }) => (
    <TextField
      {...field}
      label="Email"
      error={!!fieldState.error}
      helperText={fieldState.error?.message}
    />
  )}
/>
```

### With React Select
```tsx
import { Controller } from "react-hook-form"
import Select from "react-select"

<Controller
  name="country"
  control={control}
  render={({ field }) => (
    <Select
      {...field}
      options={countryOptions}
      placeholder="Select country"
    />
  )}
/>
```

## Schema Validation

### With Zod
```tsx
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  age: z.number().min(18, "Must be at least 18 years old")
})

type FormData = z.infer<typeof schema>

const form = useForm<FormData>({
  resolver: zodResolver(schema)
})
```

### With Yup
```tsx
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  age: yup.number().min(18, "Must be at least 18").required("Age is required")
})

const form = useForm({
  resolver: yupResolver(schema)
})
```

## Performance Optimization

### Reducing Re-renders
```tsx
// Use watch with specific field names
const firstName = watch("firstName")

// Use Controller for complex components
<Controller
  name="complexField"
  control={control}
  render={({ field }) => <ComplexComponent {...field} />}
/>

// Use formState selectively
const { errors, isSubmitting } = formState
```

### Debounced Validation
```tsx
import { useCallback } from "react"
import { debounce } from "lodash"

const debouncedValidation = useCallback(
  debounce(async (value: string) => {
    // Async validation logic
  }, 300),
  []
)

<input {...register("username", {
  validate: debouncedValidation
})} />
```

## Form Methods

### setValue
```tsx
// Set single value
setValue("firstName", "John")

// Set multiple values
setValue("firstName", "John", { shouldDirty: true })

// Set nested values
setValue("user.profile.name", "John")
```

### getValues
```tsx
// Get all values
const allValues = getValues()

// Get specific value
const firstName = getValues("firstName")

// Get multiple values
const [firstName, lastName] = getValues(["firstName", "lastName"])
```

### reset
```tsx
// Reset to default values
reset()

// Reset with new values
reset({
  firstName: "Jane",
  lastName: "Doe"
})

// Reset specific fields
reset({}, { keepValues: false, keepDefaultValues: true })
```

### trigger
```tsx
// Trigger validation for all fields
trigger()

// Trigger validation for specific field
trigger("email")

// Trigger validation for multiple fields
trigger(["firstName", "lastName"])
```

## Error Handling

### Custom Error Messages
```tsx
const {
  setError,
  clearErrors,
  formState: { errors }
} = useForm()

// Set custom error
setError("username", {
  type: "manual",
  message: "Username is already taken"
})

// Clear specific error
clearErrors("username")

// Clear all errors
clearErrors()
```

### Global Error Handling
```tsx
const onSubmit = async (data: FormData) => {
  try {
    await submitForm(data)
  } catch (error) {
    if (error.field) {
      setError(error.field, { message: error.message })
    } else {
      setError("root", { message: "Something went wrong" })
    }
  }
}
```

## Best Practices

1. **Use TypeScript** for better type safety
2. **Leverage schema validation** with Zod or Yup
3. **Minimize re-renders** by watching specific fields
4. **Use Controller** for custom components
5. **Implement proper error handling**
6. **Use defaultValues** for better UX
7. **Debounce async validation** to reduce API calls
8. **Reset form** after successful submission

React Hook Form provides excellent performance and developer experience for building forms in React applications with minimal boilerplate and maximum flexibility. 