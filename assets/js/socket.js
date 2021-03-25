import { handleDisconnected, handleNewUser } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocekt = aSocket => (socket = aSocket);

export const initSockets = (aSocket) => {
    const { events } = window;
    updateSocekt(aSocket);
    aSocket.on(window.events.newUser, handleNewUser);
    aSocket.on(events.disconnected, handleDisconnected);
};