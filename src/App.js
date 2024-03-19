import "./App.css";

function App() {
  const whiteBox = (
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "white",
      }}
    ></div>
  );
  const blackBox = (
    <div
      style={{
        width: "20px",
        height: "20px",
        backgroundColor: "black",
      }}
    ></div>
  );
  // const arr = [1, 2, 3];
  // arr.reverse();
  // arr --> [3, 2, 1]

  // to check if a number is even or odd:
  // const num = 4;
  // num % 2 --> 0, which means even
  // const newNum = 7;
  // newNum % 2 --> 1, which means odd

  // boolean --> true or false
  // 'thing' === 'other thing' --> false
  // 4 + 2 === 6 --> true

  // if statement, only runs if the thing inside it is true
  // if (thing) {
  //   // if thing is true, then this code will run
  // } else {
  //   // if thing is fale, this code will run
  // }

  const row = (colorToStartWith) => {
    const output = [];
    for (let i = 0; i < 4; i++) {
      if (colorToStartWith === "white") {
        output.push(whiteBox);
        output.push(blackBox);
      } else {
        output.push(blackBox);
        output.push(whiteBox);
      }
    }
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>{output}</div>
    );
  };

  const col = () => {
    const output = [];
    for (let i = 0; i < 4; i++) {
      output.push(row("white"));
      output.push(row("black"));
    }
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>{output}</div>
    );
  };
  return (
    <div className="App">
      <header className="App-header">{col()}</header>
    </div>
  );
}

export default App;
