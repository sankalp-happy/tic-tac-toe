import Box from "./Box";

const Row = props => {
    return (
        <>
            <Box value={props.values[0]} onClick={() => props.onClick(0)} />
            <Box value={props.values[1]} onClick={() => props.onClick(1)} />
            <Box value={props.values[2]} onClick={() => props.onClick(2)} />
        </>
    );
}

export default Row;