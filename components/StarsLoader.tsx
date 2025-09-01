"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const StarsCanvas = dynamic(() => import("@/components/main/StarsBackground"), {
  ssr: false,
  loading: () => <div className="w-full h-auto fixed inset-0 z-[1] bg-[#111]" />,
});

export default function StarsLoader() {
  return <StarsCanvas />;
}
