export default function RoomDetails({params}: {
    params: {roomId: string}
}) {
    return <h1>Here we'll display the room details for the selected room {params.roomId}.</h1>
}