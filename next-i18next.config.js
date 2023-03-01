const path = require("path");

const LANGUAGES = ["bg", "en"];
const DEFAULT_LANGUAGE = "bg";

// if it is the server, then the full path, if the client, then the relative path.
// const localePath =
//   typeof window === "undefined"
//     ? path.resolve("public", "translation")
//     : "/public/translation";

module.exports = {
  i18n: {
    defaultLocale: DEFAULT_LANGUAGE,
    locales: LANGUAGES,
    fallbackLng: LANGUAGES,
    nsSeparator: "::",
    keySeparator: "::",
    // How to use libraries for i18next like LanguageDetector
    use: [require("i18next-intervalplural-postprocessor")],
    serializeConfig: false,
  },
  // localePath: localePath,
};
