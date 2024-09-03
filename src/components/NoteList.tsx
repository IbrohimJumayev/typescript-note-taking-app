import { RootState } from "../store/store";
import { useSelector } from "react-redux";
import { Notes } from "../store/slices/notesSlice";
import { Link } from "react-router-dom";

const NoteList = () => {
  const notes = useSelector((state: RootState) => state.notes.notes);
  return (
    <ul className="grid mt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {notes.map((n: Notes, index: number) => (
        <li
          key={index}
          className="bg-yellow-100 border border-yellow-300 rounded-lg shadow-md pb-10 pt-2 px-2"
        >
          <strong>Note: {index + 1}</strong>
          <Link to={`/${n.id}`}>
            <p className="text-gray-800">
              {n.note.length > 100 ? n.note.slice(0, 100) + "...." : n.note}{" "}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
