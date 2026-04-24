# CI/CD Pipeline Demo

A React calculator app with a fully automated CI/CD pipeline using GitHub Actions.

Every push to `main` or `dev` automatically runs tests and builds the project.

## Pipeline Steps

| Step | Description |
|------|-------------|
| Checkout | Pull latest code |
| Setup Node | Configure Node.js 18 |
| Install deps | `npm ci` |
| Run tests | Jest unit tests |
| Build | Vite production build |
| Upload artifact | Save `dist/` for deployment |

## Tech Stack

- React + Vite
- Jest (unit testing)
- GitHub Actions (CI/CD)

## Getting Started

```bash
git clone https://github.com/YOUR_USERNAME/ci-pipeline-demo.git
cd ci-pipeline-demo
npm install
npm run dev
```

## Run Tests Locally

```bash
npm test
```

## Project Structure

```
ci-pipeline-demo/
├── .github/
│   └── workflows/
│       └── ci.yml        # GitHub Actions pipeline
├── src/
│   ├── App.jsx           # React UI
│   ├── calculator.js     # Core logic
│   └── calculator.test.js # Unit tests
├── package.json
└── README.md
```

## Author

Yosuf Sadat — [GitHub](https://github.com/YOUR_USERNAME)
