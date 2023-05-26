//https://svelte.dev/repl/dbeabf42636545b3a8dc6ebe84c2d98c?version=3.17.3
import { bubble, listen } from "svelte/internal";
export function getEventsAction(component) {
    return node => {
        const events = Object.keys(component.$$.callbacks);
        const listeners = [];
        events.forEach(event =>
            listeners.push(listen(node, event, e => bubble(component, e)))
        );
        return {
            destroy: () => {
                listeners.forEach(listener => listener());
            }
        };
    };
}