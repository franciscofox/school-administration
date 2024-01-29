export default async function LogIn(username: string, password: string) {
    try {
        const res = await fetch(`http://ec2-18-224-135-214.us-east-2.compute.amazonaws.com4000/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await res.json();
        console.log('data', data);

        if (res.ok) {
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                localStorage.removeItem('token');
            }, 3600000);
            return data;
        } else {
            throw new Error(data.message || 'Error logging in');
        }
    } catch (error) {
        throw new Error((error as Error).message || 'Network error');
    }
}
