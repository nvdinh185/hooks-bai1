export default function PostItem(props) {
    return (
        <li>
            <h4>
                <a href="#" title={props.title}>
                    {props.title}
                </a>
            </h4>
            <a href="#" title="">
                <img src={"/images/" + props.image} alt={props.image} />
            </a>
            <p>
                {props.content}
            </p>
        </li>
    )
}