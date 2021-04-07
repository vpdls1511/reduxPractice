import { addTodoList } from "../redux/todos/actions";
import { connect } from "react-redux";
import { useState } from "react";

const InputBox = (props) => {
    const [todoDesc, setTodoDesc] = useState('')

    const handleChange = (e) => {
        setTodoDesc(e.target.value)
    }
    return (
        <div>
            <input
                type='text'
                value={todoDesc}
                onChange={handleChange}
                onKeyPress={e => {
                    if (e.key === 'Enter') props.addTodoList(Math.random() * 10, todoDesc)
                }}
            />
        </div>
    )
}

const mapDispatchToProps = {
    addTodoList
}

export default connect(null, mapDispatchToProps)(InputBox)
