import SectionHeader from "../SectionHeader/SectionHeader"
import CouncilEntry from "../CouncilEntry/CouncilEntry"

import useSWR from 'swr';

const fetcher = (url : URL) => fetch(url).then((res) => res.json());

export interface Member {
    name: string,
    position: string,
    bio: string
}

export default function MeetUs() {
    const { data, error } = useSWR('/api/staticdatacouncil', fetcher);
    if (error) return <div className="w-3/5 m-auto text-center text-2xl p-10">Failed to load resources</div>;
    if (!data) return <div className="w-3/5 m-auto text-center text-2xl p-10">Loading Resources...</div>;
    const council = JSON.parse(data);

    return (
        <div className="w-screen text-center py-8">
            <div className="w-4/5 m-auto">
                <SectionHeader name="Meet The Council" id="meetus"/>

                <div className="flex flex-wrap flex-row place-content-evenly pt-7">
                    {

                        council["members"].map((councilmember : Member, index: Number) => {
                            return (
                                <CouncilEntry name={councilmember.name} position={councilmember.position} bio={councilmember.bio} />
                        )})

                    }
                </div>
                {/* <p className="w-5/6 m-auto">
                    TODO -- Need board pictures to create this
                </p> */}

            </div>
        </div>
    )
}