import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Notes,
  bold,
  changeColor,
  changeSize,
} from "../store/slices/notesSlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

const SingleNote = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.notes.notes);
  const note = notes.find((n: Notes) => n.id === id);
  const fontSize = useSelector((state: RootState) => state.notes.fontSize);
  const isBold = useSelector((state: RootState) => state.notes.isBold);
  const color = useSelector((state: RootState) => state.notes.color);

  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeSize(e.target.value));
  };

  if (!note) {
    return <div>Note not found</div>;
  }
  return (
    <div>
      <div className="flex gap-5 items-center mt-5 ">
        <Link to="/">
          <button className="border border-black px-2 py-1 font-bold flex items-center gap-1 hover:bg-blue-500 hover:text-white hover:border-blue-400 duration-300 focus:scale-90">
            <span className="material-symbols-outlined font-semibold text-sm">
              arrow_back
            </span>
            back to list
          </button>
        </Link>
        <select
          onChange={handleSizeChange}
          className="outline-none border px-1 py-1"
          name="px"
          id="px"
          value={fontSize}
        >
          <option value="16">16px</option>
          <option value="17">17px</option>
          <option value="18">18px</option>
          <option value="19">19px</option>
          <option value="20">20px</option>
        </select>
        <button
          onClick={() => dispatch(bold(isBold))}
          className={`border font-bold px-2 py-1 duration-300 ${
            isBold ? "bg-black border-black  text-white" : ""
          }`}
        >
          bold
        </button>
        <div className="flex items-center gap-2">
          <label className="font-bold" htmlFor="color">
            Text color :
          </label>
          <input
            value={color}
            onChange={(e) => dispatch(changeColor(e.target.value))}
            type="color"
            name=""
            id="color"
          />
        </div>
      </div>
      <p
        style={{ fontSize: `${fontSize}px`, color: `${color}` }}
        className={`mt-10 ${isBold ? "font-bold" : ""}`}
      >
        {note.note}
      </p>
    </div>
  );
};

export default SingleNote;
