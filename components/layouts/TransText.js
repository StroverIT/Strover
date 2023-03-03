import React from "react";
import { useTranslation } from "next-i18next";

const TransText = ({ children }) => {
  const { t } = useTranslation("home");

  return t(children);
};

export default TransText;
