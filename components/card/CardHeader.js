import Link from 'next/link'

function CardHeader({folderName, cardName}) {
    return (
        <>
            <div className="card-header">
                <Link href="/home"><a><img src="/left-arrow.svg" /></a></Link>
                <h3>{`${folderName} / ${cardName}`}</h3>
            </div>
            <style jsx>{`
                .card-header{
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    width: 800px;
                }

                .card-header a {
                    width: 80px;
                    height: 80px;
                    margin-right: 100px;
                }

                .card-header img {
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </>
    );
}

export default CardHeader