"use client";

import { type PropsWithChildren, useEffect, useState } from "react";

type Props = {
    title: string;
    description?: string;
};

export function DemoComponent({ title, description }: Props) {
    const [state, setState] = useState("initialized");

    useEffect(() => {
        // eslint-disable-next-line no-console
        console.log("DemoComponent mounted", state);
        if (state === "initialized") {
            setState("mounted");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="demo-component">
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            {/* eslint-disable-next-line react/no-children-prop  */}
            <ButtonTest name="Test Button" children="Click me" />
            <img src="/logo.png" alt="Logo" />
            <head></head>
        </div>
    );
}

type ButtonProps = { name?: string } & PropsWithChildren;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ButtonTest(_props: ButtonProps) {
    return <button className="btn-primary">Click Me</button>;
}
