export default function StudentDetails({params}: {
    params: {studentId: string}
}) {
    return <h1>Here we'll display the student details for the selected student {params.studentId}.</h1>
}