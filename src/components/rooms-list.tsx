import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { dayjs } from "@/utils/format-relative-date";
import { ArrowRight } from "lucide-react";
import { useRooms } from "@/http/use-rooms";


export function RoomsList() {

    const { data, isLoading } = useRooms();
    return (
        <Card>
            <CardHeader>
                <CardTitle>Salas</CardTitle>
                <CardDescription>Acesso rápido para as salas recentes</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
                {isLoading && (<p className="text-muted-foreground text-sm">Carregando salas...</p>)}
                {data?.map(room => {
                    return (<Link to={`/room/${room.id}`} key={room.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent">
                        <div className="flex-1 flex flex-col gap-1">
                            <h3 className="font-medium">{room.name}</h3>

                            <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="text-xs">
                                    {room.questionsCount} pergunta(s)
                                </Badge>
                                <Badge variant="secondary" className="text-xs">
                                    {dayjs(room.createdAt).fromNow()}
                                </Badge>
                            </div>
                        </div>
                        <span className="flex items-center gap-2 text-sm">
                            Entrar
                            <ArrowRight className="size-3" />
                        </span>
                    </Link>)
                })}
            </CardContent>
        </Card>
    )
}
