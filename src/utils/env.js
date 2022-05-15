import { Platform } from "react-native";

const liveHost = "https://us-central1-photohol-e0497.cloudfunctions.net";
const localHost = "http://localhost:5001/photohol-e0497/us-central1";

export const isDevelopment = process.env.NODE_ENV === "development";
export const isAndroid = Platform.OS === "android";
export const isMock = false;
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
