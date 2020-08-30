import Link from 'next/link'

function ThemeButtonLink ({name, href}) {
    return (
        <>
            <Link href={href}><a className="theme-btn">{name}</a></Link>
            <style jsx>{`
                .theme-btn {
                    background-color: #3FA8F3;
                    color: #FFFFFF;
                    font-size: 32px;
                    font-weight: bold; 
                    border: none;
                    border-radius: 5px;
                    width: 400px;
                    height: 64px;
                    display: block;
                    text-transform: capitalize;                   
                    margin-bottom: 20px;
                    text-align: center;
                    line-height: 2;
                }
            `}</style>
        </>
    )
}

export default ThemeButtonLink