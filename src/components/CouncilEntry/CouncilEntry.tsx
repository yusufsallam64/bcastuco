import { Member } from "../MeetUs/MeetUs"
import Image from "next/image"

export default function CouncilEntry(props: Member): JSX.Element {
    return (
        <div className="flex flex-row w-72 h-52 m-8 my-14 bg-offwhite/50 shadow-md border-fadedyellow/20 border-2" key={props.key}>
            <div className="relative left-1/2 -translate-x-1/2 -top-14 h-58 w-full ">
                <div className="h-1/2 flex place-content-center m-auto rounded-[5rem] border-2 border-fadedyellow/30 shadow-xl w-32 overflow-hidden bg-white">
                    <Image 
                        src={ "/stucopics/" + props.name.split(" ")[0].toLowerCase() + ".tif" }
                        alt={ props.name.split(" ")[0].toLowerCase() + ".tif" }
                        className = "object-contain overflow-hidden"
                        width={ 100 }
                        height={ 100 } 
                    />
                </div>
                <br></br>
                <div className="m-auto text-center pt-3">
                    <h3 className="text-darkgray font-bold text-xl">{props.name}</h3>
                    <p className="text-midgray text-[1.0rem]">{props.position}</p>
                </div>
            </div>
        </div>

    )
}