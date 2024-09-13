export const customStyles = {
  control: (provided, state) => ({
    ...provided,

    borderRadius: "8px",
    padding: "4px",
    borderColor: state.isFocused ? "hsl(var(--primary))" : "hsl(var(--input))",
    boxShadow: "none",
    "&:hover": {
      borderColor: "hsl(var(--primary) )",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#374151",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#9ca3af",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#111827",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginTop: "4px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "hsl(var(--primary) / 0.1)" : "#ffffff",
    color: "#111827",
    padding: "10px",
    cursor: "pointer",
    "&:active": {
      backgroundColor: "hsl(var(--primary) / 0.1)",
    },
  }),
};
