import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((oldValue) => {
      return [...oldValue, note];
    });
  };

  const onDelete = (id) => {
    setAddItem((oldData) => {
      return oldData.filter((curData, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div>
        <Header />
        <CreateNote passNote={addNote} />
        {addItem.map((item, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={item.title}
              content={item.content}
              deleteItem={onDelete}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default App;
