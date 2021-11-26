import "./Score.css";

interface ScoreProps {
  type: string;
  score: number;
}

const Score = ({ type = "original", score = 0 }: ScoreProps) => {
  return (
    <div className="score-card">
      <img
        src={type === "bonus" ? "./images/logo-bonus.svg" : "./images/logo.svg"}
        alt=""
        className="game-type"
      />
      <div className="score">
        <p className="title">Score</p>
        <h2 className="point">{score}</h2>
      </div>
    </div>
  );
};

export default Score;
