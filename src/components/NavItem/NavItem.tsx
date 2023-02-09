import Link from "next/link"

interface NavItemProps {
    name: string,
    link: string
}

export default function NavItem(props : NavItemProps): JSX.Element {
    return (
        <Link className="py-[.2rem] text-[1rem] hover:text-fadedyellow transition delay-[5ms]" href={props.link}>
            {props.name}
        </Link>
    )
}
