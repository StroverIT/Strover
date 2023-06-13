import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { useGlolContext } from "../../app/Context/text";
import Link from "next/link"

const DiffThanHome = () => {

    const {text} = useGlolContext()
  
    
    if(!text) return <div className="relative flex-col text-4xl flex-center">Зарежда...</div>
    const firstLetter = text?.slice(0, 1);
    const otherLetters = text?.slice(1);
  
    return (
      <div className="relative flex-col text-4xl flex-center">
        <div className="mt-10">
          <span className="-mr-1 text-9xl">{firstLetter}</span>{otherLetters}
        </div>
        <div className="absolute flex-col bottom-9 flex-center">
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
    );
  };

export default DiffThanHome