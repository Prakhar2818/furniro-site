import React from "react";
import { Button } from "../../../../components/ui/button";
import { useApp } from "../../../../context/AppContext";

export const PaginationSection = (): JSX.Element | null => {
  const { state, actions } = useApp();
  const { pagination } = state;
  const { currentPage, totalPages, totalItems, itemsPerPage } = pagination;
  
  // Don't show pagination if there are no products or only one page
  if (totalItems === 0 || totalPages <= 1) {
    return null;
  }
  
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      // Call a direct page change function
      actions.loadProducts({ 
        ...state.filters, 
        page 
      });
      // Scroll to top of products section
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };
  
  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };
  
  // Generate page numbers to display (show max 5 pages around current page)
  const getVisiblePages = () => {
    const maxVisible = 5;
    const halfVisible = Math.floor(maxVisible / 2);
    
    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);
    
    // Adjust start if we're near the end
    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }
    
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };
  
  const visiblePages = getVisiblePages();

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          {currentPage > 1 && (
            <Button
              onClick={handlePrevious}
              variant="ghost"
              className="w-[98px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-light text-xl rounded-[10px]"
            >
              Previous
            </Button>
          )}
          
          {/* Page Numbers */}
          {visiblePages.map((page) => (
            <Button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-[60px] h-[60px] [font-family:'Poppins',Helvetica] font-normal text-xl rounded-[10px] ${
                currentPage === page
                  ? 'bg-[#b88e2f] hover:bg-[#a67d28] text-white'
                  : 'bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black'
              }`}
              variant={currentPage === page ? 'default' : 'ghost'}
            >
              {page}
            </Button>
          ))}
          
          {/* Next Button */}
          {currentPage < totalPages && (
            <Button
              onClick={handleNext}
              variant="ghost"
              className="w-[98px] h-[60px] bg-[#f9f1e7] hover:bg-[#b88e2f] hover:text-white text-black [font-family:'Poppins',Helvetica] font-light text-xl rounded-[10px]"
            >
              Next
            </Button>
          )}
        </div>
        
        {/* Results Info */}
        <div className="text-center mt-8">
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#9f9f9f] text-base">
            Showing {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)} to {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
          </p>
        </div>
      </div>
    </section>
  );
};