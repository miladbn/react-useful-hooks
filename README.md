# React Useful Hooks

A collection of useful, production-ready React hooks built with TypeScript.

## Features

- 🚀 Built with TypeScript
- 📦 Published as ES modules and CommonJS
- 🧪 Fully tested with Vitest and React Testing Library
- 📚 Documented with Nextra
- 🔧 Built with Turborepo and pnpm workspaces
- 🎯 Zero dependencies (except React)
- 🔍 ESLint and Prettier configured
- 🐶 Git hooks with Husky and lint-staged

## Available Hooks

- `useToggle` - A hook for managing boolean state with toggle functionality

## Getting Started

### Installation

```bash
# Install the package
pnpm add @react-useful-hooks/react-hooks
```

### Usage

```tsx
import { useToggle } from "@react-useful-hooks/react-hooks";

function MyComponent() {
  const [isOpen, toggle, setOpen] = useToggle(false);

  return (
    <div>
      <button onClick={toggle}>{isOpen ? "Close" : "Open"}</button>
      {isOpen && <div>Content</div>}
    </div>
  );
}
```

## Development

### Prerequisites

- Node.js >= 18
- pnpm >= 9.0.0

### Setup

```bash
# Clone the repository
git clone https://github.com/your-username/react-useful-hooks.git
cd react-useful-hooks

# Install dependencies
pnpm install

# Start development
pnpm dev
```

### Project Structure

```
.
├── apps/
│   └── docs/          # Documentation site (Nextra)
├── packages/
│   └── react-hooks/   # React hooks package
└── package.json       # Root package.json
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build all packages
- `pnpm test` - Run tests
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier

## Documentation

Visit our [documentation site](http://localhost:3001) for detailed API reference and examples.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
