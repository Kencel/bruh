"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [catData, setCatData] = useState(null);
  

  useEffect( () => {
    const fetchCats = async () => {
      const data = await fetch(process.env.NEXT_PUBLIC_CAT_URL, { headers: { 'x-api-key' : process.env.NEXT_PUBLIC_CAT_API}});
      setCatData(await data.json());
    }
    fetchCats();
  }, []);

  const printData = () => {
    console.log(catData);
  }

  const generateNewCat = async () => {
    const data = await fetch(process.env.NEXT_PUBLIC_CAT_URL, { headers: { 'x-api-key' : process.env.NEXT_PUBLIC_CAT_API }});
    setCatData(await data.json());
  }

  return (
    <div className="h-[100vh] flex flex-col sm:flex-row justify-center items-center p-4">
      <div className="w-full sm:w-[40%] h-auto text-center">  
        <div className="text-6xl font-bold">Generate a Cat</div>
        <div className="text-xl font-light">
          Click the button to get your own skibidi toilet cat.
        </div>
      </div>
      <Card className="w-full sm:w-[40%] h-auto mt-4 sm:mt-0">
        <div className="h-[95%] flex flex-col justify-center items-center p-4">
          <div className="flex justify-center">
            <img className="w-64" src={catData && catData[0].url} />
          </div>  
          <div className="m-5">
            <div className="flex justify-center font-bold text-2xl">
              <p>{catData && catData[0].breeds[0].name}</p>
            </div>
            <div className="flex justify-center text-gray-600">
              {catData && catData[0].breeds[0].description}
            </div>
          </div>
          <div className="flex justify-center p-2">
            <Button onClick={generateNewCat}>New Cat!</Button>
          </div>
        </div>
      </Card>
    </div>  
  );
}
