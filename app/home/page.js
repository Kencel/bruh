"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [catData, setCatData] = useState(null);
  const url = 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1'

  useEffect( () => {
    const fetchCats = async () => {
      const data = await fetch(url, { headers: { 'x-api-key' : 'live_NzlXIedj7oabBtLf2Kvwsvwot8HcuEcH3x40F7P85w1V6K0y2bXU7JLtywLK4rYC' }});
      setCatData(await data.json());
    }
    fetchCats();
  }, []);

  const printData = () => {
    console.log(catData);
  }

  const generateNewCat = async () => {
    const data = await fetch(url, { headers: { 'x-api-key' : 'live_NzlXIedj7oabBtLf2Kvwsvwot8HcuEcH3x40F7P85w1V6K0y2bXU7JLtywLK4rYC' }});
    setCatData(await data.json());
  }

  return (
    <div className="flex justify-center">
      <Card className="w-[50%]">
        <div className="flex justify-center px-4">
          <p>{catData && catData[0].breeds[0].name}</p>
        </div>
        <div className="flex justify-center px-4">
          <img className="w-64" src={catData && catData[0].url}></img>
        </div>
        <div className="flex px-4 justify-center">
        {catData && catData[0].breeds[0].description}
        </div>
        <div className="flex justify-center">
          <Button onClick={generateNewCat}>New Cat!</Button>
        </div>
      </Card>
    </div>
  );
}
