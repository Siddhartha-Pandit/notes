const Add = () => {
    function hover(){
       
        const a=document.querySelector(":root");
       
        a.style.setProperty('--translate-todo','0px')
        a.style.setProperty('--translate-notes','0px')
        
    } 
    function hoverRemove(){
       
        const a=document.querySelector(":root");
       
            a.style.setProperty('--translate-todo','56px')
            a.style.setProperty('--translate-notes','112px')
        
       
    } 
    return (
        <div>
            <div class="add-cointainer" onMouseOver={hover} onMouseOut={hoverRemove}>
                <div className="addNote-cointainer" onMouseOver={hover} onMouseOut={hoverRemove} >
                    <i class="uil uil-notes"></i>
                </div>
                <div className="addTodo-cointainer" onMouseOver={hover} onMouseOut={hoverRemove} >
                    <i class="uil uil-list-ul"></i>
                </div>
                <div className="plus-cointainer" onMouseOver={hover} onMouseOut={hoverRemove} >
                    <i class="uil uil-plus"></i>
                </div>
            </div>
        </div>
    );
}

export default Add;