"use client";

import { BlueLine } from "@/components/ui/beam2";
import { HeadingsWithBeam } from "@/components/ui/beamtext";
import { CollisionLoader } from "@/components/ui/collosionloader";

import { LoaderFive, LoaderOne } from "@/components/ui/loader";
// import CollisionLoader from "@/components/ui/loaderbounde";



export default function Home() {

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <Beam />
        <BlueLine />
        <HeadingsWithBeam /> */}
     <LoaderOne />



     <div className="my-10">
     </div>
     

     
        <CollisionLoader />

         <div className="my-10">
     </div>
     
         <LoaderFive text="Loading..." /> 

    </div>
  );
}
