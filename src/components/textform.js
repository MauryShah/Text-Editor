import React, { useState } from "react";

function TextInfo({ text }) {
  return (
    <div className="container">
      <h1>Text Info</h1>
      <p>Words: {text.split(" ").length} | Characters: {text.length}</p>
    </div>
  );
}

function Preview({ text }) {
  return (
    <div className="container">
      <h2>Preview</h2>
      <p>Time taken to read the whole text is {0.008 * text.split(" ").length} seconds</p>
      <p>{text}</p>
    </div>
  );
}

export default function Textform(props) {
  const [text, setText] = useState("Enter your text");
  const [showPreview, setShowPreview] = useState(false);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  
  const removeExtraSpaces = () => {
    setText(prevText => prevText.trim().replace(/\s+/g, ' '));
  };



  // function removeExtraSpaces(str) {
  //   return str.trim().replace(/\s+/g, ' ');
  // }
  
  
  
  const upperCase = () => {
    setText(text.toUpperCase());
  };

  const lowerCase = () => {
    setText(text.toLowerCase());
  };

  const strOnChange = (event) => {
    setText(event.target.value);
    console.log("The string is changed")
  };

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };

  const handleVoClick = () => {
    let countChar = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i).match(/[aeiouAEIOU]/)) {
        countChar++;
      }
    }
    setCount(countChar);
  };

  const handleCoClick = () => {
    let countCons = 0;
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        countCons++;
      }
    }
    setCount1(countCons);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    }).catch(err => {
      alert("Failed to copy text: ", err);
    });
  };

  const pasteFromClipboard = () => {
    navigator.clipboard.readText().then(clipboardText => {
      setText(clipboardText);
    }).catch(err => {
      alert("Failed to paste text: ", err);
    });
  };

  const resetText = () => {
    setText("");
    setCount(0);
    setCount1(0);
  };

  return (
    <>
      <div style={{color : props.mode==='dark'?'white':'black'}}>
        <div className="container" style={{color : props.mode==='dark'?'white':'black'}}>
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h1>{props.textArea}</h1>
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={strOnChange}
            style={{backgroundColor : props.mode==='dark'?'grey':'white',color : props.mode==='dark'?'white':'black'}}
            
          />
          <button className="btn btn-primary my-3" onClick={upperCase}>
            Convert to Upper Case
          </button>
          <button className="btn btn-primary my-3 mx-2" onClick={lowerCase}>
            Convert to Lower Case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleVoClick}>
            Count no. of Vowels
          </button>
          <button className="btn btn-primary mx-1" onClick={handleCoClick}>
            Count no. of Consonants
          </button>
          <button className="btn btn-primary mx-1" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary my-3 mx-1" onClick={togglePreview}>
            {showPreview ? "Hide Preview" : "Show Preview"}
          </button>
          <button className="btn btn-secondary my-3 mx-1" onClick={copyToClipboard}>
            Copy Text
          </button>
          <button className="btn btn-secondary my-3 mx-1" onClick={pasteFromClipboard}>
            Paste Text
          </button>
          <button className="btn btn-danger my-3 mx-1" onClick={resetText}>
            Reset
          </button>
          <h3>You have entered:</h3>
          <p>{count} No. of Vowels</p>
          <p>{count1} No. of Consonants</p>
        </div>
        <TextInfo text={text} />
        {showPreview && <Preview text={text} />}
      </div>
    </>
  );
}
