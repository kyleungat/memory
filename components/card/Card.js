import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import ThemeInput from "../theme-UI/ThemeInput";


function Card({ question, items, mode }) {

    const [flipped, setFlipped] = useState(false)

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 0 : 180}deg)`,
        // display: flipped ? "flex" : "none",
    })

    const cardFrontStyle = {
        opacity: opacity.interpolate(o => 1 - o),
        transform: transform.interpolate(t => `${t} rotateY(180deg) `),
        width: "100%",
        height: "100%",
        display: !flipped ? "flex" : "none",
        fontSize: "20px",
        padding: "20px",
        color: "#FFFFFF",
        position: "absolute",
        backgroundColor: "#3FA8F3",
        alignItems: "center",
        justifyContent: "center",
    }

    const cardBackStyle = {
        opacity: opacity,
        transform: transform,
        width: "100%",
        height: "100%",
        display: flipped ? "flex" : "none",
        padding: "20px",
        position: "absolute",
        boxSizing: "border-box",
        flexDirection: "column",
        background: "linear-gradient(90deg, rgba(120,180,223,1) 29%, rgba(124,201,255,1) 100%)",
        color: "#FFFFFF",
        fontSize: "25px",
    }

    var card = null;
    switch (mode) {
        case "view":
            card = <><animated.div className="card-front-side" style={{ ...cardFrontStyle }}>
                <h3>{question}</h3>
            </animated.div>

                <animated.div className="card-back-side" style={{ ...cardBackStyle }}>
                    {items.map((element, index) => {
                        return (<p key={index}>{`${index+1}: ${element}`}</p>)
                    })}
                </animated.div></>
            break;

        case "edit":
            card = <><animated.div className="card-front-side" style={{ ...cardFrontStyle }}>
                <ThemeInput name="card-question" label="Q" type="text" placeholder="enter your question" />
            </animated.div>

                <animated.div className="card-back-side" style={{ ...cardBackStyle }}>
                    {items.map((element, index) => {
                        return (<ThemeInput key={index} name={`card-items-${index+1}`} label={index+1} type="text" />)
                    })}
                </animated.div></>

            break;
        default:
            break;
    }


    return (
        <>
            <div className="card" onMouseDown={() => setFlipped(!flipped)}>
                {card}
            </div>
            <style jsx>{`
                .card {
                    width: 500px;
                    height: 700px;
                    margin-bottom: 100px;
                    position: relative;
                }
            `}</style>
        </>
    )
}

export default Card

// .card-front-side, .card-back-side {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     font-size: 20px;
//     padding: 20px;
//     color: #FFFFFF;
//     position: absolute;
// }

// .card-front-side {
//     background-color: #3FA8F3;
//     align-items: center;
//     justify-content: center;
// }

// .card-back-side {
//     box-sizing: border-box;
//     border: 2px solid #000000; 
// }