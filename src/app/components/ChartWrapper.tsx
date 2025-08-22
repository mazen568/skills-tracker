import { Suspense } from "react";
import ChartServer from "./Dashboard/ChartServer";
import Spinner from "./Spinner";

type ChartWrapperProps<T> = {
    fetchFunction: () => Promise<T>;
    title: string;
    ChartComponent: React.ComponentType<{ data: T }>;
};

// Declare <T> after the function name
export default function ChartWrapper<T>({
    fetchFunction,
    title,
    ChartComponent
}: ChartWrapperProps<T>) {
    return (
        <div className="w-full h-80 rounded-lg flex flex-col justify-center" >
            <h3 className="text-white text-lg font-medium mb-10">{title}</h3>
            <Suspense fallback={<div className="flex justify-center h-full mt-20">
                <Spinner size={90} />
            </div>}>
                <ChartServer 
                   fetchFunction={fetchFunction}
                   ChartComponent={ChartComponent}
                   />
            </Suspense>
        </div>
    );
}
