"use client";
import FaqAccordion from "@/components/accordion-demo";
import { ScrollBasedVelocityImagesDemo } from "@/components/scroll-demo";
import { Beam } from "@/components/ui/beam";
import { BlueLine } from "@/components/ui/beam2";
import { HeadingsWithBeam } from "@/components/ui/beamtext";


import Image from "next/image";
import { useState } from "react";

export default function Home() {

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <Beam /> */}
      <BlueLine />
    <HeadingsWithBeam />
    </div>
  );
}
