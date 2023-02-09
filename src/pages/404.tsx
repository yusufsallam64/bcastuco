import Link from 'next/link'

export default function Custom404() {
    return (
        <div className="flex flex-col h-screen place-content-between">
            <div className="flex flex-col place-content-center m-auto text-center">
                <h2 className="text-4xl text-darkgray p-5">Lost?</h2>
                <Link href="/" className="text-2xl text-midgray hover:text-darkgray">
                    Click to Return Home
                </Link>
            </div>
            <div className="w-screen bg-offwhite flex flex-row place-content-between p-5">
                <div>
                    <h5>© {new Date().getFullYear()} BCA Student Council 🐟 </h5>
                </div>
            </div>
        </div>
    )
}