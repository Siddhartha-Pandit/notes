const AddTodo = () => {
    return (
        <div className="hero-cointainer addNotes">
            <div className="addNotes-cointainer ">
                <form >
                    <div className="todo-todo">
                        <input className="checkbox" type="checkbox"></input>
                        <input className="title addtodo-cointainer" placeholder="Add your ToDo" type="text"></input>
                    </div>
                </form>

                <div className="bottom-bar bottom-todo">
                    <div className="set-date">
                        <form >
                            <input className="checkbox abc" type="datetime-local"></input>
                        </form >
                        <div className="remainder-textcointainer">
                            Set Remiander
                        </div>
                    </div>

                    <button>Done</button>
                </div>
            </div >
        </div >
    );
}

export default AddTodo;
