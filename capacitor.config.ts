import type { CapacitorConfig } from '@capacitor/cli';

const liveReloadUrl = process.env.CAP_SERVER_URL;

const config: CapacitorConfig = {
  appId: 'com.sarkarisahayak.app',
  appName: 'Sarkari Sahayak',
  webDir: 'dist',
  ...(liveReloadUrl
    ? {
        server: {
          url: liveReloadUrl,
          cleartext: true,
        },
      }
    : {}),
  android: {
    buildOptions: {
      signingType: 'apksigner',
    },
  },
};

export default config;
