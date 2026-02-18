"use client";

import { createContext, useContext } from "react";

export const SearchContext = createContext<{
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const useSearch = () => useContext(SearchContext);
