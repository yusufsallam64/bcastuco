import SectionHeader from "../SectionHeader/SectionHeader"

export default function About() {
    return (
        <div className="w-screen text-center py-8">
            <div className="w-4/5 m-auto">
                <SectionHeader name="Who Are We?" id="about"/>

                <p className="w-5/6 m-auto text-sm">
                    <b className="text-fadedyellow">We are the Bergen County Academies Student Council.</b>
                    <br></br>
                    <br></br> 
                    As the BCA Student Council, we uphold the values of the BCA Student Council Constitution and we strive to achieve a better educational experience for all students. We believe it is critical to fulfill these responsibilities and to live up to all the duties we undertake, and we are committed to providing all students a voice.
                </p>

            </div>
        </div>


    )


}