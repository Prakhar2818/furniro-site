import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";
import { FilterIcon, RefreshCwIcon, SearchIcon } from "lucide-react";
import { useApp } from "../../context/AppContext";
import { ProductFilters } from "../../types";
import { apiService } from "../../services/api";

export const FilterSection: React.FC = () => {
  const { state, actions } = useApp();
  const { filters, pagination } = state;
  
  const [localFilters, setLocalFilters] = useState<ProductFilters>(filters);
  const [brands, setBrands] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load brands for filter dropdown
  useEffect(() => {
    const loadBrands = async () => {
      try {
        const brandsData = await apiService.getBrands();
        setBrands(brandsData);
      } catch (error) {
        console.error('Failed to load brands:', error);
      }
    };
    
    loadBrands();
  }, []);

  // Update local filters when global filters change
  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleFilterChange = (key: keyof ProductFilters, value: string | number | undefined) => {
    setLocalFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const applyFilters = () => {
    setIsLoading(true);
    actions.setFilters(localFilters);
    setTimeout(() => setIsLoading(false), 500);
  };

  const resetFilters = () => {
    setIsLoading(true);
    actions.resetFilters();
    setLocalFilters({
      page: 1,
      limit: 12,
      sortBy: 'name',
      sortOrder: 'asc',
    });
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters();
  };

  return (
    <section className="w-full bg-[#f9f1e7] py-6">
      <div className="max-w-7xl mx-auto px-4">
        <Card className="border-0 shadow-sm bg-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 items-end">
              {/* Search */}
              <div className="lg:col-span-2">
                <Label htmlFor="search" className="text-sm font-medium text-gray-700 mb-2 block">
                  Search Products
                </Label>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <Input
                    id="search"
                    type="text"
                    placeholder="Search by name, brand, or description..."
                    value={localFilters.search || ''}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="pr-10"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  >
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                </form>
              </div>

              {/* Brand Filter */}
              <div>
                <Label htmlFor="brand" className="text-sm font-medium text-gray-700 mb-2 block">
                  Brand
                </Label>
                <select
                  id="brand"
                  value={localFilters.brand || ''}
                  onChange={(e) => handleFilterChange('brand', e.target.value === '' ? undefined : e.target.value)}
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  <option value="">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>
                      {brand}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort By */}
              <div>
                <Label htmlFor="sortBy" className="text-sm font-medium text-gray-700 mb-2 block">
                  Sort By
                </Label>
                <select
                  id="sortBy"
                  value={localFilters.sortBy || 'name'}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value as 'name' | 'price' | 'brand' | 'createdAt')}
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  <option value="name">Name</option>
                  <option value="price">Price</option>
                  <option value="brand">Brand</option>
                  <option value="createdAt">Newest</option>
                </select>
              </div>

              {/* Sort Order */}
              <div>
                <Label htmlFor="sortOrder" className="text-sm font-medium text-gray-700 mb-2 block">
                  Order
                </Label>
                <select
                  id="sortOrder"
                  value={localFilters.sortOrder || 'asc'}
                  onChange={(e) => handleFilterChange('sortOrder', e.target.value as 'asc' | 'desc')}
                  className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2"
                >
                  <option value="asc">
                    {localFilters.sortBy === 'price' ? 'Low to High' : 'A to Z'}
                  </option>
                  <option value="desc">
                    {localFilters.sortBy === 'price' ? 'High to Low' : 'Z to A'}
                  </option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={applyFilters}
                  disabled={isLoading}
                  className="bg-[#b88e2f] hover:bg-[#a67d28] text-white flex items-center gap-2"
                >
                  {isLoading ? (
                    <RefreshCwIcon className="h-4 w-4 animate-spin" />
                  ) : (
                    <FilterIcon className="h-4 w-4" />
                  )}
                  Apply
                </Button>
                <Button
                  onClick={resetFilters}
                  variant="outline"
                  disabled={isLoading}
                  className="border-[#b88e2f] text-[#b88e2f] hover:bg-[#b88e2f] hover:text-white"
                >
                  Reset
                </Button>
              </div>
            </div>

            {/* Price Range */}
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="minPrice" className="text-sm font-medium text-gray-700 mb-2 block">
                  Min Price ($)
                </Label>
                <Input
                  id="minPrice"
                  type="number"
                  placeholder="0"
                  value={localFilters.minPrice || ''}
                  onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                />
              </div>
              <div>
                <Label htmlFor="maxPrice" className="text-sm font-medium text-gray-700 mb-2 block">
                  Max Price ($)
                </Label>
                <Input
                  id="maxPrice"
                  type="number"
                  placeholder="1000"
                  value={localFilters.maxPrice || ''}
                  onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                />
              </div>
              <div className="flex items-end">
                <div className="text-sm text-gray-600">
                  Showing {pagination.totalItems} results
                  {localFilters.search && (
                    <span> for "{localFilters.search}"</span>
                  )}
                  {(localFilters.brand || localFilters.minPrice || localFilters.maxPrice) && (
                    <span> with filters applied</span>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};