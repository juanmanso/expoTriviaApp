# Trivia App

<div style="width: 100px; height: 100px; border-radius: 50%; overflow: hidden; background-color: blue;"> 
    <img alt="Trivia App Logo" src="./assets/icon.png" width="100%"/>
</div>

</br>

## 👋 Introduction

Trivia application that provides 10 questions to be answered by the user. The basic workflow is:

```
Home Screen -> Questions -> Results page
    ^                           │
    │    PLAY AGAIN Button      │
    └────────────────────────────
```

</br>

## 🏃 How to run the app

1. **Run `yarn install`**

This will install both runtime project dependencies and developer tools listed in `package.json`

2. [Optional] **Run `yarn start`**

Starts the Expo bundler server that opens a web page for development (both virtual and physical devices). You can select there which device to use.

3. **Run `yarn ios` and/or `yarn android`**

It builds the app iOS and Android respectively. If no physical devices are bound, emulators or simulators are opened to do so. Also, if the development server was not already running, it starts it on a new terminal window.

</br>

## 🔬 Requirements

To start your local environment, you need to follow this steps. TL;DR: follow [the official React Native doc](https://reactnative.dev/docs/environment-setup)

### 🍏 MacOS development

With HomeBrew, install Node.js, Watchman and Java 8 JDK.

```
brew install node
brew install watchman
brew install --cask adoptopenjdk/openjdk/adoptopenjdk8
```

For iOS development, install XCode and its command line tools. Additionally, install Cocoapods:

```
sudo gem install cocoapods
```

Lastly, for Android you need Android Studio and its SDK. For detailed instructions, check [the official documentation](https://reactnative.dev/docs/environment-setup)

### 🤖 Windows development

Install Node.js and Java 8 JDK with Chocolately:

```
choco install -y nodejs.install openjdk8
```

Then, install Android Studio and its SDK. For detailed instructions, check [the official documentation](https://reactnative.dev/docs/environment-setup).

</br>

## 👐 Contributing

Please refer to our [contributing guidelines](./CONTRIBUTING.md) to maintain an organized pattern regarding contributions.
