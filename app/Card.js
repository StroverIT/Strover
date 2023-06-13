import Image from "next/image"

const Card = ({icon,title,paragraph, imageUrl})=>{
    return(
        <section className='flex gap-x-5'>
            {icon && <div className='relative text-5xl change-to-blue'>{icon}</div>}
            {imageUrl && <div className="relative w-12 h-12 change-to-blue"><Image fill src={imageUrl} alt={imageUrl} className="object-contain"/></div>}
            <div className='text-left'>
                <h2 className="mb-1 text-xl font-medium">{title}</h2>
                <p className="">{paragraph}</p>
            </div>
        </section>
    )
}

export default Card