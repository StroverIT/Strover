import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useGlolContext } from "../../app/Context/text";
import Link from "next/link"

const DiffThanHome = () => {

    const {text} = useGlolContext()
  
    
    if(!text) return <div className="relative flex-col h-screen text-4xl text-white flex-center nav-bg-color-gradient">Зарежда...</div>
    const firstLetter = text?.slice(0, 1);
    const otherLetters = text?.slice(1);
  
    return (

        <section className="sticky top-0 h-screen ">
          <section className="h-screen text-white min-h-max nav-bg-color-gradient">
          
                  <div className="relative flex-col h-full text-4xl flex-center">
                    <div className="mt-10">
                      <span className="-mr-1 text-9xl">{firstLetter}</span>{otherLetters}
                    </div>
                    <div className="flex-col flex-center mt-28">
                      {/* Icons */}
                      <div className="flex mb-2 gap-x-3">
                        <Link href="https://www.instagram.com/stroverbg/" target="_blank">
                            <AiOutlineInstagram />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=100085497228053" target="_blank">
                          <RiFacebookCircleFill />
                        </Link>
                      </div>
                      {/* Line */}
                      <div className="w-28 h-[1px] bg-white flex-center mb-1"></div>
                      <h3 className="text-sm">Социални мрежи</h3>
                    </div>
                  </div>
          
          </section>
        </section>
    );
  };

export default DiffThanHome