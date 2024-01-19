import Input from "./Input";
import React, { useContext, useRef } from "react";
import Modal from "./Modal";
import { ProjectContext } from "../Context/ProjectContextProvider";

function NewProject() {
  const { handleAdd: onAdd, handleCancleAddProject: onCancel } =
    useContext(ProjectContext);

  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDuedate = duedate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDuedate.trim() === ""
    ) {
      //show modal
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      duedate: enteredDuedate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption={"Okay"}>
        <h2 className="text-xl font-bold text-slate-500 my-4">Invalid Input</h2>
        <p className=" text-slate-500 mb-4">
          Oops ... looks Like you forgot to enter a value.
        </p>
        <p className=" text-slate-500 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16 mr-8">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="hover:text-stone-800 text-stone-600"
              onClick={onCancel}
            >
              Cancle
            </button>
          </li>
          <li>
            <button
              className="px-4 py-2 bg-slate-700 rounded text-slate-100 hover:bg-slate-500"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input textarea ref={description} label="Description" />
          <Input type="date" ref={duedate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
