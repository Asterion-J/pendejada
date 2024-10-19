import Link from 'next/link';

const NavBar = () => {
    return (
        <nav style={styles.nav}>
            <ul style={styles.ul}>
                <li style={styles.li}>
                    <Link href="/dogs">
                        Perros
                    </Link>
                </li>
                <li style={styles.li}>
                    <Link href="/cats">
                        Gatos
                    </Link>
                </li>
                <li style={styles.li}>
                    <Link href="/foxes">
                        Zorros
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

const styles = {
    nav: {
        marginBottom: '20px',
    },
    ul: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        padding: '0',
    },
    li: {
        margin: '0 10px',
    },
};

export default NavBar;
