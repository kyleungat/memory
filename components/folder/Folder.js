import CardList from './CardList'
import {useState} from 'react'


function Folder({ folder, cards }) {
    const [collapse, setCollapse] = useState(true);

    return (
        <>
            <div className="folder-container">
                <div className="folder-header" onClick={() => setCollapse(!collapse)}>
                    <span>{folder.name}</span>
                    <div>
                        <img src="/add.svg"/>
                        <img src={collapse? "/expand_more.svg" : "/expand_less.svg"} />
                    </div>
                </div>
                    { !collapse && 
                        <div className="folder-cardlist">
                            <CardList cards={cards} />
                        </div>                    
                    }
            </div>
            <style jsx>{`
                .folder-container {
                    width: 800px;
                    margin-bottom: 15px;
                }

                .folder-header {
                    width: 800px;
                    height: 50px;
                    font-size: 32px;
                    padding: 0 15px;
                    background-color: #7CC9FF;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .folder-header img {
                    width: 32px;
                    height: 32px;
                }

                .folder-header img:hover{
                    cursor: pointer;
                }

            `}</style>
        </>
    );
}

export default Folder