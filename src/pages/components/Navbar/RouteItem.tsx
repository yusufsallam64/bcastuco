import Link from "next/link"

interface RouteItemProps {
    name: string,
    link: string
}

export default function RouteItem(props : RouteItemProps) {
    return (
        <Link className="py-1 text-sm hover:text-yellow-400" href={props.link}>
            {props.name}
        </Link>
    )
}
