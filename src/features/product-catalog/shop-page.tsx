import React, { useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Banner } from "../../components/Banner/Banner";
import { Features } from "../../components/Features/Features";
import { FilterSection } from "../../components/FilterSection/FilterSection";
import { ProductGridSection } from "./sections/ProductGridSection/ProductGridSection";
import { PaginationSection } from "./sections/PaginationSection/PaginationSection";
import { ProductModal } from "../../components/ProductModal/ProductModal";
import { Button } from "../../components/ui/button";
import { PlusIcon } from "lucide-react";
import { Product } from "../../types";

export const Shop = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Shop" },
  ];

  const handleAddProduct = () => {
    setModalMode('create');
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setModalMode('edit');
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  return (
    <Layout>
      <Banner title="Shop" breadcrumbs={breadcrumbs} />
      
      {/* Add Product Section */}
      <section className="w-full bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Product Management</h2>
              <p className="text-gray-600 text-sm">Manage your product inventory</p>
            </div>
            <Button
              onClick={handleAddProduct}
              className="bg-[#b88e2f] hover:bg-[#a67d28] text-white flex items-center gap-2"
            >
              <PlusIcon className="w-4 h-4" />
              Add Product
            </Button>
          </div>
        </div>
      </section>
      
      <FilterSection />
      <ProductGridSection onEditProduct={handleEditProduct} />
      <PaginationSection />
      <Features />
      
      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={editingProduct}
        mode={modalMode}
      />
    </Layout>
  );
};