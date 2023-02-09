interface SectionHeaderProps {
    name: string
    id: string
}

export default function SectionHeader(props : SectionHeaderProps): JSX.Element {
    return (
        <h2 className="text-4.5xl font-bold pt-5 pb-8 text-darkgray scroll-my-52" id={props.id}>
            {props.name}
        </h2>
    ) 

}