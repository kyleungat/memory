import Layout2 from '../components/layouts/Layout2'
import ThemeButton from '../components/theme-UI/ThemeButton'
import Folder from '../components/folder/Folder'
import { useState } from 'react'
import FolderModal from '../components/modal/FolderModal'


let hardcodeFolder = [
    {
        folder: { name: "first folder", folderId: 1},
        cards: [
            {folderId: 1, cardId: 1, name: "f1 card1"},
            {folderId: 1, cardId: 2, name: "f1 card2"},
            {folderId: 1, cardId: 3, name: "f1 card3"},
        ]
    }, 
    {
        folder: { name: "second folder", folderId: 2},
        cards: [
            {folderId: 2, cardId: 1, name: "f1 card1"},
            {folderId: 2, cardId: 2, name: "f1 card2"},
            {folderId: 2, cardId: 3, name: "f1 card3"},
        ]
    }, 
]


function home () {

    const [ isFolderModalOpen, setIsFolderModalOpen ] = useState(false);

    return (
            <Layout2 title="Home - MCard">
                <ThemeButton name="new folder" callback={() => setIsFolderModalOpen(!isFolderModalOpen)}/>
                    {hardcodeFolder.map(element => {
                        return (
                            <Folder key={element.folder.folderId} folder={element.folder} cards={element.cards}/>
                        );
                    })}
                <FolderModal isOpen={isFolderModalOpen}/>
            </Layout2>
    );
}

export default home