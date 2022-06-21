import { useState } from 'react';
import AddTask from './add.js';
import EditTask from './Edit.js';
import pic1 from './icon/star.png'
import pic2 from './pictures/pic8.jpg'
import pic3 from './icon/brightness.png'
import pic4 from './icon/calendar.png'
import pic5 from './icon/infinity.png'
import pic6 from './icon/check.png'
import pic7 from './icon/house.png'
import pic8 from './icon/plus.png'


import './App.css'


function TodoList() {

    const [ButtonPopup, setButtonPopup] = useState(false);
    const [ButtonPopupEdit, setButtonPopupEdit] = useState(false);
    let [UpdateToDoList, setUpdateToDoList] = useState([]);
    let [ToDoList] = useState([])
    let [list, setlist] = useState([])
    let [ToDoListEnter, setToDoListEnter] = useState({
        id: '',
        title: '',
        description: '',
    });
    const DeleteList = (id) => {
        console.log(list)
        setlist(list.filter((t)=> t.id !==id))
        console.log(list)
    }
    const Edit = (data) => {
        setUpdateToDoList(data)
        setButtonPopupEdit(true)
    }
    const handleChangeUpdate = e => {
        const { name, value } = e.target;
        setUpdateToDoList(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const addTasks = () => {
        setToDoListEnter('');
        setToDoListEnter('');
        setButtonPopup(true)

    }




    const Add = () => {
        const d = new Date();
        ToDoListEnter.id = d.getTime();
        list.push(ToDoListEnter)
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setToDoListEnter(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    const updateToDoList = () => {
        ToDoList[UpdateToDoList.id] = UpdateToDoList.id
        ToDoList[UpdateToDoList.title] = UpdateToDoList.title
        ToDoList[UpdateToDoList.description] = UpdateToDoList.description
        alert('Updated List Successfully')
        return setButtonPopupEdit(false)
    }
    let addPopUp = (
        <div className="main">
            <div className="header">
                <h1>List your Task</h1>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" value={ToDoListEnter.title} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name="description" id="description" cols="30" rows="10" value={ToDoListEnter.description} onChange={handleChange} className="form-control"></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn" onClick={Add}>Add</button>
            </div>
        </div>
    );
    let editPopUp = (
        <div className="main">
            <div className="header" key={UpdateToDoList.id}>
                <h1>Update your Task</h1>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" value={UpdateToDoList.title} onChange={handleChangeUpdate} className="form-control" />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name="description" id="description" cols="30" rows="10" className="form-control" value={UpdateToDoList.description} onChange={handleChangeUpdate}></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn" onClick={updateToDoList}>Update</button>
            </div>
        </div>
    );
    return (
        <div>
            <body>
                <section>

                    <div class="two" id="two">

                        <div class="Pic" id="Pic">
                            <img src={pic2} alt="PP" />
                            <p>Siri Pro</p>
                        </div>


                        <div class="Search" id="Search">
                            <input type="text" name="search" placeholder="Search" class="control-form" />
                            
                        </div>
                        <div class="Day" id="Day">
                            <img src={pic3} alt="PP" />
                            <p>My Day</p>
                        </div>
                        <div class="Important" id="Important">
                            <img src={pic1} alt="PP" />
                            <p>Important</p>
                        </div>

                        <div class="Planned" id="Planned">
                            <img src={pic4} alt="PP" />
                            <p>Planned</p>
                        </div>
                        <div class="Assigned" id="Assigned">
                            <img src={pic5} alt="PP" />
                            <p>Assigned to me</p>
                        </div>
                        <div class="Completed" id="Completed">
                            <img src={pic6} alt="PP" />
                            <p>Completed</p>
                        </div>
                        <div class="Task" id="Assigned">
                            <img src={pic7} alt="PP" />
                            <p>Task</p>
                        </div>

                        <div class="new" id="new">
                        <img src={pic8} alt="PP" />
                            <p>Add New Activity</p>
                            
                        </div>

                    </div>
                    <div class="one" id="one">


                        <div class="Photo" id="Photo">
                            <p>Vocabulary</p>
                           

                        </div>

                        <div id="myDIV" class="myDIV">

                            <input type="text" name="title" id="myInput" placeholder="Title..."
                                onChange={handleChange} value={ToDoListEnter.title} />

                            <button type="button" onClick={addTasks}>Add</button>
                        </div>

                        <AddTask trigger={ButtonPopup} setTrigger={setButtonPopup}>
                            {addPopUp}
                        </AddTask>

                        {list.map((anyV, xad) => (
                            <div id="display" class="display" key={xad}>
                                <h>{anyV.title} </h>
                                <p>{anyV.description}</p>
                                <button type="button" onClick={Edit}>Edit</button>
                                <button type="button" onClick={() => DeleteList(anyV.id)}>Delete</button>
                            </div>
                        ))}

                        {<EditTask triggerEdit={ButtonPopupEdit} setTriggerEdit={setButtonPopupEdit}>
                            {editPopUp}
                        </EditTask>}

                    </div>

                </section>


            </body>
        </div>

    )

}
export default TodoList

