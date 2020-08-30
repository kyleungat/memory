import Head from 'next/head'
import ThemeLogo from '../theme-UI/ThemeLogo'

function Layout1({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <ThemeLogo href="/" />
            <div className="container">
                {children}
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </>
    );
}

export default Layout1;