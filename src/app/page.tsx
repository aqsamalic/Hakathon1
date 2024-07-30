import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Promotion from "@/components/Promotion";
import Categories from "@/components/Categories";
import Selling from "@/components/Selling";



export default function Home() {
  return (
        <div>
           <Hero/>
           <Services/>
           <Promotion/>
           <Categories/>
           <Selling/>
           
      </div>
  );

}