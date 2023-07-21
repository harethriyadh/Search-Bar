import { useMemo, useState, useRef } from "react";

function App() {
  const [items, setItems] = useState(["ha"]);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  function onSubmit(e) {
    e.preventDefault();

    const value = inputRef.current.value;
    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  return (
    <>
      <div style={headerStyle}>Search</div>
      <div style={boxStyle}>
        <input
          style={inputStyle}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Search items..."
        />
      </div>
      
      <br />
      <br />
      <br />

      <form onSubmit={onSubmit} style={formStyle}>
        <span style={labelStyle}>New Item:</span>
        <input ref={inputRef} type="text" style={inputStyle} />
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>

      <div style={margining}>
      <h1 style={itemStyle}>Items:</h1>
      {filteredItems.map((item, index) => (
        <div key={index} style={itemStyle}>
          {item}
        </div>
      ))}
      </div>
    </>
  );
}

// Inline styles
const headerStyle = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "auto",
  textAlign: "center",
};
const boxStyle = {
  width:"240px", 
  border: "1px solid #ccc",
  borderRadius: "4px",
  margin:"auto",
  height: "50px",
  backgroundColor: '#f0f0f0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}

const inputStyle = {
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  marginBottom: "10px",
};

const formStyle = {
  marginBottom: "20px",
  margin:"auto",
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
};

const labelStyle = {
  marginRight: "10px",
};

const buttonStyle = {
  padding: "8px 12px",
  fontSize: "16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const itemStyle = {
  fontSize: "18px",
  width:"250px",
  marginBottom: "5px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "5px",

};

const margining = {
  margin: "auto",
  width: "280px",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
};

export default App;