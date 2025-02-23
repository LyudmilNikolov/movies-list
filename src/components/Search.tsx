import * as React from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm?: (value: ((prevState: string) => string) | string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm?.(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
