import {useState, useEffect} from 'react';
import { getSession, signIn } from 'next-auth/react'

function Dashboard() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const seCurePage = async () => {
            const session = await getSession();
            if (!session) {
                signIn()
            } else {
                setLoading(false);
            }
        }
        seCurePage();
    }, [])

    if (loading) {
        return <h2>Loading...</h2>
    }

    return <h1>Dashboard Page</h1>
}

export default Dashboard;