import React from "react";
import PackingAppView from "./PackingApp.view";

export default function PackingApp({children}: {children: React.ReactNode}) {
    return (
        <PackingAppView>
            {children}
        </PackingAppView>
    );
}