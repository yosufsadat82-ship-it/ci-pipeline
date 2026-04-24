import { useState } from "react";
import { add, subtract, multiply, divide } from "./calculator";

const OPS = [
  { label: "+", fn: add },
  { label: "−", fn: subtract },
  { label: "×", fn: multiply },
  { label: "÷", fn: divide },
];

export default function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [op, setOp] = useState(OPS[0]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  function calculate() {
    setError("");
    setResult(null);
    try {
      const res = op.fn(parseFloat(a), parseFloat(b));
      setResult(res);
    } catch (e) {
      setError(e.message);
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.card}>
        <div style={styles.badge}>CI/CD DEMO</div>
        <h1 style={styles.title}>Calculator</h1>
        <p style={styles.sub}>Tested & built automatically via GitHub Actions</p>

        <div style={styles.row}>
          <input
            style={styles.input}
            type="number"
            value={a}
            onChange={(e) => setA(e.target.value)}
            placeholder="0"
          />
          <div style={styles.opRow}>
            {OPS.map((o) => (
              <button
                key={o.label}
                onClick={() => setOp(o)}
                style={{
                  ...styles.opBtn,
                  ...(op.label === o.label ? styles.opBtnActive : {}),
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
          <input
            style={styles.input}
            type="number"
            value={b}
            onChange={(e) => setB(e.target.value)}
            placeholder="0"
          />
        </div>

        <button
          onClick={calculate}
          disabled={a === "" || b === ""}
          style={{
            ...styles.calcBtn,
            opacity: a === "" || b === "" ? 0.4 : 1,
            cursor: a === "" || b === "" ? "not-allowed" : "pointer",
          }}
        >
          Calculate
        </button>

        {result !== null && (
          <div style={styles.result}>= {result}</div>
        )}
        {error && <div style={styles.error}>{error}</div>}

        <div style={styles.pipeline}>
          <div style={styles.pipelineTitle}>Pipeline Steps</div>
          {["Checkout", "Install deps", "Run tests", "Build", "Upload artifact"].map((step, i) => (
            <div key={i} style={styles.step}>
              <span style={styles.stepDot}>✓</span>
              {step}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  root: {
    minHeight: "100vh",
    background: "#0f0f0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'JetBrains Mono', monospace",
    padding: 20,
  },
  card: {
    background: "#161616",
    border: "1px solid #222",
    borderRadius: 8,
    maxWidth: 420,
    width: "100%",
    padding: "40px 36px",
  },
  badge: {
    background: "#1a2a1a",
    border: "1px solid #2a4a2a",
    borderRadius: 4,
    color: "#4caf50",
    display: "inline-block",
    fontSize: 10,
    letterSpacing: "0.15em",
    marginBottom: 20,
    padding: "4px 10px",
  },
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: 700,
    margin: "0 0 6px",
  },
  sub: {
    color: "#444",
    fontSize: 12,
    margin: "0 0 28px",
    lineHeight: 1.6,
  },
  row: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 20,
    flexWrap: "wrap",
  },
  input: {
    background: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: 4,
    color: "#fff",
    fontFamily: "inherit",
    fontSize: 18,
    padding: "10px 14px",
    width: 90,
    outline: "none",
    textAlign: "center",
  },
  opRow: {
    display: "flex",
    gap: 6,
  },
  opBtn: {
    background: "#111",
    border: "1px solid #2a2a2a",
    borderRadius: 4,
    color: "#555",
    cursor: "pointer",
    fontFamily: "inherit",
    fontSize: 16,
    padding: "8px 12px",
    transition: "all 0.15s",
  },
  opBtnActive: {
    background: "#1a3a1a",
    border: "1px solid #4caf50",
    color: "#4caf50",
  },
  calcBtn: {
    background: "#4caf50",
    border: "none",
    borderRadius: 4,
    color: "#000",
    fontFamily: "inherit",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.1em",
    padding: "12px 0",
    width: "100%",
    transition: "opacity 0.2s",
  },
  result: {
    color: "#4caf50",
    fontSize: 28,
    fontWeight: 700,
    marginTop: 20,
    textAlign: "center",
  },
  error: {
    color: "#f44336",
    fontSize: 13,
    marginTop: 14,
    textAlign: "center",
  },
  pipeline: {
    borderTop: "1px solid #1e1e1e",
    marginTop: 32,
    paddingTop: 24,
  },
  pipelineTitle: {
    color: "#333",
    fontSize: 10,
    letterSpacing: "0.15em",
    marginBottom: 12,
  },
  step: {
    color: "#3a3a3a",
    fontSize: 12,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "4px 0",
  },
  stepDot: {
    color: "#4caf50",
    fontSize: 11,
  },
};
