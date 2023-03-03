const path = require("path");
const NextI18Next = require("next-i18next");

const LANGUAGES = ["bg", "en"];
const DEFAULT_LANGUAGE = "bg";

// if it is the server, then the full path, if the client, then the relative path.
const localePath =
  typeof window === "undefined"
    ? path.resolve("public", "locales")
    : "/public/locales";

// module.exports = {
//   i18n: {
//     defaultLocale: DEFAULT_LANGUAGE,
//     locales: LANGUAGES,
//     fallbackLng: LANGUAGES,
//     nsSeparator: "::",
//     keySeparator: "::",
//     // How to use libraries for i18next like LanguageDetector
//     use: [require("i18next-intervalplural-postprocessor")],
//     serializeConfig: false,
//   },
//   localePath: localePath,
// };
module.exports = {
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  defaultNS: "common",
  defaultLanguage: "bg",
  otherLanguages: ["de, es, fr"],
  localeStructure: "{{lng}}/{{ns}}",
  localeExtension: "json",
  localePath: "locales",

  localeSubpaths: {
    bg: "bg",
    en: "en",
  },
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: LANGUAGES,
    // fallbackLng: LANGUAGES,
    // nsSeparator: "::",
    // keySeparator: "::",
    // How to use libraries for i18next like LanguageDetector
    // use: [require("i18next-intervalplural-postprocessor")],
    // serializeConfig: false,
  },
  localePath: localePath,
};
