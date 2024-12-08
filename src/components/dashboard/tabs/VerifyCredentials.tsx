import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRoom } from "@huddle01/react/hooks";
import { useEffect, useState } from "react";

const VerifyCredentials = () => {
  const { state, joinRoom, leaveRoom } = useRoom({
    onJoin: () => console.log("Joined the room"),
    onLeave: () => console.log("Left the room"),
    onFailed: (data) => console.error("Join room failed:", data),
  });

  const [roomId, setRoomId] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch room ID and token dynamically
  useEffect(() => {
    const fetchRoomAndToken = async () => {
      setLoading(true);
      try {
        const roomResponse = await fetch("/api/create-room");
        const roomData = await roomResponse.json();
        setRoomId(roomData.roomId);

        const tokenResponse = await fetch(
          `/api/get-access-token?roomId=${roomData.roomId}`
        );
        const tokenData = await tokenResponse.json();
        setToken(tokenData.token);
      } catch (error) {
        console.error("Error fetching room or token:", error);
        alert("Failed to fetch room or token. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomAndToken();
  }, []);

  return (
    <Card className="p-6">
      <CardHeader>
        <CardTitle>Verify Credentials</CardTitle>
        <CardDescription>
          Join a room for video/audio credential verification.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {loading ? (
          <p>Loading room details...</p>
        ) : (
          <>
            {state === "connected" ? ( // Compare against the enumeration value
              <button
                onClick={leaveRoom}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Leave Room
              </button>
            ) : (
              <button
                onClick={() => {
                  if (roomId && token) {
                    joinRoom({ roomId, token });
                  } else {
                    alert("Room or token is missing.");
                  }
                }}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Join Room
              </button>
            )}

            <div>
              <p>
                <strong>Room State:</strong> {state}
              </p>
              <p>
                <strong>Room ID:</strong> {roomId || "N/A"}
              </p>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default VerifyCredentials;
