function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      className="border p-2 w-full md:w-1/3 mb-6"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
