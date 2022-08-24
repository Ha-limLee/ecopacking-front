import React from "react";
import PackingAppView from "./PackingApp.view";

function PackingApp({children}: {children: React.ReactNode}) {
    return (
        <PackingAppView>
            {children}
        </PackingAppView>
    );
}

export default React.memo(PackingApp);