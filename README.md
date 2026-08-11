# Topview Logger

Transit inspection and report tool for Stopwatch and Full Loop reports. Built as a Capacitor hybrid app targeting Android and iOS.

## Tech Stack

- **Frontend**: Vanilla HTML/CSS/JS (no framework)
- **Build**: Vite
- **Native**: Capacitor (Android + iOS)
- **Fleet Tracking**: Samsara API integration
- **Dispatch**: CountIf.net integration

## Project Structure

```
├── src/                  # Frontend source code
│   ├── index.html        # Main SPA entry point
│   ├── app.js            # Main app logic
│   ├── styles.css        # Stylesheet
│   ├── samsara_engine.js # Samsara fleet tracking
│   └── dispatch_engine.js
├── public/               # Static assets
├── android/              # Android Capacitor project
├── ios/                  # iOS Capacitor project
├── tests/                # Test files
└── .github/workflows/    # CI/CD pipelines
```

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Native Builds

```bash
# Sync web assets to native projects
npx cap sync

# Open Android Studio
npx cap open android

# Open Xcode
npx cap open ios
```

## CI/CD

- **iOS**: Builds on push to `main` via GitHub Actions (unsigned IPA)
- **Android**: Builds on push to `build-apk` branch via GitHub Actions (debug APK)
