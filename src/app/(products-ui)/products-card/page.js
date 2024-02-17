import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Products_Card({title,description,brand,thumb}) {
  
  return (
    <Card className="w-[300px] h-[400px] rounded-sm hover:shadow-xl  bg-offwhite ">
      {/* <img src='/cew-mainlogo.png' className=" object-fill " /> */}
      <img src='/product2.PNG' className="h-[40%] object-cover w-[100%] rounded-tr-sm rounded-tl-sm  " />
      <CardHeader className='mt-2'>
        <CardTitle className='text-[1rem]'>CORRUGATED STAINLESS STEEL</CardTitle>
        <CardDescription>CORRUGATED STAINLESS STEEL HOSE WITH BRAID: A 100 SERIES & A 200 SERIES</CardDescription>
      </CardHeader>
      {/* <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <label htmlFor="name">{brand}</label>
            </div>
          </div>
        </form>
      </CardContent> */}
      <CardFooter className="flex justify-center ">
        {/* <Button variant="link">Cancel</Button> */}
        <Button variant="goldbtn" className='w-[60%]'>Explore</Button>
      </CardFooter>
    </Card>
  );
}