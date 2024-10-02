"use client";

import { useStore } from "@/store/store";

export default function Home() {
  const { age } = useStore();

  return (
    <main>
      <span>{age}</span>
    </main>
  );
}
