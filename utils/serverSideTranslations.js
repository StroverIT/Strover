// utils/serverSideTranslations.js

import { serverSideTranslations as baseServerSideTranslations } from "next-i18next/serverSideTranslations";
// import { dt } from '../../constants/defaultTranslate'
// import { DEFAULT_LANGUAGE } from '../../constants/languages'
import nextI18NextConfig from "..//next-i18next.config.js";

const serverSideTranslations = async (locale, domains = []) => {
  return await baseServerSideTranslations(
    locale,
    ["bg", "en", ...domains],
    nextI18NextConfig,
    ["bg", "en"]
  );
};

export default serverSideTranslations;
