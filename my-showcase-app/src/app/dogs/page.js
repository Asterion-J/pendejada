'use client';

import { useState } from 'react';
import NavBar from '../../components/NavBar';

export default function DogPage() {
    const [dogImage, setDogImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchDogImage = async () => {
        setLoading(true);
        const res = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await res.json();
        setDogImage(data.message);
        setLoading(false);
    };

    return (
        <div style={styles.content}>
            <NavBar />
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Perritos</h1>
                    <button onClick={fetchDogImage} style={styles.button}>
                        {loading ? '...' : '↺'}
                    </button>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    dogImage && <img style={styles.image} src={dogImage} alt="Random Dog" />
                )}
            </div>
        </div>
    );
}

const styles = {
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    container: {
        marginTop: '20px',
        padding: '10px',
        borderRadius: '10px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        width: '400px',
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '10px',
    },
    title: {
        fontSize: '30px',
    },
    button: {
        background: '#87ee86',
        padding: '10px',
        borderRadius: '20px',
        width: '42px',
    },
    image: {
        borderRadius: '10px',
        width: '100%',
    },
};
