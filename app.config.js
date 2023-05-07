import {config} from 'dotenv';

config()

export default {
    name: "pwa-mobile-vet",
    slug: "pwa-mobile-vet",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
        supportsTablet: true
    },
    android: {
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#ffffff"
        }
    },
    web: {
        favicon: "./assets/favicon.png"
    },
    extra: {
        eas: {
            projectId: "7883a649-9bf6-44f6-9d83-852a71af6bd3"
        },
        WEB_URL: process.env.WEB_URL
    }
};
