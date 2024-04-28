const Box = props => {
    return (
        <div className="box" onClick={props.onClick} id= {props.id}>
        {props.content[props.id]?props.content[props.id]:""}
        </div>
    );
}

export default Box;