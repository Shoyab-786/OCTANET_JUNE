import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Noteapp = () => {
    const [todo, setTodo] = useState('');
    const [checkAdd, setCheckAdd] = useState(false);
    const [editable, setEditable] = useState(false);
    const [flaged, setFlaged] = useState(false);
    const [category, setCategory] = useState('General');
    const todayDate = new Date().toISOString().split('T')[0];
    const [date, setDate] = useState(todayDate);
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : [];
    });
    const [showFinished, setshowFinished] = useState(false);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleAdd = () => {
        if (!todos.some((item) => item.todo === todo)) {
            if (todo.trim() !== '') {
                setTodos([...todos, { id: uuidv4(), todo, isCompleted: false, flaged, category, date }]);
                setCheckAdd(false);
                setEditable(false);
                setFlaged(false);
                setCategory('General');
                setDate(todayDate);  // Reset date to today's date
                setTodo('');
            } else {
                alert('Empty');
            }
        } else {
            alert('Already Exist');
        }
    }

    const handleCheckAdd = () => {
        setCheckAdd(!checkAdd);
        setTodo('');
    };

    const handleCheckBox = (e) => {
        const id = e.target.name;
        const newTodos = todos.map((item) =>
            item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
        );
        setTodos(newTodos);
    }

    const handleFlaged = (id) => {
        const newTodos = todos.map((item) =>
            item.id === id ? { ...item, flaged: !item.flaged } : item
        );
        setTodos(newTodos);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleEdit = (e, id) => {
        setEditable(true);
        setCheckAdd(true);
        const updatedTodo = todos.find((item) => item.id === id);
        setTodo(updatedTodo.todo);
        setFlaged(updatedTodo.flaged);
        setCategory(updatedTodo.category);
        // setDate(updatedTodo.date);  // Set the date for the todo being edited
        const editDate = new Date(updatedTodo.date).toISOString().split('T')[0];
        setDate(editDate);
        const newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    }


    const handleDelete = (e, id) => {
        if (window.confirm('Do you want to delete it!')) {
            const newTodos = todos.filter((item) => item.id !== id);
            setTodos(newTodos);
        }
    }

    const toggleFinished = () => {
        setshowFinished(!showFinished);
    }

    return (
        <>
            <div className="noteCard container-fluid py-5">
                <div className="container rounded todoContainer p-0">
                    <div className="mx p-3 pb-0">
                        <h4 className='text-center heading'>Taskify - Manage Your Tasks.</h4>
                        {checkAdd && <div className="createTod mt-4 gap-2 flex-lg-row flex-md-row flex-column">
                            <input onChange={handleChange} type="text" className='rounded-pill addInput p-2' value={todo} autoFocus />
                            <div className="my-3 d-flex justify-content-between">
                                <div className="">
                                    <label htmlFor="flag">Flag</label> <input type="checkbox" checked={flaged} name="flag" id="" value={flaged} onChange={() => setFlaged(!flaged)} />
                                </div>
                                <select name="" id="" onChange={handleCategory} value={category}>
                                    <option value="General">General</option>
                                    <option value="Personal">Personal</option>
                                </select>
                                <input type="date" name="" id="" onChange={handleDate} value={date} />
                            </div>
                            <button onClick={handleAdd} className="rounded-pill addBtn p-2 bg-dark text-white my-2 w-100">Save</button>
                        </div>}
                        <div className="mt-3 d-flex justify-content-between">
                            <h5 className='m-0 sub-heading'>Your Notes...</h5>
                            {!editable && <button className="btn bg-dark text-white fw-bold btn-outline-0 border-0" onClick={handleCheckAdd}>{checkAdd ? 'Cancel' : 'Add New'}</button>}
                        </div>
                        <input type="checkbox" name="" id="" onChange={toggleFinished} checked={showFinished} className='my-3' /> Show Finished
                    </div>
                    <div className="todos py-3 px-1" style={{ background: '#eee8ff' }}>
                        {todos.length === 0 && <div>No Todo to display</div>}
                        {todos
                            .sort((a, b) => b.flaged - a.flaged)
                            .map((item, i) => {
                                return (showFinished || !item.isCompleted) &&
                                    <div key={item.id} className={`todo ${item.flaged ? 'flagged' : ''} ${item.isCompleted && 'bg-danger'} d-flex align-items-center justify-content-between text-center my-1 px-2 rounded`}>
                                        <div className="data d-flex gap-3 align-items-center">
                                            <input type="checkbox" checked={item.isCompleted} onChange={handleCheckBox} name={item.id} />
                                            <div className={`text ${item.isCompleted ? 'lineThrough' : ''}`}>{item.todo}</div>
                                        </div>
                                        <div className="buttons d-flex gap-2 justify-content-between">
                                            <div onClick={(e) => { handleFlaged(item.id) }} className={`rounded p-1 pointer bg-dark ${item.flaged ? 'text-success' : 'text-white'} my-2`}><i className="fa-solid fa-flag fa-lg"></i></div>
                                            <div className="rounded p-1 bg-dark p-1 text-white my-2" style={{ width: '26%' }}>{item.category}</div>
                                            <div className="rounded p-1 bg-dark text-white my-2">{item.date}</div>
                                            <button onClick={(e) => { handleEdit(e, item.id) }} disabled={checkAdd} className={`rounded ${checkAdd ? '' : 'pointer'} p-1 bg-dark text-white my-2`}>
                                                <i className="fa-solid fa-pen-to-square fa-lg" style={{ color: 'white' }}></i>
                                            </button>
                                            <button onClick={(e) => { handleDelete(e, item.id) }} disabled={checkAdd} className={`rounded ${checkAdd ? '' : 'pointer'} p-1 bg-dark text-white my-2`}>
                                                <i className="fa-solid fa-trash-can fa-lg" style={{ color: 'white' }}></i>
                                            </button>
                                        </div>
                                    </div>
                            })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Noteapp;