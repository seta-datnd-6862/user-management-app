import { useMemo } from 'react';

export const useSearch = (items, searchTerm) => {
  return useMemo(() => {
    if (!searchTerm.trim()) return items;
    return items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [items, searchTerm]);
};
