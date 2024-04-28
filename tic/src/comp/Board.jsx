import Box from "./Box"

const Board = props => {
    const boxes = [...Array(9)].map((box, index) => <Box key = {index} id = {index} onClick = {props.onClick} content = {props.content}/>);
    return(
        <div className = 'board'>
            {boxes}
        </div>
    );
}

export default Board;