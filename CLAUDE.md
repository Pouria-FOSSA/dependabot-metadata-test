# CLAUDE.md - Development Guidelines

## Build & Run Commands
- Install: `yarn install` or `npm install`
- TypeScript check: `npx tsc --noEmit`
- Run script: `node <filename>.js` or `npx ts-node <filename>.ts`
- Test: Currently uses placeholder test script (`npm test`)

## Code Style
- TypeScript in strict mode with all strict type checking enabled
- CommonJS modules with ES2016 target
- forceConsistentCasingInFileNames & esModuleInterop enabled
- camelCase for variables/functions, PascalCase for types/classes
- Use explicit types instead of 'any' or type inference where possible
- Proper error handling with try/catch blocks for async operations
- Import organization: Node built-ins first, then external packages, then local

## Misc
- This is a test repository focused on Dependabot metadata functionality
- Default branch: main
- Full TypeScript type validation is required for all new code