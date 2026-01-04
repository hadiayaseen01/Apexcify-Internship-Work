export default function Filters({ ownerFilter, setOwnerFilter, priceFilter, setPriceFilter, owners }) {
  return (
    <div className="filters">
      <select value={ownerFilter} onChange={(e) => setOwnerFilter(e.target.value)}>
        <option value="">Owner</option>
        {owners.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>

      <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
        <option value="">Price</option>
        <option value="low">Below $300</option>
        <option value="mid">$300 – $800</option>
        <option value="high">Above $800</option>
      </select>
    </div>
  );
}
