interface ResourceEntryProps {
    name: string,
    type: string, // pdf, link, etc.
    link: string 
}

export default function ResourceEntry(props : ResourceEntryProps) {
    return (
        <div className="w-1/4 bg-darkgray h-1/3 flex flex-col place-content-evenly p-3">
            <h3>
                {props.name}
            </h3>

            <p>
                {props.type}
            </p>
            <a href={props.link}>Click here!</a>
        </div>
    )
}