'use client';

import { useState } from 'react';
import NavBar from '../../components/NavBar';

export default function CatPage() {
    const [catImage, setCatImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCatImage = async () => {
        setLoading(true);
        const res = await fetch('https://api.thecatapi.com/v1/images/search');
        const data = await res.json();
        setCatImage(data[0].url);
        setLoading(false);
    };

    return (
        <div style={styles.content}>
            <NavBar />
            <div style={styles.container}>
                <div style={styles.header}>
                    <h1 style={styles.title}>Gatitos</h1>
                    <button onClick={fetchCatImage} style={styles.button}>
                        {loading ? '...' : '↺'}
                    </button>
                </div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    catImage && <img style={styles.image} src={catImage} alt="Random Cat" />
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
