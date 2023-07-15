import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navigation = ({prevProject, nextProject,}) => {
    return (
        <div className="text-sm max-xl:grid max-xl:px-4 max-xl:grid-cols-2 xl:flex xl:justify-between xl:gap-x-10 max-xl:mt-10">
            {prevProject && (
              <Link href={`/projects/${prevProject._id}`}>
                <div className="flex-center">
                  <div className="relative w-6 h-6 mr-4 rotate-180">
                    <Image
                      src={"/icons/right-arrow.png"}
                      alt={prevProject.title}
                      className="object-contain"
                      fill
                    />
                  </div>
                  <div>
                    <div className="text-[#646464] text-xs">{prevProject.type}</div>
                    <div className="text-sm font-semibold">{prevProject.title}</div>
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
                      alt={nextProject.title}
                      className="object-contain"
                      fill
                    />
                  </div>
                </div>
              </Link>
            )}
          </div>
    );
}

export default Navigation;
