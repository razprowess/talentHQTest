import StringUtils from "../../../util/string";
import "./color.item.css";

type IProps = {
    colorCode:string;
    selected:boolean;
    onClick: (item:string)=>void
}

function ColorItem({selected, colorCode, onClick}: IProps){

    const onItemClicked = ()=>{
        onClick(colorCode);
    }

    return <div onClick={onItemClicked} className={`color-item ${selected ? 'color-item-selected' : ''}`} style={{backgroundColor:colorCode}}>
    </div>
}

export default ColorItem;