import SectionHeader from "../SectionHeader/SectionHeader"

export default function ContactUs() {
    return (
        <div className="w-screen text-center py-8">
            <div className="w-4/5 m-auto">
                <SectionHeader name="Contact Us" id="contactus"/>
            </div>
            <h3 className="w-5/6 m-auto text-sm">
                <b className="text-fadedyellow">Reach out to us here:</b>
            </h3>
            <div className="w-4/5 m-auto pt-5 flex flex-col place-content-around">
                <p> BCAStudentCouncil@bergen.org</p> 
            </div>
        </div>
    )
}