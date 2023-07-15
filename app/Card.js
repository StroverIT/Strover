import Image from "next/image"

const Card = ({icon,title,paragraph, imageUrl})=>{
    return(
        <section className='max-xl:grid max-xl:grid-cols-[20%80%] xl:flex gap-x-5 container'>
            {icon && <div className='relative text-5xl change-to-blue'>{icon}</div>}
            {imageUrl && <div className="relative w-12 h-12 xl:w-12 xl:h-12 change-to-blue"><Image fill src={imageUrl} alt={imageUrl} className="object-contain"/></div>}
            <div className='text-left'>
                <h2 className="mb-1 font-medium xl:text-xl">{title}</h2>
                <p className="max-xl:text-sm">{paragraph}</p>
            </div>
        </section>
    )
}

export default Card