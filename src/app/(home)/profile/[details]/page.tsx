import React from 'react'
import { notFound } from "next/navigation";

export  default async function page({params}:{params:Promise<{details:string}>}) {

  const {details}=await params

  if(details!=="details"){
    notFound();
  }
  return (
    <div>page</div>
  )
}
