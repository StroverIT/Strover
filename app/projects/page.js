import Image from "next/image";
import React from "react";
import { getAll } from "../../API/project";
import Link from "next/link";

import InitText from "../../components/InitText"
import PageWrapper from "../../components/Animated/PageWrapper";

export const dynamic = 'force-dynamic'

export const metadata = {
  title: "Проекти за електронна търговия от Strover | Демонстрация на успеха в електроната търговия",
  description: `Разгледайте впечатляващото портфолио от проекти за електронна търговия на Strover, което представя нашата експертиза в постигането на успех в цифровия пазар. От завладяващи уеб дизайни до безупречни потребителски преживявания, открийте как нашите решения за електронна търговия помагат на
   бизнесите да процъфтяват онлайн. Вдъхновете се от нашия доказан успех и отключете потенциала за ваш собствен успех в електронната търговия с Strover`,
};

const Page = async () => {
  const {data} = await getAll()

  return (
    <>
        <InitText text="Проекти" />

      <PageWrapper>
        <main className="grid gap-10 mx-12 xl:grid-cols-2">
          {data?.map(project=>{
            return  <Container key={project._id} title={project.title} type={project.type} imageUrl={project.imageUrl} _id={project._id}/>
          })}
        
        </main>
      </PageWrapper>
    </>
  );
};

export default Page;

const Container = ({title, type, imageUrl, _id}) => {
  
  return (
    <div className="flex-col w-full shadow-xl h-[24rem] rounded-2xl ">
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
