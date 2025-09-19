import { Button } from "@/components/ui/button";
import { useRef, useState } from "react";
import { Navigate, useParams } from "react-router-dom";

const IsRecordingSupported = !!navigator.mediaDevices
    && typeof navigator.mediaDevices.getUserMedia === 'function'
    && typeof window.MediaRecorder === 'function';

type RoomParams = {
    roomId: string
}

export function RecordRoomAudio() {

    const params = useParams<RoomParams>()



    const [isRecording, setIsRecording] = useState(false);

    const recorder = useRef<MediaRecorder | null>(null);

    async function stopRecording() {
        setIsRecording(false);

        if (recorder.current && recorder.current.state !== 'inactive') {
            recorder.current.stop();
        }

    }

    async function uploadAudio(audio: Blob) {
        const formData = new FormData();
        formData.append('file', audio, 'audio.webm');
        const response = await fetch(`http://localhost:3000/rooms/${params.roomId}/audio`, {
            method: 'POST',
            body: formData,
        });
        const result = await response.json();
        console.log(result);
    }

    async function startRecording() {
        if (!IsRecordingSupported) {
            alert('Não é possível gravar áudio');
            return;
        }

        setIsRecording(true);

        const audio = await navigator.mediaDevices.getUserMedia({
            audio: {
                echoCancellation: true,
                noiseSuppression: true,
                sampleRate: 44_100,
            }
        });

        recorder.current = new window.MediaRecorder(audio, {
            mimeType: 'audio/webm',
            audioBitsPerSecond: 64_000,
        });


        recorder.current.ondataavailable = (event) => {
            if (event.data.size > 0) {
                uploadAudio(event.data);
            }
        };

        recorder.current.onstart = () => {

        }

        recorder.current.onstop = () => { }

        recorder.current.start();
    }

    if (!params.roomId) {
        return <Navigate replace to="/" />
    }

    return (
        <div className="flex flex-col gap-3 h-screen items-center justify-center">
            {isRecording ? <Button onClick={stopRecording}>Parar Gravação</Button> : <Button onClick={startRecording}>Gravar Áudio</Button>}
            {isRecording ? <p>Gravando...</p> : <p>Pausado</p>}
        </div>
    )
}
