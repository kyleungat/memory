function CardPanel ({mode, setMode}) {
    return (
        <>
            <div className="card-panel">
                <img src={mode === "view" ? "/viewmode_selected.svg" : "/viewmode.svg"} onClick={() => setMode("view")}/>
                <img src={mode === "edit" ? "/editmode_selected.svg" : "/editmode.svg"} onClick={() => setMode("edit")}/>
                <img src={mode === "time" ? "/timemode_selected.svg" : "/timemode.svg"} onClick={() => setMode("time")}/>
                <img src={mode === "hint" ? "/hintmode_selected.svg" : "/hintmode.svg"} onClick={() => setMode("hint")}/>
            </div>
            <style jsx>{`
                .card-panel {
                    background-color: #7CC9FF;
                    padding: 5px;
                    margin-bottom: 15px;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    box-sizing: border-box;
                    border-radius: 3px;
                    cursor: pointer;
                }

                .card-panel img{
                    width: 40px;
                    hight: 40px;
                    border-radius: 3px;
                }
            `}</style>
        </>
    );
}

export default CardPanel;