import Link from 'next/link'

function ThemeLink ({text, href, type}) {
    return (
        <>
            <span><Link href={href}><a className={"theme-link " + type } >{text}</a></Link></span>
            <style jsx>{`
                .theme-link {
                    margin-bottom: 10px;
                    display: block;
                }

                .theme-link.primary{              
                    color: #7CC9FF;
                    font-size: 32px;
                    font-weight: bold;
                }

                .theme-link.primary:hover{              
                    color: #3FA8F3;
                }

                .theme-link.secondary{              
                    text-decoration: underline;
                }

                .theme-link.secondary:hover{              
                    color: #C4C4C4;
                }
            `}</style>
        </>
    )
}

export default ThemeLink