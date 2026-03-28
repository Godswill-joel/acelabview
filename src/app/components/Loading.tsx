// components/Loading.tsx

import { Riple } from "react-loading-indicators";

export default function Loading() {
    return (
        <div className="w-screen bg-yellow-100 h-screen flex items-center justify-center">
            <Riple color="#32cd32" size="medium" text="" textColor="" />
        </div>
    );
}