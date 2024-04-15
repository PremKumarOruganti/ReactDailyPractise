/* eslint-disable no-case-declarations */
import { useReducer } from "react";

type Person = {
  id: string;
  firstName: string;
  email: string;
};

type State = {
  data: Person[];
  length: number;
};

type Action = {
  type: string;
  payload: string;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "DELETE_PERSON":
      const newPerson = state.data.filter((eachItem: Person) => {
        return eachItem.id !== action.payload;
      });
      return {
        ...state,
        data: newPerson,
        length: state.length - 1
      };
    default:
      return state;
  }
};

const ReducerBasic = () => {
  const initialState: State = {
    data: [
      { id: '34534', firstName: 'srikanth', email: 'srikant@gmail.com' },
      { id: '778567', firstName: 'emma', email: 'emma@gmail.com' }
    ],
    length: 2,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDelete = (id: string) => {
    dispatch({
      type: 'DELETE_PERSON',
      payload: id
    });
  };

  return (
    <div>
      <h3>Current Users length: {state.length}</h3>
      {state.data.map((eachItem: Person) => {
        const { id, firstName, email } = eachItem;
        return (
          <div key={id}>
            <h3>{firstName}</h3>
            <p>{email}</p>
            <button onClick={() => handleDelete(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ReducerBasic;








// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useReducer } from "react"

// const reducer = (state: any, action: any) => {
//   if (action.type === "DELETE_PERSON") {
//     const newPerson = state.data.filter((eachItem: any) => {
//       return eachItem.id !== action.payload
//     })
//     return {
//       ...state,
//       data: newPerson,
//       length: state.lenght - 1
//     }
//   }
// }

// const ReducerBasic = () => {
//   const initialState: any = {
//     data: [
//       { id: '34534', firstName: 'srikanth', email: 'srikant@gmail.com' },
//       { id: '778567', firstName: 'emma', email: 'emma@gmail.com' }
//     ],
//     length: 2,
//   }

//   const [state, dispatch] = useReducer(reducer, initialState)

//   const handleDelete = (id: any) => {
//     dispatch({
//       type: 'DELETE_PERSON',
//       payload: id
//     })
//   }

//   return (


//     <div>
//       <h3>Current Users lenght:{state.length}</h3>
//       {state.data.map((eachItem: any) => {
//         const [id, firstName, email] = eachItem
//         return (
//           <div key={id}>
//             <h3>{firstName}</h3>
//             <p>{email}</p>
//             <button onClick={() => handleDelete(id)}>Delete</button>
//           </div>
//         )
//       })}</div>
//   )
// }

// export default ReducerBasic