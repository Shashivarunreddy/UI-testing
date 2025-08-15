"use client";

import React, { useMemo } from "react";
import { ScrollVelocityRow } from "@/components/ui/scroll-based-velocity"; 

function useResponsiveRowCount() {
  const [rowCount, setRowCount] = React.useState(
    typeof window !== "undefined" ? (window.innerWidth < 768 ? 3 : 2) : 2,
  );
  React.useEffect(() => {
    const checkRows = () => setRowCount(window.innerWidth < 768 ? 3 : 2);
    window.addEventListener("resize", checkRows);
    return () => window.removeEventListener("resize", checkRows);
  }, []);
  return rowCount;
}

function splitIntoRows<T>(arr: T[], rows: number): T[][] {
  const baseSize = Math.floor(arr.length / rows);
  const remainder = arr.length % rows;
  let res: T[][] = [];
  let pointer = 0;
  for (let i = 0; i < rows; i++) {
    const size = baseSize + (i < remainder ? 1 : 0);
    res.push(arr.slice(pointer, pointer + size));
    pointer += size;
  }
  return res;
}

const IMAGE_LINKS = [
  
  "https://img.icons8.com/?size=100&id=71257&format=png&color=000000", // Angular
  "https://img.icons8.com/?size=100&id=20909&format=png&color=000000", // Html5
  "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000", // Css3
  "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000", // Javascript
  "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000", // Typescript
  "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000", // Python
  "https://img.icons8.com/?size=100&id=123603&format=png&color=000000", // React
  "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000", // Docker
  "https://img.icons8.com/?size=100&id=tbleCw0ch6QC&format=png&color=000000", // Vue.js
  "https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000", // Tailwind CSS
  "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000", // Node.js
  "https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000", // Express.js
  "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000", // MongoDB
  "https://img.icons8.com/?size=100&id=9nLaR5KFGjN0&format=png&color=000000", // MySQL
  "https://img.icons8.com/?size=100&id=Pv4IGT0TSpt8&format=png&color=000000", // PostgreSQL
  "https://img.icons8.com/?size=100&id=cvzmaEA4kC0o&format=png&color=000000", //Kubernetes
  "https://img.icons8.com/?size=100&id=20906&format=png&color=000000", // Git
  "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000", //Figma
  "https://img.icons8.com/?size=100&id=13679&format=png&color=000000", //Java
  "https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000", //C++
  // ...add more if needed
];

export function ScrollBasedVelocityImagesDemo() {
  const rowCount = useResponsiveRowCount();

  const imagesPerRow = useMemo(() => splitIntoRows(IMAGE_LINKS, rowCount), [rowCount]);
  const directions = useMemo(() =>
      rowCount === 2
        ? [1, -1]
        : [1, -1, 1],
    [rowCount]
  );

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      
      {imagesPerRow.map((rowImages, i) => (
        <ScrollVelocityRow key={i} baseVelocity={6} direction={directions[i] as  1 | -1} className="py-4">
          {rowImages.map((src: string, idx: number) => (
            <img
              key={idx}
              src={`${src}&ixlib=rb-4.0.3`}
              alt=""
              width={120}
              height={80}
              loading="lazy"
              decoding="async"
              className="inline-block h-20 w-28 rounded-lg object-contain bg-transparent hover:scale-150 transition-transform duration-300 ease-in-out"
            />
          ))}
        </ScrollVelocityRow>
      ))}

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
