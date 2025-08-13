import Image from "next/image";
import Link from "next/link";

interface CompanionCardsProps{
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
    

}

const CompanionCard = (props: CompanionCardsProps) => {
    return(
        <article className="companion-card" style={{ backgroundColor: props.color }}>
            <div className="flex justify-between items-center">
                 <div className="subject-badge"> {props.subject} </div>
                 <button className="companion-bookmark">
                    <Image src="/icons/bookmark.svg" 
                    alt="bookmark"
                    width={12.5}
                    height={15}
                    />
                 </button>
            </div>
            <h2 className="text-2xl font-bold"> {props.name} </h2>

            <p className="text-sm">{props.topic}</p>
            <div className="flex items-center gap-2">
                <Image src='/icons/clock.svg' alt='duration' width={13.5} height={13.5}/>
                <p className="textsm">{props.duration}</p>
            </div>
            <Link href={`/companions/${props.id}`} className="w-full">
                <button className="btn-primary w-full justify-center">
                    launch lesson
                </button>
            </Link>

            
        </article>
    )
}

export default CompanionCard;