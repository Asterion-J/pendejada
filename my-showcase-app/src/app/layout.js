import '../styles/globals.css';

export const metadata = {
    title: 'My Showcase App',
    description: 'Un showcase de varias APIs',
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <div className="container">
                    {children}
                </div>
            </body>
        </html>
    );
}

