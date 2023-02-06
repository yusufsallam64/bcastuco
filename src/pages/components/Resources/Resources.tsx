import SectionHeader from "../Utility/SectionHeader/SectionHeader"

export default function Resources() {
    return (
        <div className="w-screen text-center py-8">
            <div className="w-4/5 m-auto">
                <SectionHeader name="Resources" id="resources"/>

                <p className="w-5/6 m-auto text-sm">
                    <b>Helpful Resources & Links:</b>
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