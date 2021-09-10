// import React from "react";
// // import ReactDOM from "react-dom";
// // import { Editor, EditorState } from "draft-js";
// // import "draft-js/dist/Draft.css";

// export default function MyEditor() {
//   const [editorState, setEditorState] = React.useState(
//     EditorState.createEmpty()
//   );

//   const editor = React.useRef(null);

//   function focusEditor() {
//     editor.current.focus();
//   }

//   React.useEffect(() => {
//     focusEditor();
//   }, []);

//   return (
//     <div onClick={focusEditor}>
//       <Editor
//         ref={editor}
//         editorState={editorState}
//         toolbarClassName="toolbarClassName"
//         wrapperClassName="wrapperClassName"
//         editorClassName="editorClassName"
//         onChange={(editorState) => setEditorState(editorState)}
//       />
//     </div>
//   );
// }
