import Link from "next/link";
import { Resource } from "../Resources/Resources";

function checkOverride(override: boolean | undefined): boolean {
    console.log(typeof override);
    if(typeof(override) !== 'undefined' && override === true) {
        return true;
    }
    return false;
    
}

export default function ResourceEntry(props : Resource): JSX.Element {
    return (
        <Link href={props.url}>
            <div className="w-60 h-52 m-7 py-6 px-3 bg-offwhite/50 shadow-md hover:shadow-md hover:shadow-fadedyellow/50 hover:bg-offwhite/80 rounded-md flex flex-col place-content-between">
                <div className="pt-2">
                    <h3 className="break-words font-bold text-xl">
                        { 
                            checkOverride(props.override) ? props.name : props.name.toLowerCase().split(" ").map((word) => word[0].toUpperCase() + word.substring(1) ).join(" ")
                        }
                    </h3>
                </div>

                <div className="h-1/2 m-auto">
                    <p className="text-darkgray">
                        {props.description}
                    </p>
                </div>
            </div>
        </Link>
    )
}