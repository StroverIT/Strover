import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useGlolContext } from "../../app/Context/text";
import Link from "next/link";

const DiffThanHome = () => {

  const { text } = useGlolContext();

  if (!text)
    return (
      <div className="relative flex-col h-screen text-4xl text-white flex-center nav-bg-color-gradient">
        Зарежда...
      </div>
    );
  const firstLetter = text?.slice(0, 1);
  const otherLetters = text?.slice(1);
  const scrollToInfo = () => {
    const swiperInfo = document.querySelector("#childrenMobile") || document.querySelector("#children");
    swiperInfo.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="top-0 h-screen xl:sticky max-xl:relative diffThanHome">
      <section className="h-screen text-white min-h-max nav-bg-color-gradient">
        <div className="relative flex-col h-full text-3xl xl:text-4xl flex-center">
          <div className="mt-10">
            <span className="-mr-1 text-5xl xl:text-9xl">{firstLetter}</span>
            {otherLetters}
          </div>
          <div className="flex-col mt-10 flex-center xl:mt-28">
            {/* Icons */}
            <div className="flex mb-2 gap-x-3">
              <Link href="https://www.instagram.com/stroverbg/" target="_blank">
                <AiOutlineInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100085497228053"
                target="_blank"
              >
                <RiFacebookCircleFill />
              </Link>
            </div>
            {/* Line */}
            <div className="w-28 h-[1px] bg-white flex-center mb-1"></div>
            <h3 className="text-sm">Социални мрежи</h3>
          </div>
        </div>
      </section>
      <div className="xl:hidden flex-center">
        <div className="absolute bottom-10 ">
          <div
            className="border-2 border-white cursor-pointer scroll before:border-white"
            onClick={scrollToInfo}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default DiffThanHome;
