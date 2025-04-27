import { useReducer } from "react";
import "./App.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { BsBorder } from "react-icons/bs";

function reducer(state, action) {
  switch (action.type) {
    case "SET":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "ADD":
      let newUser = {
        id: new Date().getTime(),
        name: action.name,
        surname: action.surname,
      };
      return {
        ...state,
        name: "",
        surname: "",
        user: [...state.user, newUser],
      };
    case "DELETE":
      let filteredUser = state.user.filter((person) => person.id !== action.id);
      return {
        ...state,
        user: filteredUser,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        isEditing: true,
        editName: action.person.name,
        editSurname: action.person.surname,
        editId: action.person.id,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isEditing: false,
        editName: "",
        editSurname: "",
        editId: null,
      };
    case "SAVE_EDIT":
      let updatedUser = state.user.map((person) =>
        person.id === state.editId
          ? { ...person, name: state.editName, surname: state.editSurname }
          : person
      );
      return {
        ...state,
        user: updatedUser,
        isEditing: false,
        editName: "",
        editSurname: "",
        editId: null,
      };
    case "RESET":
      return {
        ...state,
        name: "",
        surname: "",
        user: [],
        isEditing: false,
        editName: "",
        editSurname: "",
        editId: null,
      };
    default:
      return state;
  }
}

function App() {
  let [state, dispatch] = useReducer(reducer, {
    name: "",
    surname: "",
    user: [],
    isEditing: false,
    editName: "",
    editSurname: "",
    editId: null,
  });

  return (
    <div>
      <input
        style={inputStyle}
        value={state.name}
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET", field: "name", value: e.target.value })
        }
        placeholder="Name"
      />
      <input
        style={inputStyle}
        value={state.surname}
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET", field: "surname", value: e.target.value })
        }
        placeholder="Surname"
      />
      <button
        style={addButton}
        onClick={() =>
          dispatch({ type: "ADD", name: state.name, surname: state.surname })
        }
      >
        Add
      </button>

      <button style={refreshButton} onClick={() => dispatch({ type: "RESET" })}>
        Refresh
      </button>

      <ul style={lists}>
        {state.user &&
          state.user.map((person) => (
            <li key={person.id} style={listItem}>
              {person.name} {person.surname}
              <div style={iconContainer}>
                <MdDelete
                  onClick={() => dispatch({ type: "DELETE", id: person.id })}
                />
                <MdEdit
                  onClick={() => dispatch({ type: "OPEN_MODAL", person })}
                />
              </div>
            </li>
          ))}
      </ul>

      {state.isEditing && (
        <div style={modalStyle}>
          <div style={modalContent}>
            <h2>Edit User</h2>
            <input
              style={inputStyle}
              value={state.editName}
              onChange={(e) =>
                dispatch({
                  type: "SET",
                  field: "editName",
                  value: e.target.value,
                })
              }
              placeholder="Edit Name"
            />
            <input
              style={inputStyle}
              value={state.editSurname}
              onChange={(e) =>
                dispatch({
                  type: "SET",
                  field: "editSurname",
                  value: e.target.value,
                })
              }
              placeholder="Edit Surname"
            />
            <button
              style={addButton}
              onClick={() => dispatch({ type: "SAVE_EDIT" })}
            >
              Save
            </button>
            <button
              style={refreshButton}
              onClick={() => dispatch({ type: "CLOSE_MODAL" })}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

const inputStyle = {
  marginRight: "25px",
  width: "250px",
  height: "30px",
  borderRadius: "10px",
  backgroundColor: "white",
};

const addButton = {
  width: "100px",
  height: "30px",
  marginRight: "20px",
  backgroundColor: "green",
  cursor: "pointer",
  borderRadius: "10px",
};

const refreshButton = {
  width: "100px",
  height: "30px",
  marginRight: "20px",
  backgroundColor: "gray",
  cursor: "pointer",
  borderRadius: "10px",
};

const lists = {
  padding: "25px 0px",
  borderRadius: "2px",
};

const listItem = {
  display: "flex",
  justifyContent: "space-around",
  fontSize: "30px",
  alignItems: "center",
};

const iconContainer = {
  display: "flex",
  gap: "10px",
  cursor: "pointer",
};

const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContent = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
};
