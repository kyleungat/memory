import Link from 'next/link'
import Layout2 from '../../components/layouts/Layout2'
import CardHeader from '../../components/card/CardHeader'
import CardPanel from '../../components/card/CardPanel'
import Card from '../../components/card/Card'
import { useRouter } from 'next/router'
import { useState } from 'react'

const hardcodeItems = [
    "home",
    "school",
    "bus stop",
    "station",
    "company",
]

export default function cardpage ({card}) {

    const router = useRouter();
    const slug = router.query.slug;

    const [ mode, setMode ] = useState('view');

    return (
        <>  
            <Layout2 title="card">
                <CardHeader folderName="folder1" cardName="card1"/>
                <CardPanel mode={mode} setMode={setMode}/>
                <Card question={"Q: Where are your favourite places?"} items={hardcodeItems} mode={mode}/>
            </Layout2>
        </>
    );
}

// export async function getStaticPaths() {
//     // Return a list of possible value for id
// }

// export async function getStaticProps({ params }) {
//     // Fetch necessary data for the blog post using params.id
//     console.log('params', params);
//     return {
//         props: {
//             card: {
//                 question: "where are u?",
//                 items: ['home', 'school', 'heaven'],
//             }
//         }
//     }
// }