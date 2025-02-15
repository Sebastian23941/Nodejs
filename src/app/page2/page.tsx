import BlueRectangle from "@/components/BlueRectangle";
import Rectangle from "@/components/Rectangle";

import Link from "next/link";

export default function Rectangle2(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <Rectangle color="blue"/>  {/**/}
            <div className="w-80 h-40 bg-green-600 rounded-lg shadow-lg"></div>
            <Link href="/">Ir a pagina 1</Link>
            <Link href="/page3">Ir al ejercicio</Link>
        </div>
    );
}