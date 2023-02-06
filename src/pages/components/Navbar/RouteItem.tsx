import Link from "next/link"

interface RouteItemProps {
    name: string,
    link: string
}

export default function RouteItem(props : RouteItemProps) {
    return (
        <Link className="py-[.2rem] text-[1rem] hover:text-fadedyellow transition delay-[10ms]" href={props.link}>
            {props.name}
        </Link>
    )
}
