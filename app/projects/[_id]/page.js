import React from "react";
import { getById } from "../../../controller/project";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import BlueBtn from "../../../components/Buttons/BlueBtn"
import InitText from "../../../components/InitText";

export const dynamic = "force-dynamic";

import WebsiteDemo from "./WebsiteDemo"
const Page = async ({ params }) => {
  const { _id } = params;
  const { data, prevProject, nextProject, ip } = await getById(_id);

  if (!data) return <div className="flex-center">Зарежда се...</div>;
  return (
    <div>
      <InitText text={data.type} />

      <main className="flex-col min-h-screen flex-center">
        <h2 className="text-2xl font-semibold">{data.title}</h2>
        <div className="grid items-center justify-center grid-cols-2 gap-x-10">
          <div className="relative w-72 h-72">
            <Image
              src={data.imageUrl}
              alt={data.title}
              className="object-contain"
              fill
            />
          </div>
          <div className="">
            <hr />
            <div className="h-full py-4 flex-center gap-x-4">
              <div className="flex items-center">
                <div className="relative w-7 h-7">
                  <Image
                    src="/icons/love.png"
                    alt={data.title}
                    className="object-contain change-to-blue"
                    fill
                  />
                </div>
                <div>Харесай (0)</div>
              </div>
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
            <hr />
            <WebsiteDemo link={data.siteUrl}/>

          </div>
        </div>
        <div className="flex justify-between text-sm gap-x-10">
          {prevProject && (
            <Link href={`/projects/${prevProject._id}`}>
              <div className="flex-center">
                <div className="relative w-6 h-6 mr-4 rotate-180">
                  <Image
                    src={"/icons/right-arrow.png"}
                    alt={data.title}
                    className="object-contain"
                    fill
                  />
                </div>
                <div>
                  <div className="text-[#646464]">{prevProject.type}</div>
                  <div className="font-semibold">{prevProject.title}</div>
                </div>
              </div>
            </Link>
          )}

          {nextProject && (
            <Link href={`/projects/${nextProject._id}`}>
              <div className="flex-center">
                <div className="max-w-[18rem] text-right">
                  <div className="text-[#646464]">{nextProject.type}</div>
                  <div className="font-semibold ">{nextProject.title}</div>
                </div>
                <div className="relative w-6 h-6 ml-4 ">
                  <Image
                    src={"/icons/right-arrow.png"}
                    alt={data.title}
                    className="object-contain"
                    fill
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </main>

    </div>
  );
};

export default Page;
