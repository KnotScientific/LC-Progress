import { useState } from "react";
import "./styles.css";
import React from "react";
export default function App() {
  let questions = require("./t.json");
  const [clicked, setClicked] = useState("");
  const clickGroup = (e) =>
    setClicked(
      (prev) =>
        ((prev && prev !== e.target.getAttribute("data-value")) || !prev) &&
        e.target.getAttribute("data-value")
    );

  const btnstyle = (group) => ({
    borderWidth: "2px",
    color: clicked === group ? "white" : "black",
    borderStyle: "solid",
    borderColor: clicked === group ? "red" : "black",
    backgroundColor: clicked === group ? `red` : `white`
  });

  return (
    <div className="App no-select">
      <div className="filter-btn">
        <p
          data-value="Sequences"
          onClick={clickGroup}
          style={btnstyle("Sequences")}
          className="q-group"
        >
          Sequences
        </p>
        <p
          data-value="Data Structures"
          onClick={clickGroup}
          style={btnstyle("Data Structures")}
          className="q-group"
        >
          Data Structures
        </p>
        <p
          data-value="Non-linear data structures​"
          onClick={clickGroup}
          style={btnstyle("Non-linear data structures​")}
          className="q-group"
        >
          Non-linear data structures​
        </p>
        <p
          data-value="More data structures​​"
          onClick={clickGroup}
          style={btnstyle("More data structures​​")}
          className="q-group"
        >
          More data structures​​
        </p>
        <p
          data-value="Dynamic Programming​​"
          onClick={clickGroup}
          style={btnstyle("Dynamic Programming​​")}
          className="q-group"
        >
          Dynamic Programming​​
        </p>
        <p
          data-value="Bit"
          onClick={clickGroup}
          style={btnstyle("Bit")}
          className="q-group"
        >
          Bit
        </p>
      </div>
      <div className="q-card-wrapper">
        {questions.map(
          (question) =>
            question.note &&
            (!clicked || clicked === question.group) && (
              <div className="q-card">
                <span className="q-header">
                  <p>
                    <a
                      href={`https://leetcode.com/problems/${question.titleSlug}/submissions/`}
                    >{`${question.questionId}. ${question.title}`}</a>
                  </p>
                  <p
                    data-value={question.group}
                    onClick={clickGroup}
                    style={{
                      backgroundColor:
                        clicked === question.group
                          ? `red`
                          : `rgb(0, ${question.week * 40}, ${
                              question.week * 40
                            })`
                    }}
                    className="q-group"
                  >
                    {question.group}
                  </p>
                </span>
                {question.note.split(";").map((note) => (
                  <p className="q-note">• {note}</p>
                ))}
                <br />
              </div>
            )
        )}
      </div>
    </div>
  );
}
