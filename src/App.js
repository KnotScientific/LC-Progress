import { useState } from "react";
import "./styles.css";
import React from "react";
export default function App() {
  let questions = require("./t.json");
  const [clicked, setClicked] = useState("");
  const clickGroup = (e) =>
    setClicked((prev) => !prev && e.target.getAttribute("data-value"));

  return (
    <div className="App">
      {questions.map(
        (question) =>
          question.note &&
          (!clicked || clicked === question.group) && (
            <div>
              <span className="q-header no-select">
                <h1>
                  <a
                    href={`https://leetcode.com/problems/${question.titleSlug}/submissions/`}
                  >{`${question.questionId}. ${question.title}`}</a>
                </h1>
                <h2
                  data-value={question.group}
                  onClick={clickGroup}
                  style={{
                    backgroundColor:
                      clicked === question.group
                        ? `red`
                        : `#${question.week}1${(question.week * 3) % 9}242`
                  }}
                  className="q-group"
                >
                  {question.group}
                </h2>
              </span>
              {question.note.split(";").map((note) => (
                <h2>• {note}</h2>
              ))}
              <br />
            </div>
          )
      )}
    </div>
  );
}
