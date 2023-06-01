import React, { useState } from "react";

const AutoCompleteForm = () => {
  const array = [
    "Adam",
    "Anthony",
    "Bob",
    "Billy",
    "Carol",
    "Cathy",
    "Kevin",
    "Kyle",
    "Frank",
    "Fred",
  ];
  let suggestions: string[] = [];
  const [list, setList] = useState<JSX.Element[]>();
  const [value, setValue] = useState<string>();
  const setInputValue = (
    e: React.MouseEvent<HTMLParagraphElement>,
    x: string
  ) => {
    setValue(x);
  };
  const handleAutoComplete = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    array.forEach((name) => {
      if (
        name.substring(0, event.target.value.length).toUpperCase() ===
        event.target.value.toUpperCase()
      ) {
        suggestions.push(name);
        setList(
          suggestions.map((x, index) => {
            return (
              <p key={index} onClick={(e) => setInputValue(e, x)}>
                {x}
              </p>
            );
          })
        );
      }
      if (event.target.value.length === 0) {
        setList(undefined);
      }
    });
  };
  return (
    <div>
      <input onChange={(e) => handleAutoComplete(e)} value={value} />
      <div>{list}</div>
    </div>
  );
};

export default AutoCompleteForm;
