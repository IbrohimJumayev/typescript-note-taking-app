import { useDispatch } from "react-redux";
import { add } from "../store/slices/notesSlice";
import { useState } from "react";
interface Notes {
  id: string;
  note: string;
}

const AddingNote = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (note.trim() !== "") {
      const NewNote: Notes = {
        id: Date.now().toString(),
        note: note,
      };
      dispatch(add(NewNote));
      setNote("");
    }
  };
  return (
    <div className="sm:mt-10 mt-3 flex max-sm:flex-col justify-start items-start gap-10">
      <form
        onSubmit={handleSubmit}
        className="flex max-sm:flex-col justify-center items-start mt-3 gap-8"
      >
        <div className="bg-blue-200 hover:bg-blue-400 duration-300 active:scale-75">
          <button className="border-2 border-dashed border-black sm:px-4 sm:pt-3 sm:py-2 px-2 pt-1">
            <span className="material-symbols-outlined">add</span>
          </button>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          <div className="flex gap-5 max-sm:flex-col items-start">
            <label className="font-bold " htmlFor="title">
              Enter your note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="border-dashed border-2 px-2 py-2 font-semibold outline-none focus:border-blue-300"
              name=""
              id=""
              cols={40}
              rows={5}
            ></textarea>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddingNote;
