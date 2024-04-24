import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoBIzWIz from "@components/icons/LogoBIzWIz";


export  default function SplashScreen({  
delay,
destination
}) {
  
  const navigateTo = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigateTo(destination);
    }, delay); 

    return () => clearTimeout(timeout);
  }
  , [delay, navigateTo, destination]);

    return (
        <section className={
            `flex flex-col items-center justify-center h-dvh gap-8 bg-primary animate-fade-in w-full
            
          `}>
            <div className="animate-bounce-twice-and-fade "> 
            <LogoBIzWIz color="positive" className="shadow-xl drop-shadow-md" />

            </div>
          </section>
  )
}
