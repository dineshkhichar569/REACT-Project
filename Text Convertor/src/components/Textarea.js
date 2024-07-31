import React, {useState} from "react";

export default function Textarea(probs) {

  const upperCase = () => {
    console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCase = () => {
    console.log("clicked");
    let newText = text.toLowerCase();

    setText(newText);
  };

  const clearText = () => {
    console.log("clicked");
    const element = document.getElementById("TexT");
    setText((element.value = ""));
  };

  const TitleCase = () => {
    let element = document.getElementById("TexT");
    let title = element.value;
    title = title
      .toLowerCase()
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    setText(title);
  };

  // function so we can write in textarea //
  const changeUp = (event) => {
    console.log("change");
    setText(event.target.value);
  };

  const [text, setText] = useState(""); // useState() is a Hook //

  return (
    <>
      <main  className="body">
        <div className="textArea">
          <h1>{probs.heading}</h1>

          <textarea
            name="text"
            placeholder="Enter the text..."
            value={text}
            onChange={changeUp} ////////////// Must /////////////////////
            id="TexT"
            rows={15}
            cols={100}
            className={`${probs.textlight} ${probs.textdark} ${probs.redYello}`}
          ></textarea>

          <div>
            <button className="btn btn-one" onClick={upperCase}>
              Convert to UpperCase
            </button>
            <button className="btn btn-two" onClick={lowerCase}>
              Convert to LowerCase
            </button>
            <button className="btn btn-three" onClick={clearText}>
              Clear Text
            </button>
            <button className="btn btn-four" onClick={TitleCase}>
              Title Case
            </button>
          </div>

          <div className="textarea2">
            <h1>Text Summary</h1>
            <h5>
              {text.split(" ").length - 1} Words and {text.length} Characters
            </h5>
            <p>
              {0.008 * (text.split(" ").length - 1)} minutes will take to read.
            </p>

            <h3>Preview</h3>
            <div className="textPreview">{text.length>0 ? text : "Enter Something to Preview."}</div>
          </div>
        </div>
      </main>
    </>
  );
}
