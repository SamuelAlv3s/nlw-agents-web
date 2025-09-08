import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

type GetRoomsAPIResponse = Array<{
    id: string;
    name: string;
}>

export function CreateRoom() {

    const { data } = useQuery({
        queryKey: ["get-rooms"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3333/rooms");
            const result: GetRoomsAPIResponse = await response.json();
            return result;
        }
    })
    return (
        <div className="min-h-screen px-4 py-8">
            <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-2 items-start gap-8">
                <div />
                <Card>
                    <CardHeader>
                        <CardTitle>Salas</CardTitle>
                    <CardDescription>Acesso ra´pido para as salas recentes</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        {data?.map(room => {
                            return (<Link to={`/room/${room.id}`} key={room.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent">
                                <div className="flex-1">
                                    <h3 className="font-medium">{room.name}</h3>
                                </div>
                                <span className="flex items-center gap-2 text-sm">
                                    Entrar
                                    <ArrowRight className="size-3" />
                                    </span>
                            </Link>)
                        })}
                    </CardContent>
                </Card>
            </div>
            </div>
        </div>
    )
}