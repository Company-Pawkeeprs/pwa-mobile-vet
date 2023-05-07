import { config } from 'dotenv';

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
        package: 'com.pawkeepr.app',
        adaptiveIcon: {
            foregroundImage: "./assets/adaptive-icon.png",
            backgroundColor: "#ffffff"
        }
    },
    web: {
        favicon: "./assets/favicon.png"
    },
    extra: {
        "eas": {
            "projectId": "a7e82d1b-a58f-4302-b4b0-2abfd8011524"
        },
        WEB_URL: process.env.WEB_URL
    }
};
