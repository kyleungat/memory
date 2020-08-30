import Link from 'next/link'

function ThemeLogo ({href}) {
    return (
        <>
            <h1 className="theme-logo"><Link href={href}><a>MCard</a></Link></h1>
            <style jsx>{`
                .theme-logo {            
                    font-size: 100px;
                    text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
                    text-align: center;
                }
            `}</style>
        </>
    )
}

export default ThemeLogo