/*export default function Rectangle(){
    return(
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-80 h-40 bg-red-200 rounded-lg shadow-lg"></div>
        </div>
    );
}*/

interface RectangleProps{
    color: string;
}

export default function Rectangle({color}:RectangleProps) {
    return<div style={{ backgroundColor: color}} className="w-64 h-32"></div>;
}