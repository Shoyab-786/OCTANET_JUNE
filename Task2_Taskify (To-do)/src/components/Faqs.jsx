import React from 'react'

const Faqs = () => {
    return (
        <>
            <div className="container">
                <h1 className='my-5'>Frequently Asked Questions</h1>
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How do I add a new task?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body bg-dark text-white">
                                To add a new task, simply click on the "Add Task" button and enter the task details in the input field. Press the "Save" button to add the task to your list.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How do I mark a task as complete?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body bg-dark text-white">
                                To mark a task as complete, simply click on the checkbox next to the task. The task will be crossed out to indicate that it has been completed.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button bg-dark text-white collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Can I edit or delete a task?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body bg-dark text-white">
                                Yes, you can edit or delete a task. To edit a task, click on the "Edit" button next to the task and make your changes. To delete a task, click on the "Delete" button next to the task.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faqs