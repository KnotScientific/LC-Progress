import "./styles.css";
export default function App() {
  let questions = require("./t.json");
  return (
    <div className="App">
      {questions.map(
        (question) =>
          question.note && (
            <div>
              <h1>
                <a
                  href={`https://leetcode.com/problems/${question.titleSlug}/submissions/`}
                >{`${question.questionId}. ${question.title}`}</a>
              </h1>
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
