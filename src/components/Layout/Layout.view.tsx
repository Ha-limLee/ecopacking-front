import React from "react";

export default function LayoutView({children}: {children: React.ReactNode}) {
    return (
        <div className="grid grid-cols-2 gap-4">
            {children}
        </div>
    );
}