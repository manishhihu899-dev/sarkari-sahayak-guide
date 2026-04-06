import type { CapacitorConfig } from '@capacitor/cli';

const liveReloadUrl = process.env.CAP_SERVER_URL;

const config: CapacitorConfig = {
  appId: 'app.lovable.0b2da885e15a4ebdb3569bd14d1ae0b1',
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
