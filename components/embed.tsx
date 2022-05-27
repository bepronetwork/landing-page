import { useEffect, useRef } from "react";

interface EmbedProps {
    source: string;
}

export default function Embed({
    source
}: EmbedProps) {
    const embedRef = useRef(null);

    useEffect(() => {
        const newEmbed = (window as any).RunKit.createNotebook({
            source,
            element: embedRef.current
        });

        return(() => {
            newEmbed.destroy();
        });
    }, [source]);

    return(
        <div ref={embedRef}></div>
    );
}