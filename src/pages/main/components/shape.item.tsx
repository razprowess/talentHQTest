import StringUtils from "../../../util/string";
import "./shape.item.css";

type IProps = {
    name:string;
    selected:boolean;
    onClick: (item:string)=>void
}

function ShapeItem({selected, name, onClick}: IProps){

    const onItemClicked = ()=>{
        onClick(name);
    }

    return <div onClick={onItemClicked} className={`shape-item ${selected ? 'shape-item-selected' : ''}`}>
        {StringUtils.titleCase(name)}
    </div>
}

export default ShapeItem;