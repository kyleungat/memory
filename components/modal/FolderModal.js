import Modal from 'react-modal';
import ThemeInput from '../theme-UI/ThemeInput'
import ThemeButton from '../theme-UI/ThemeButton'


const customStyles = {
    content : {
      top: '50%',
      left: '50%',
      width: "500px",
      height: "250px",
      transform: 'translate(-50%, -50%)',
      backgroundColor: "#7CC9FF",
      color: "#FFFFFF",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    }
};

function FolderModal({isOpen}) {
    return (
        <Modal
            isOpen={isOpen}
            // onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>New Folder</h2>
            <ThemeInput name="newfolder" label="name" type="text" placeholder="not more than 20 chars"/>
            <ThemeButton name="submit"/>
        </Modal>
    );
}

export default FolderModal;