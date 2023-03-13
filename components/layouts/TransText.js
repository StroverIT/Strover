import React from "react";
import { useTranslation } from "next-i18next";

const TransText = ({ children, trans = "home" }) => {
  const { t } = useTranslation(trans);
  const text = children.toString();
  return t(text);
};

export default TransText;
