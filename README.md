# Custom Expo Starter Template

A robust, feature-rich starter template for modern React Native development using Expo. This template is pre-configured with essential tools, libraries, and best practices to jumpstart your mobile application development.

## 🚀 Features

### Core & Navigation

- **Expo SDK 54**: Built with the latest Expo tools and libraries.
- **Expo Dev Client**: Ready for custom development builds.
- **React Navigation 7**: Latest version using the new Static API for type-safe routing.
  - Native Stack Navigator
  - Bottom Tab Navigator
  - Deep linking configuration

### State Management & Data

- **Redux Toolkit**: Efficient global state management.
- **Redux Remember**: Persist your Redux state using custom storage drivers.
- **MMKV**: Ultra-fast synchronous storage (used as the default storage driver).
- **Expo Secure Store**: Encrypted storage for sensitive data (tokens, keys).
- **Axios**: HTTP client configuration.

### UI & UX

- **React Native Reanimated**: High-performance animations (60fps).
- **React Native Action Sheet**: Cross-platform native action sheets.
- **Custom Theming**: Centralized theme management system.
- **Skeleton Loading**: Pre-built skeletal loading components with animations.
- **Safe Area Context**: Handling notch and safe areas correctly.

### Developer Experience

- **TypeScript**: Strict type checking for better code quality.
- **ESLint & Prettier**: Enforced coding standards and automatic formatting.
- **Custom Lint Rules**:
  - Auto-removal of unused imports.
  - Restrictions on direct `react-redux` hook imports (enforcing typed hooks).

## 📂 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── bottom-sheets/   # Action sheets and modals
│   ├── skeletons/       # Loading placeholders
│   └── ui/              # Base UI elements (Buttons, FABs, etc.)
├── configs/             # Configuration files (Env, Constants)
├── navigation/          # Navigation setup and screens
├── services/            # External services and API drivers
│   └── storage-driver/  # MMKV and SecureStore wrappers
├── store/               # Redux setup
│   ├── endpoints/       # API endpoints definitions
│   ├── slices/          # Redux slices (reducers/actions)
│   └── index.ts         # Store configuration
└── theme/               # Theme definitions and manager
```

## 🛠 Getting Started

### Prerequisites

- Node.js
- pnpm (recommended) or npm/yarn

### Installation

1.  **Create a new project using this template:**

    ```bash
    npx create-expo-app -t https://github.com/AmbaC0de/expo-starter-template
    ```

    Or clone the repository manually:

    ```bash
    git clone https://github.com/AmbaC0de/expo-starter-template.git my-app
    cd my-app
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```

### Running the App

This project uses **Development Builds**. You cannot use the standard "Expo Go" app for some native features (like MMKV).

1.  **Start the development server:**

    ```bash
    npx expo start
    ```

2.  **Run on Emulator/Simulator:**

    ```bash
    pnpm android
    # or
    pnpm ios
    ```

    _Note: The first time you run this, it will build the native app on your device/emulator._

## 🧹 Linting & Code Quality

The project includes custom ESLint rules to maintain code quality.

- **Fix linting issues automatically:**
  ```bash
  npx eslint . --fix
  ```

This will automatically remove unused imports and fix formatting issues.

## 📦 Key Dependencies

| Package                      | Usage                    |
| ---------------------------- | ------------------------ |
| `@react-navigation/native`   | Navigation               |
| `@reduxjs/toolkit`           | State Management         |
| `react-native-mmkv`          | High performance storage |
| `react-native-reanimated`    | Animations               |
| `react-native-actions-sheet` | Bottom sheets            |
| `expo-secure-store`          | Secure storage           |
| `axios`                      | Networking               |

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
