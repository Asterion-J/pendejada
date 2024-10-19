import Link from 'next/link';
import NavBar from '../components/NavBar';

const HomePage = () => {
    return (
        <div>
            <NavBar />
            <h1>Bienvenido a My Showcase App</h1>
            <p>Explora las diferentes páginas para ver imágenes aleatorias:</p>
            <ul>
                <li>
                    <Link href="/dogs">Perros</Link>
                </li>
                <li>
                    <Link href="/cats">Gatos</Link>
                </li>
                <li>
                    <Link href="/foxes">Zorros</Link>
                </li>
            </ul>
        </div>
    );
};

export default HomePage;
