import en from './strings/en.json';

export const useAppTranslations = () => ({
  t: (key: keyof typeof en) => en[key]
})

export { appTheme } from './theme';