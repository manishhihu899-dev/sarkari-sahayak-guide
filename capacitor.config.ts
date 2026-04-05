import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.0b2da885e15a4ebdb3569bd14d1ae0b1',
  appName: 'Sarkari Sahayak',
  webDir: 'dist',
  server: {
    url: 'https://0b2da885-e15a-4ebd-b356-9bd14d1ae0b1.lovableproject.com?forceHideBadge=true',
    cleartext: true,
  },
  android: {
    buildOptions: {
      signingType: 'apksigner',
    },
  },
};

export default config;
