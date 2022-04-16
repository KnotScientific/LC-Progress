import "./styles.css";
export default function App() {
  let questions = require("./t.json");
  let clicked = "Sequences";
  return (
    <div className="App">
      {questions.map(
        (question) =>
          question.note &&
          (!clicked || clicked === question.group) && (
            <div>
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center"
                }}
              >
                <h1>
                  <a
                    href={`https://leetcode.com/problems/${question.titleSlug}/submissions/`}
                  >{`${question.questionId}. ${question.title}`}</a>
                </h1>
                <h2
                  style={{
                    margin: "10px",
                    padding: "5px",
                    backgroundColor: `#${question.week}1${
                      (question.week * 3) % 9
                    }242`,
                    color: "white",
                    borderRadius: "10px"
                  }}
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
