import SectionHeader from "../SectionHeader/SectionHeader"
import ResourceEntry from "../ResourceEntry/ResourceEntry"

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url : URL) => fetch(url).then((res) => res.json());

export interface Resource {
    name: string,
    url: string,
    type: string,
    description: string,
    override: boolean | undefined
}

export default function Resources() {
    const { data, error } = useSWR('/api/staticdataresources', fetcher);
    //Handle the error state
    if (error) return <div className="w-3/5 m-auto text-center text-2xl p-10">Failed to load resources</div>;
    //Handle the loading state
    if (!data) return <div className="w-3/5 m-auto text-center text-2xl p-10">Loading Resources...</div>;
    const resources = JSON.parse(data);
    return (
        <div className="w-screen text-center py-8">
            <div className="w-4/5 m-auto">
                <SectionHeader name="Resources" id="resources"/>

                <h3 className="w-5/6 m-auto text-sm">
                    <b className="text-fadedyellow">Helpful Resources & Links:</b>
                </h3>
                <div className="flex flex-wrap flex-row place-content-evenly pt-7">
                    {
                        resources["resources"].map((resource : Resource,) => {
                            return (
                                <ResourceEntry key={resource.name + resource.type} name={resource.name} url={resource.url} type={resource.type} description={resource.description} override={resource.override} />
                        )})
                    }
                </div>                                    
            </div>
        </div>
    )
}