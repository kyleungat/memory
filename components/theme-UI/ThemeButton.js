function ThemeButton ({name, callback}) {
    return (
        <>
            <button className="theme-btn" onClick={callback}>{name}</button>
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
                }
            `}</style>
        </>
    )
}

export default ThemeButton