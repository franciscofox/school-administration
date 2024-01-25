export default async function SignUp(username: string, password: string) {

    const res = await fetch(`http://ec2-18-188-55-5.us-east-2.compute.amazonaws.com:4000/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (res && res.ok) {
        const data = await res.json();
        alert(`Successfully signed up user ${data.username}`);
    } else {
        const errorData = await res.json();
        throw new Error(errorData.message);
    }
}
