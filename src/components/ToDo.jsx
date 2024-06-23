import './ToDo.css'

export default function ToDo({ tasks, len, removeTask }) {

    let title = <h2>Out of Tasks!</h2>

    if(len > 0){
        title = <h2>You still have {len} Tasks to do:</h2>
    }
    
    return(
        <div className='container'>
            <ol>
                {title}
                {tasks && tasks.map((task, taskIndex) => 
                    <span className='slide'>
                        <span>
                            <li key={taskIndex}>{task}</li>
                        </span>
                        <span>
                            <button onClick={() => removeTask(taskIndex)} className='btn-remove'>Delete</button>
                        </span>
                    </span>
                    )}
            </ol>
        </div>
    )
}