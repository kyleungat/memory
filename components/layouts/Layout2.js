import Head from 'next/head'
import ThemeLogo from '../theme-UI/ThemeLogo'
import UserProfile from '../theme-UI/UserProfile'

function Layout2({ title, children }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <header>
                <ThemeLogo href="/" />
                <UserProfile />
            </header>
            <div className="container">
                {children}
            </div>
            <style jsx>{`
                header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 800px;
                    margin: 0 auto;
                }

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

export default Layout2;