import { useDispatch, useSelector } from 'react-redux';
import { getAllColors, getAllShapes } from '../../data/parser';
import { toggleColorFilter, toggleShapeFilter } from '../../redux/main/actions';
import { getSelectedColors, getSelectedShapes } from '../../redux/main/selectors';
import StringUtils from '../../util/string';
import Card from './components/card';
import ColorItem from './components/color.item';
import ShapeItem from './components/shape.item';
import './main.css'
import { setLoginUser } from '../../redux/auth/actions';
const SHAPES = getAllShapes();
const COLORS = getAllColors();
function MainPage(props: any) {
    const selectedShapes = useSelector(getSelectedShapes);
    const selectedColors = useSelector(getSelectedColors);
    const dispatch = useDispatch();
    const toggleShapeItemSelection = (shape: string) => {
        dispatch(toggleShapeFilter(shape));
    }

    const toggleColorItemSelection = (color: string) => {
        dispatch(toggleColorFilter(color));
    }

    const getMergedItems = () => {

        let shapes = Object.keys(selectedShapes);

        let colors = Object.keys(selectedColors);

        return shapes.map((shape) => {
            return colors.map((color) => {
                return { shape, color };
            });
        }).reduce((prev, current) => {
            return prev.concat(current);
        }, []);

    }

    const getItemsList = () => {

        return getMergedItems().map((element) => {
            return <Card key={`${element.color}${element.shape}`} color={element.color} shape={element.shape} />
        });

    }

    const areAllShapesSelcted = () => Object.keys(selectedShapes).length === SHAPES.length;

    const areAllColorsSelected = () => Object.keys(selectedColors).length == COLORS.length;

    const areMultipleColorsSelected = () => Object.keys(selectedColors).length > 1 && Object.keys(selectedColors).length < COLORS.length;

    const areMultipleShapesSelected = () => Object.keys(selectedShapes).length > 1 && Object.keys(selectedShapes).length < SHAPES.length;

    const getGridTitle = () => {

        const selectedColorsList = Object.keys(selectedColors);

        const selectedShapesList = Object.keys(selectedShapes);

        if (areAllColorsSelected() && areAllShapesSelcted()) {
            return "All Items";
        }

        else if ((areAllColorsSelected() && areMultipleShapesSelected()) || (areAllShapesSelcted() && areMultipleColorsSelected())) {
            return "Multiple Items";
        }

        else if (areAllShapesSelcted() && selectedColorsList.length == 1) {

            return `All ${selectedColorsList[0]} items`;

        }

        else if (areAllColorsSelected() && selectedShapesList.length == 1) {

            return `All ${selectedShapesList[0]} items`;

        }

        else if (areMultipleColorsSelected() && areMultipleShapesSelected()) {
            return `Multiple items`;
        }

        else if (areMultipleShapesSelected() && selectedColorsList.length == 1) {

            return `Multiple ${selectedColorsList[0]} items`;

        }

        else if (areMultipleColorsSelected() && selectedShapesList.length == 1) {

            return `Multiple ${selectedShapesList[0]} items`;

        }

        else if (selectedColorsList.length == 1 && selectedShapesList.length == 1) {
            return `${StringUtils.titleCase(selectedShapesList[0])} items`
        }

    }

    return <div className="content-wrapper">
        <h3 className="filtersTitle">Filters</h3>
        <h4 className="shapesFilterTitle">Shapes</h4>
        <div className="shapes">
            {SHAPES.map((element) => <ShapeItem key={element} onClick={toggleShapeItemSelection} name={element}
                selected={selectedShapes[element]} />)}
        </div>

        <h4 className="colorsFilterTitle">Colors</h4>
        <div className="colors">
            {COLORS.map((element) => <ColorItem key={element} onClick={toggleColorItemSelection} colorCode={element}
                selected={selectedColors[element]} />)}
        </div>

        <h3><b>{getGridTitle()}</b></h3>

        <div className="items-grid">
            {getItemsList()}
        </div>
    </div>

}

export default MainPage;