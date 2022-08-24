import React from "react";
import LayoutView from "./Layout.view"

function Layout({children}: {children: React.ReactNode}) {
    return (
        <LayoutView>
            {children}
        </LayoutView>
    );
}

export default React.memo(Layout);