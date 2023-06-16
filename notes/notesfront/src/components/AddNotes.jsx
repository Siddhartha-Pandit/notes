const AddNotes = () => {
    return (
        <div className="hero-cointainer addNotes ">
            <div className="addNotes-cointainer">
                <form>
                    <input className="title notes-content" placeholder="Title" type="text"></input>
                    
                </form>
                <textarea placeholder= "Take a note..." className= "content" name="" id="" cols="30" rows="10"></textarea>
                <div className="bottom-bar bottom"><button>Done</button></div>
            </div >
            {/* <i class="uil uil-trash"></i> */}
        </div >
    );
}

export default AddNotes;
