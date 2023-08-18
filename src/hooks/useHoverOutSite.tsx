import { useEffect } from "react";

type EventHandler = (event: MouseEvent) => void;

export function useOnHoverOutside(ref: React.RefObject<HTMLElement>, handler: EventHandler) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mouseover", listener);
        return () => {
            document.removeEventListener("mouseout", listener);
        };
    }, [ref, handler]);
}
