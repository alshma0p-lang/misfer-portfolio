import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ConsentStore {
  necessary: boolean;
  analytics: boolean;
  hasResponded: boolean;
  setConsent: (analytics: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
}

export const useConsentStore = create<ConsentStore>()(
  persist(
    (set) => ({
      necessary: true,
      analytics: false,
      hasResponded: false,
      setConsent: (analytics) =>
        set({ analytics, hasResponded: true, necessary: true }),
      acceptAll: () =>
        set({ necessary: true, analytics: true, hasResponded: true }),
      rejectAll: () =>
        set({ necessary: true, analytics: false, hasResponded: true }),
    }),
    {
      name: 'telechic-consent',
    }
  )
);
