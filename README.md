This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
### Login 
- Accepts email and password input
- Validates input
- Navigates to Home screen on submit

### Home
- Carousel component with auto slide images
- Horizontal scrollable cards
- Card with image taking 80% height
- Title and price in remaining 20% section
- Bottom tab bar navigation
- Home tab
- Library tab
- Account tab

### Library
-Simple screen with Library title

### Account
- Simple screen with Account title

### Navigation
- React Navigation for routing and navigation
- Stack navigator for login flow
- Bottom tab navigator for main app navigation

### External Libraries
- React Native Snap Carousel for carousel
- React Native Gesture Handler for interactions
- React Native Reanimated for animations
- React Native Vector Icons for tab bar icons

### Running the app
- npm install to install dependencies
- npx react-native run-ios to run iOS simulator
- npx react-native run-android to run Android emulator

This covers the core screens, navigation structure, styling and libraries used in the app. Additional features and integrations can be added as per requirements.