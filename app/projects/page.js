import Image from "next/image";
import React from "react";
import { getAll } from "../../controller/project";
import Link from "next/link";

import InitText from "../../components/InitText"

export const dynamic = 'force-dynamic'

const Page = async () => {
  const {data} = await getAll()

  return (
    <>
        <InitText text="Проекти" />

      <main className="grid grid-cols-2 gap-10 mx-12 mt-14">
        {data?.map(project=>{
          return  <Container key={project._id} title={project.title} type={project.type} imageUrl={project.imageUrl} _id={project._id}/>
        })}
      
      </main>
    </>
  );
};

export default Page;

const Container = ({title, type, imageUrl, _id}) => {
  
  return (
    <div className="flex-col w-full shadow-xl h-[24rem] rounded-2xl">
      <Link href={`/projects/${_id}`}>
        <div className="relative w-full h-60 flex-center">
          <Image
            alt="text"
            src={imageUrl}
            fill
            className="object-cover w-full"
          />
        </div>
      </Link>
      <div className="p-7">
        <h1 className="text-lg font-semibold">{title}</h1>
        <p>{type}</p>
      </div>
    </div>
  );
};
