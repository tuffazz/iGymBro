"use client";

import {useEffect} from "react";

export default function PrivacyRedirectPage() {
  useEffect(() => {
    // Relative redirect: /privacy/ → /en/privacy/ (works under any basePath)
    window.location.replace("../en/privacy/");
  }, []);
  return null;
}
