export default function Navigation({ next, prev }) {
  return (
    <div className="nav-buttons">
      <button onClick={prev}>⟵ Previous</button>
      <button onClick={next}>Next ⟶</button>
    </div>
  );
}
