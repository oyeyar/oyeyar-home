# Next.js Boilerplate

A reusable and scalable Next.js boilerplate for building web applications and products.

This boilerplate is maintained as part of the OyeYar development ecosystem and provides a clean foundation for starting new projects with consistent tooling, code quality, and project structure.

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)
- GitHub Actions

---

## 📁 Project Structure

```text
nextjs-boilerplate/
│
├── app/                    # Next.js App Router
│   ├── api/                # API routes
│   │   └── health/         # Health check endpoint
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── common/             # Shared application components
│   └── ui/                 # Reusable UI components
│
├── constants/              # Application constants
├── features/               # Feature-based modules
├── hooks/                  # Custom React hooks
├── lib/                    # Library configurations and integrations
├── services/               # External services and API logic
├── types/                  # Shared TypeScript types
├── utils/                  # Utility functions
├── public/                 # Static assets
│
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI workflow
│
├── .husky/
│   └── pre-commit          # Git pre-commit hook
│
├── .env.example            # Environment variable template
├── .prettierrc             # Prettier configuration
├── .prettierignore
├── eslint.config.mjs
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

# 🛠 Getting Started

## 1. Create a Project from This Template

Use this repository as a GitHub template to create a new project.

After creating the repository:

```bash
git clone <your-repository-url>
cd <project-name>
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Update the variables according to your project requirements.

Example:

```env
NEXT_PUBLIC_APP_NAME=My App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> Never commit `.env.local` or environment files containing secrets.

---

## 4. Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 📜 Available Scripts

## Development

```bash
npm run dev
```

Starts the Next.js development server.

---

## Build

```bash
npm run build
```

Creates a production build.

---

## Start Production Server

```bash
npm run start
```

Runs the production build locally.

---

## Lint

```bash
npm run lint
```

Runs ESLint across the project.

---

## Format Code

```bash
npm run format
```

Formats the project using Prettier.

---

## Check Formatting

```bash
npm run format:check
```

Checks whether files follow the configured Prettier rules.

This command is also used in CI.

---

# 🧹 Code Quality

This boilerplate includes automated code quality checks.

## Prettier

Prettier provides consistent code formatting across the project.

Configuration:

```text
.prettierrc
```

---

## ESLint

ESLint helps identify code quality and potential issues.

Run:

```bash
npm run lint
```

---

## Pre-commit Hooks

Husky and lint-staged run checks on staged files before every commit.

```text
git commit
    ↓
lint-staged
    ↓
ESLint
    ↓
Prettier
    ↓
Commit
```

If the checks fail, the commit will not be completed.

---

# 🔄 Continuous Integration

GitHub Actions automatically runs checks when code is pushed or a pull request is created.

Current CI pipeline:

```text
Push / Pull Request
        ↓
Install Dependencies
        ↓
Check Formatting
        ↓
Run ESLint
        ↓
Build Application
```

The workflow is located at:

```text
.github/workflows/ci.yml
```

This boilerplate does not include deployment configuration.

Deployment should be configured based on the requirements of each individual project.

---

# ❤️ Project Architecture

The project follows a modular structure.

## `components`

Reusable UI and shared components.

## `features`

Feature-specific modules.

Example:

```text
features/
└── authentication/
    ├── components/
    ├── hooks/
    ├── services/
    └── types/
```

## `services`

External API calls and service integrations.

## `lib`

Third-party library configurations and shared application setup.

Examples:

```text
lib/
├── api.ts
├── database.ts
└── auth.ts
```

## `utils`

Reusable helper functions.

## `types`

Shared TypeScript types and interfaces.

## `constants`

Application-wide constants.

---

# 🏥 Health Check

The boilerplate includes a simple health check API.

```text
GET /api/health
```

Example:

```text
http://localhost:3000/api/health
```

Response:

```json
{
  "success": true,
  "message": "Application is healthy",
  "timestamp": "2026-08-26T00:00:00.000Z"
}
```

This endpoint can later be used for deployment, uptime monitoring, or infrastructure health checks.

---

# 🌱 Creating a New Project

Recommended workflow:

```text
Use Template
      ↓
Create New Repository
      ↓
Clone Repository
      ↓
Update Project Name
      ↓
Configure .env.local
      ↓
Install Dependencies
      ↓
Start Development
```

After creating a project from this boilerplate, remember to update:

- `package.json`
- `app/layout.tsx`
- `.env.example`
- Application metadata
- Favicon
- README.md

---

# 📌 Boilerplate Principles

This boilerplate is designed around a few principles:

- Keep the base lightweight.
- Avoid unnecessary dependencies.
- Use TypeScript by default.
- Maintain consistent code formatting.
- Automate code quality checks.
- Keep project structure scalable.
- Add project-specific tools only when required.
- Keep deployment independent from the base template.

---

# 🗺 Roadmap

Future additions may include:

- Unit testing
- Component testing
- End-to-end testing
- API client configuration
- Error handling utilities
- Logging
- Authentication templates
- Database integrations
- Docker configuration

These should be added carefully to avoid turning the boilerplate into an unnecessarily large starter project.

---

## Built for OyeYar

This boilerplate is intended to provide a consistent development foundation for projects built under the **OyeYar** ecosystem.

**Ideas into products. Products into impact.**
