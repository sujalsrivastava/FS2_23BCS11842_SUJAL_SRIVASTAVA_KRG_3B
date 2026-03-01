import { useState, useEffect, useCallback } from "react";
import CounterDisplay from "../components/CounterDisplay";

function WaterTracker() {
  const [count, setCount] = useState(0);
  const [goal, setGoal] = useState(8);
  const [tip, setTip] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Load saved count
  useEffect(() => {
    const saved = localStorage.getItem("waterCount");
    if (saved) setCount(Number(saved));
  }, []);

  // Save count to localStorage
  useEffect(() => {
    localStorage.setItem("waterCount", count);
  }, [count]);

  // Fetch Health Tip
  const fetchTip = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setTip(data.slip.advice);
    } catch (err) {
      setError("Failed to fetch advice.");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTip();
  }, []);

  // Optimized handlers
  const increase = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  }, []);

  const reset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ border: "1px solid gray", padding: "20px", width: "300px" }}>
        <h2>Water Intake Tracker</h2>

        <CounterDisplay count={count} goal={goal} />

        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>Reset</button>

        <div style={{ marginTop: "10px" }}>
          <label>Daily Goal: </label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(Number(e.target.value))}
          />
        </div>

        {count >= goal && <p>Goal Reached 🎉</p>}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>Today's Health Tip:</h3>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <p>{tip}</p>}
      </div>
    </div>
  );
}

export default WaterTracker;