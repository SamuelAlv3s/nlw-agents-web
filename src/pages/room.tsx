import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
    roomId: string;
}

export function Room() {

    const { roomId } = useParams<RoomParams>();

    if (!roomId) {
        return <Navigate replace to="/"/>
    }

    return (
        <div>
            <h1>Room Details</h1>
            <p>{roomId}</p>
        </div>
    )
}