
function Content(props){
    return (
    <div className="container row py-5 mx-auto">
        <h2 className="p-3 mx-auto text-center">{props.title}</h2>
        {props.children}
    </div>
    )
}

export default Content;