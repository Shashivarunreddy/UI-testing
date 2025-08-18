"use client";

import { BlueLine } from "@/components/ui/beam2";
import { HeadingsWithBeam } from "@/components/ui/beamtext";
import { Loader1 } from "@/components/ui/collosionloader";

import { CollisionLoader, Loader, TextLoader } from "@/components/ui/loader";
import BouncingBalls from "@/components/ui/loader1";
import Loader2 from "@/components/ui/loader1";


// import CollisionLoader from "@/components/ui/loaderbounde";



export default function Home() {

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen ">
      {/* <Beam />
        <BlueLine />
        <HeadingsWithBeam /> */}
     <Loader />



     <div className="my-10">
     </div>
     

     
        <CollisionLoader />

         <div className="my-10">
     </div>
     
         <TextLoader text="Loading..." /> 
<div className="my-10"> </div>



   <Loader1 />


   <BouncingBalls />
    </div>
  );
}
