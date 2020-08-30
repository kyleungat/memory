function ThemeInput ({name, label, type, placeholder, onChange, onClick, onFocus}) {
    return (
        <>
            <div className="theme-input-container">
                <label className="theme-label" htmlFor={name}>{label + ":"}</label>
                <input name={name} id={name} className="theme-input" type={type} placeholder={placeholder} onChange={onChange} onMouseDown={e =>{ e.stopPropagation()} }/>
            </div>
            <style jsx>{`
                .theme-input-container{
                    width: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    margin-bottom: 30px;
                }

                .theme-label { 
                    font-size: 24px;
                    text-transform: capitalize;
                    margin-right: 0.5em;             
                }

                .theme-input {
                    height: 32px;
                    flex: 1;
                    border: 1px solid #3FA8F3;
                    box-sizing: border-box;
                    border-radius: 4px;
                    padding: 0 1em;
                }

                .theme-input:focus{
                    border: 2px solid #3FA8F3;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                    outline: none;
                }

            `}</style>
        </>
    )
}

export default ThemeInput