'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { useConsentStore } from '@/lib/stores/consent-store';
import { X } from 'lucide-react';

export function ConsentBanner() {
  const t = useTranslations();
  const { hasResponded, necessary, analytics, setConsent, acceptAll, rejectAll } =
    useConsentStore();
  const [showCustomize, setShowCustomize] = useState(false);
  const [localAnalytics, setLocalAnalytics] = useState(analytics);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || hasResponded) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleRejectAll = () => {
    rejectAll();
  };

  const handleSavePreferences = () => {
    setConsent(localAnalytics);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 start-0 end-0 z-50 p-4"
      >
        <div className="container max-w-4xl">
          <div className="glass rounded-lg shadow-elevated p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {t('consent.title')}
                </h3>
                <p className="text-sm text-foreground/70">
                  {t('consent.description')}
                </p>
              </div>
              <button
                onClick={handleRejectAll}
                className="ms-4 p-1 hover:bg-surface rounded-md transition-colors"
                aria-label={t('common.close')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {showCustomize ? (
              <div className="space-y-4 mb-4">
                {/* Necessary Cookies */}
                <div className="flex items-center justify-between p-3 bg-surface rounded-md">
                  <div className="flex-1">
                    <Label className="text-sm font-medium">
                      {t('consent.necessary')}
                    </Label>
                    <p className="text-xs text-foreground/60 mt-1">
                      {t('consent.necessaryDesc')}
                    </p>
                  </div>
                  <Switch checked={necessary} disabled />
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-3 bg-surface rounded-md">
                  <div className="flex-1">
                    <Label
                      htmlFor="analytics-toggle"
                      className="text-sm font-medium"
                    >
                      {t('consent.analytics')}
                    </Label>
                    <p className="text-xs text-foreground/60 mt-1">
                      {t('consent.analyticsDesc')}
                    </p>
                  </div>
                  <Switch
                    id="analytics-toggle"
                    checked={localAnalytics}
                    onCheckedChange={setLocalAnalytics}
                  />
                </div>
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              {showCustomize ? (
                <>
                  <Button onClick={handleSavePreferences} variant="default">
                    {t('consent.savePreferences')}
                  </Button>
                  <Button
                    onClick={() => setShowCustomize(false)}
                    variant="outline"
                  >
                    {t('common.close')}
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handleAcceptAll} variant="default">
                    {t('consent.acceptAll')}
                  </Button>
                  <Button onClick={handleRejectAll} variant="outline">
                    {t('consent.rejectAll')}
                  </Button>
                  <Button
                    onClick={() => setShowCustomize(true)}
                    variant="ghost"
                  >
                    {t('consent.customize')}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
