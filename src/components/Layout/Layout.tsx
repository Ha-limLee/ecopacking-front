import React from "react";
import LayoutView from "./Layout.view"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <LayoutView>
            {children}
        </LayoutView>
    );
}