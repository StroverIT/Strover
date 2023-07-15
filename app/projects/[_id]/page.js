import React from "react";
import Image from "next/image";
import Link from "next/link";

// Components
import BlueBtn from "../../../components/Buttons/BlueBtn"
import InitText from "../../../components/InitText";
import WebsiteDemo from "./WebsiteDemo"
import PageWrapper from "../../../components/Animated/PageWrapper";
import Navigation from "./Navigation"
import Like from "./Like"

import { BsArrowRight } from "react-icons/bs";

// API
import { getById } from "../../../API/project";
import {addLike, getProjectLikes} from "../../../API/likes"

// export const dynamic = "force-dynamic";

// export async function generateMetadata(
//   { params, searchParams }, parent
// ) {

 
//   // read route params
//   const { _id } = params;
 
//   const { data } = await getById(_id);
//   // optionally access and extend (rather than replace) parent metadata
 
//   return {
//     title: data.title,
//     description: `Разгледайте впечатляващото портфолио от проекти за електронна търговия на Strover, което представя нашата експертиза в постигането на успех в цифровия пазар. От завладяващи уеб дизайни до безупречни потребителски преживявания, открийте как нашите решения за електронна търговия помагат на
//     бизнесите да процъфтяват онлайн. Вдъхновете се от нашия доказан успех и отключете потенциала за ваш собствен успех в електронната търговия с Strover`,
//   }
// }
 
export const metadata={
  title: "Стровър проекти"
}
const Page = async ({ params }) => {
  const { _id } = params;
  const { data, prevProject, nextProject, ip } = await getById(_id);
  const {likesLen, isLiked} = await getProjectLikes({projectId: _id, ip})
  if (!data) return <div className="h-screen min-h-screen flex-center">Зарежда се...</div>;

  
  return (
    <div>
      <InitText text={data.type} />

      <PageWrapper>
        <main className="flex-col min-h-screen flex-center">
          <h2 className="text-2xl font-semibold text-center">{data.title}</h2>
          <div className="grid items-center justify-center xl:grid-cols-2 gap-x-10">
            <div className="relative w-72 h-72">
              <Image
                src={data.imageUrl}
                alt={data.title}
                className="object-contain"
                fill
              />
            </div>
            <div className="">
              {/* <hr />
              <div className="h-full py-4 flex-center gap-x-4">
              <Like _id={_id} ip={ip} isLiked={isLiked} likesLen={likesLen} title={data.title}/>
                <div className="flex items-center">
                  <div className="relative w-7 h-7">
                    <Image
                      src="/icons/share.png"
                      alt={data.title}
                      className="object-contain "
                      fill
                    />
                  </div>
                  <div>Сподели</div>
                </div>
              </div>
              <hr /> */}
              <div>Линк: <Link href={data.url} target="_blank" className="underline">{data.url}</Link></div>
              <WebsiteDemo link={data.siteUrl}/>
            </div>
          </div>
         <Navigation prevProject={prevProject} nextProject={nextProject}/>
        </main>
      </PageWrapper>

    </div>
  );
};

export default Page;
