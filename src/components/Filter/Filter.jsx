export const Filter = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Search for movie"
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
