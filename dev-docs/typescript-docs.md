# TypeScript Documentation

## Introduction

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. It adds static type definitions to JavaScript, enabling better IDE support, early error detection, and improved code maintainability.

## Installation

### Global Installation
```bash
npm install -g typescript
```

### Project Installation
```bash
npm install -D typescript @types/node
```

### Initialize TypeScript
```bash
npx tsc --init
```

## Basic Types

### Primitive Types
```typescript
// String
let name: string = "John";

// Number
let age: number = 30;

// Boolean
let isActive: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Tuple
let tuple: [string, number] = ["hello", 42];

// Enum
enum Color {
  Red,
  Green,
  Blue
}
let color: Color = Color.Red;

// Any (avoid when possible)
let value: any = 42;

// Void
function logMessage(): void {
  console.log("Hello");
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never
function error(message: string): never {
  throw new Error(message);
}
```

## Interfaces

### Basic Interface
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive?: boolean; // Optional property
  readonly createdAt: Date; // Read-only property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};
```

### Function Interfaces
```typescript
interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = (src, sub) => {
  return src.includes(sub);
};
```

### Extending Interfaces
```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const dog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever"
};
```

## Classes

### Basic Class
```typescript
class Person {
  private _name: string;
  public age: number;
  protected email: string;

  constructor(name: string, age: number, email: string) {
    this._name = name;
    this.age = age;
    this.email = email;
  }

  public getName(): string {
    return this._name;
  }

  public setName(name: string): void {
    this._name = name;
  }
}
```

### Abstract Classes
```typescript
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}
```

### Implementing Interfaces
```typescript
interface Flyable {
  fly(): void;
}

class Bird implements Flyable {
  fly(): void {
    console.log("Flying...");
  }
}
```

## Generics

### Generic Functions
```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("hello");
let output2 = identity(42); // Type inference
```

### Generic Interfaces
```typescript
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

### Generic Classes
```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

### Generic Constraints
```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
```

## Union and Intersection Types

### Union Types
```typescript
type StringOrNumber = string | number;

function padLeft(value: string, padding: StringOrNumber) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

### Intersection Types
```typescript
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
```

## Type Aliases

```typescript
type Point = {
  x: number;
  y: number;
};

type ID = number | string;

type EventHandler<T> = (event: T) => void;
```

## Utility Types

### Partial
```typescript
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
```

### Required
```typescript
interface Props {
  a?: number;
  b?: string;
}

const obj: Required<Props> = { a: 5, b: "hello" };
```

### Pick
```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
```

### Omit
```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, "description">;
```

### Record
```typescript
type CatName = "miffy" | "boris" | "mordred";

interface CatInfo {
  age: number;
  breed: string;
}

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
```

## Advanced Types

### Conditional Types
```typescript
type ApiResponse<T> = T extends string ? string : number;

type StringResponse = ApiResponse<string>; // string
type NumberResponse = ApiResponse<number>; // number
```

### Mapped Types
```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
```

### Template Literal Types
```typescript
type World = "world";
type Greeting = `hello ${World}`; // "hello world"

type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
```

## Modules

### Exporting
```typescript
// math.ts
export function add(x: number, y: number): number {
  return x + y;
}

export const PI = 3.14159;

export default class Calculator {
  add(x: number, y: number): number {
    return x + y;
  }
}
```

### Importing
```typescript
// app.ts
import Calculator, { add, PI } from "./math";
import * as math from "./math";

const calc = new Calculator();
const result = add(5, 3);
```

## Configuration (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM"],
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "declaration": true,
    "sourceMap": true,
    "removeComments": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noImplicitThis": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## Best Practices

1. **Use strict mode** for better type checking
2. **Prefer interfaces over type aliases** for object shapes
3. **Use readonly for immutable data**
4. **Leverage utility types** for type transformations
5. **Avoid `any`** - use `unknown` or proper types
6. **Use type guards** for runtime type checking
7. **Enable strict compiler options**
8. **Use meaningful type names**

## Type Guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // TypeScript knows value is string here
    console.log(value.toUpperCase());
  }
}
```

## Decorators

```typescript
function logged(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyKey} with`, args);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @logged
  add(x: number, y: number): number {
    return x + y;
  }
}
```

TypeScript provides powerful static typing capabilities that enhance JavaScript development with better tooling, error detection, and code maintainability. 