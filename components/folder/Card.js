import Link from 'next/link'

function Card ({name, folderId, cardId}) {

    const concatHref = `/card/${folderId}/${cardId}`;

    return (
        <>
            <Link href={concatHref} ><a className="folder-card">{name}</a></Link>
            <style jsx>{`
                .folder-card {
                    display: block;
                    width: 100%;
                    padding: 5px 15px;
                    background-color: #E5E5E5;
                    box-sizing: border-box;
                    border: 1px solid black;
                    border-top: none;
                    font-size: 20px;
                    margin-bottom: 4px;
                }
            `}</style>
        </>
    );
}

export default Card 