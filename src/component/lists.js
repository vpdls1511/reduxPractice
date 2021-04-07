import {connect} from "react-redux";
import { delTodoList } from "../redux/todos/actions";

const Lists = (props) =>{
    return (
        <div>
            <ul>
                {props.content.map( (doc, key) => {
                    return(
                        <li key={key}>
                            <a onClick={() =>{
                                console.log(doc.id)
                                console.log(props.content)
                                props.delTodoList(doc.id)
                            }}> 삭제 </a>
                            {doc.desc}
                        </li>
                    )
                } )}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        count:state.count,
        content : state.content
    }
}

const mapDispatchToProps = { delTodoList }

export default connect(mapStateToProps, mapDispatchToProps)(Lists)
