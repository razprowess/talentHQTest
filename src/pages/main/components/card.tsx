import "./card.css";

type IProps = {
    color: string;
    shape: string;
}

function Card({ color, shape }: IProps) {

    //little quick fix for triagle shapes uses borderBottom.
    const isTriangle = shape == "triangle";

    const styles = {
         backgroundColor: !isTriangle ? color : "", 
        borderBottom: isTriangle ? `100px solid ${color}`: ""
     }

    return <div className="card-container"> <div className={"card"}>
    
        <div className={`card-${shape}`} style={styles}></div>
    </div></div>

}

export default Card;