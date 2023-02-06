import SectionHeader from "../Utility/SectionHeader/SectionHeader"
import ResourceEntry from "./ResourceEntry"

//useSWR allows the use of SWR inside function components
import useSWR from 'swr';

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url : URL) => fetch(url).then((res) => res.json());

interface Resource {
    name: string,
    link: string,
    type: string
}

export default function Resources() {
    const { data, error } = useSWR('/api/staticdata', fetcher);
    //Handle the error state
    if (error) return <div className="w-3/5 m-auto text-center text-2xl p-10">Failed to load resources</div>;
    //Handle the loading state
    if (!data) return <div className="w-3/5 m-auto text-center text-2xl p-10">Loading Resources...</div>;

    console.log(data);
    const resources = JSON.parse(data);
    console.log(resources)
    return (
        <div className="w-screen text-center py-8">
            <div className="w-4/5 m-auto">
                <SectionHeader name="Resources" id="resources"/>

                <p className="w-5/6 m-auto text-sm">
                    <b>Helpful Resources & Links:</b>
                        {
                            resources["resources"].map((resource : Resource, index: Number) => {
                                return (
                                    <div key={index.toString()}>
                                        <ResourceEntry name={resource.name} link={resource.link} type={resource.type} />
                                    </div>
                            )})
                        }
                        
                        {/* JSON.parse(data).map((resource: { name: string; link: string; type: string }) => {
                             console.log(resource)
                            
                             return (
                                 <div>
                                     <ResourceEntry name={resource.name} link={resource.link} type={resource.type} />
                                 </div>
                             )
                         }) */}

                    
                    
                    
                    <br></br>
                    <br></br>
                    <a href="https://www.bergen.org/academies/academies-student-council" className="text-fadedyellow">BCA Student Council Website</a>
                    <br></br>
                    <br></br>
                    <a href="https://www.bergen.org/academies/academies-student-council/constitution" className="text-fadedyellow">BCA Student Council Constitution</a>
                    <br></br>
                    <br></br>
                    <a href="https://www.bergen.org/academies/academies-student-council/bylaws" className="text-fadedyellow">BCA Student Council Bylaws</a>
                    <br></br>
                </p>
            </div>
        </div>
    )
}