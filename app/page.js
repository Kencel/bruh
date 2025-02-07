"use client"

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export default function Home() {

  return (
    <div>
      <NavigationMenu className="fixed w-[100%] h-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Test</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div>
                
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex justify-center h-[300vh]">
        a
      </div>
    </div>
  );
}
