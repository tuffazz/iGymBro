"use client";

import {useEffect} from "react";

export default function RootPage() {
  useEffect(() => {
    // Use relative URL so it works under any basePath (e.g. /iGymBro in prod)
    window.location.replace("en/");
  }, []);
  return null;
}
