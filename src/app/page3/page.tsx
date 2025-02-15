import RedSquare from "@/components/RedSquare";
import BlueSquare from "@/components/BlueSquare";

import Link from "next/link";

export default function Rectangle2(){
    return(
        <div className="min-h-srren flex flex-row items-center justfy-center gap-4">
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
            </div>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
                <RedSquare/>
                <BlueSquare/>
            </div>
            <Link href="/page2">Ir a la pagina 2</Link>
        </div>
        
    );
}