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

  return (
    <div className="App no-select">
      <div className="filter-btn">
        <p
          data-value="Sequences"
          onClick={clickGroup}
          style={{
            backgroundColor: clicked === "Sequences" ? `red` : `#113242`
          }}
          className="q-group"
        >
          Sequences
        </p>
        <p
          data-value="Data Structures"
          onClick={clickGroup}
          style={{
            backgroundColor: clicked === "Data Structures" ? `red` : `#216242`
          }}
          className="q-group"
        >
          Data Structures
        </p>
        <p
          data-value="Non-linear data structures​"
          onClick={clickGroup}
          style={{
            backgroundColor:
              clicked === "Non-linear data structures​" ? `red` : `#310242`
          }}
          className="q-group"
        >
          Non-linear data structures​
        </p>
        <p
          data-value="More data structures​​"
          onClick={clickGroup}
          style={{
            backgroundColor:
              clicked === "More data structures​​" ? `red` : `#413242`
          }}
          className="q-group"
        >
          More data structures​​
        </p>
        <p
          data-value="Dynamic Programming​​"
          onClick={clickGroup}
          style={{
            backgroundColor:
              clicked === "Dynamic Programming​​" ? `red` : `#516242`
          }}
          className="q-group"
        >
          Dynamic Programming​​
        </p>
        <p
          data-value="Bit"
          onClick={clickGroup}
          style={{
            backgroundColor: clicked === "Bit" ? `red` : `#610242`
          }}
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
                          : `#${question.week}1${(question.week * 3) % 9}242`
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
