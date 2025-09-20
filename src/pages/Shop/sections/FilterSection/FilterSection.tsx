import { FilterIcon, GridIcon, ListIcon, SlidersHorizontalIcon, SearchIcon, ChevronDownIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { useApp } from "../../../../context/AppContext";

export const FilterSection = (): JSX.Element => {
  const { state } = useApp();
  const { pagination } = state;
  const { currentPage, itemsPerPage, totalItems } = pagination;
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('default');
  const [showCount, setShowCount] = useState(itemsPerPage);
  const [searchQuery, setSearchQuery] = useState('');
  
  const startItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  return (
    <section className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container-responsive">
        {/* Main Filter Container */}
        <div className="bg-white px-6 py-5">
          {/* Top Row - Primary Controls */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            {/* Left: Search and Filter */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-1">
              {/* Enhanced Search Bar */}
              <div className="relative w-full sm:w-96">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-11 bg-gray-50 border-gray-200 rounded-lg focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] focus:bg-white [font-family:'Poppins',Helvetica] text-sm placeholder:text-gray-400 transition-all duration-200"
                />
              </div>

              {/* Advanced Filter Toggle */}
              <Button
                variant="outline"
                className="h-11 px-4 bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 [font-family:'Poppins',Helvetica] font-medium text-gray-700 rounded-lg"
              >
                <SlidersHorizontalIcon className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Right: View Options */}
            <div className="flex items-center gap-4">
              {/* Results Info */}
              <div className="hidden lg:block">
                <p className="[font-family:'Poppins',Helvetica] text-sm text-gray-600">
                  {totalItems > 0 ? (
                    <span>
                      Showing <span className="font-medium text-gray-900">{startItem}–{endItem}</span> of{' '}
                      <span className="font-medium text-gray-900">{totalItems}</span> results
                    </span>
                  ) : (
                    <span>No products found</span>
                  )}
                </p>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-100 rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={`h-8 w-8 rounded-md transition-all duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <GridIcon className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={`h-8 w-8 rounded-md transition-all duration-200 ${
                    viewMode === 'list'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <ListIcon className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Results Info */}
          <div className="lg:hidden mt-4">
            <p className="[font-family:'Poppins',Helvetica] text-sm text-gray-600">
              {totalItems > 0 ? (
                <span>
                  Showing <span className="font-medium text-gray-900">{startItem}–{endItem}</span> of{' '}
                  <span className="font-medium text-gray-900">{totalItems}</span> results
                </span>
              ) : (
                <span>No products found</span>
              )}
            </p>
          </div>

          {/* Bottom Row - Sort and Display Options */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-5 pt-5 border-t border-gray-100">
            {/* Sort and Display Controls */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              {/* Sort options */}
              <div className="flex items-center gap-3">
                <label className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm whitespace-nowrap">
                  Sort by:
                </label>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none w-40 h-9 bg-white border border-gray-200 rounded-md px-3 pr-8 [font-family:'Poppins',Helvetica] text-sm text-gray-700 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] cursor-pointer transition-all duration-200"
                  >
                    <option value="default">Featured</option>
                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="newest">Newest First</option>
                    <option value="rating">Best Rating</option>
                  </select>
                  <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Items per page */}
              <div className="flex items-center gap-3">
                <label className="[font-family:'Poppins',Helvetica] font-medium text-gray-700 text-sm whitespace-nowrap">
                  Show:
                </label>
                <div className="relative">
                  <select
                    value={showCount}
                    onChange={(e) => setShowCount(Number(e.target.value))}
                    className="appearance-none w-16 h-9 bg-white border border-gray-200 rounded-md px-2 pr-6 [font-family:'Poppins',Helvetica] text-sm text-gray-700 focus:border-[#b88e2f] focus:ring-1 focus:ring-[#b88e2f] cursor-pointer transition-all duration-200"
                  >
                    <option value={12}>12</option>
                    <option value={24}>24</option>
                    <option value={36}>36</option>
                    <option value={48}>48</option>
                  </select>
                  <ChevronDownIcon className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-3 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};