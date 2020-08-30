import Card from './Card';

function CardList ({cards}) {
    return (
        cards.map(element => {
            return (
                <Card 
                    key={element.cardId} 
                    name={element.name} 
                    cardId={element.cardId}
                    folderId={element.folderId}
                />
            )
        })
    );
}

export default CardList