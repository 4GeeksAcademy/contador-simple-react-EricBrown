import React, { useRef, useImperativeHandle, forwardRef } from "react";

const SecondsCounter = forwardRef((props, ref) => {
  const [counter, setCounter] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(true);
  const timerRef = useRef(null);

  // Maneja el intervalo según el estado isRunning
  React.useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => setCounter((prev) => prev + 1), 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  // Exponer métodos a través del ref
  useImperativeHandle(ref, () => ({
    pause: () => setIsRunning(false),
    resume: () => setIsRunning(true),
    reset: () => {
      setCounter(0);
      setIsRunning(false);
    }
  }));

  // Pad the counter to 6 digits and split into array
  const digits = counter.toString().padStart(6, "0").split("");

  return (
    <div
      className="counter-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "#222",
        padding: "20px",
        borderRadius: "10px",
        width: "fit-content",
        margin: "40px auto"
      }}
    >
      <div
        style={{
          background: "#111",
          color: "#fff",
          fontSize: "2rem",
          padding: "0 16px",
          borderRadius: "6px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "180px",
          width: "120px",
        }}
      >
        <i className="fa fa-clock"></i>
      </div>
      {digits.map((digit, idx) => (
        <div
          key={idx}
          style={{
            width: "120px",
            height: "180px",
            background: "#111",
            color: "#fff",
            fontSize: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "6px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          {digit}
        </div>
      ))}
    </div>
  );
});

export default SecondsCounter;