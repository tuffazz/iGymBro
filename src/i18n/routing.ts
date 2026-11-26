import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'bg', 'es', 'de', 'it', 'fr', 'zh', 'ja', 'hi', 'ru'] as const,
  defaultLocale: 'en',
});

export type Locale = (typeof routing.locales)[number];
