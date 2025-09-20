// File mapping for the restructured project
// This tracks the old -> new file path mappings to help with import updates

export const FILE_MAPPING = {
  // Utility files
  "utils/imageLibrary.ts": "shared/assets/furniture-images.ts",
  "utils/index.ts": "shared/helpers/price-formatter.ts", 
  "types/index.ts": "shared/types/furniture-store.types.ts",
  "lib/utils.ts": "shared/helpers/ui-utilities.ts",
  "services/api.ts": "infrastructure/api/furniture-api.ts",
  "context/AppContext.tsx": "app/store/global-state-manager.tsx",
  
  // UI Components
  "components/Header/Header.tsx": "features/user-interface/layout-components/site-header.tsx",
  "components/Footer/Footer.tsx": "features/user-interface/layout-components/site-footer.tsx", 
  "components/Layout/Layout.tsx": "features/user-interface/layout-components/main-layout.tsx",
  "components/Banner/Banner.tsx": "features/user-interface/layout-components/page-banner.tsx",
  "components/ProductImage/ProductImage.tsx": "features/user-interface/display-components/furniture-image.tsx",
  "components/LoadingSpinner/LoadingSpinner.tsx": "features/user-interface/display-components/loading-indicator.tsx",
  "components/ErrorNotification/ErrorNotification.tsx": "features/user-interface/display-components/error-alert.tsx",
  "components/Features/Features.tsx": "features/user-interface/display-components/service-highlights.tsx",
  
  // Feature Components
  "components/FilterSection/FilterSection.tsx": "features/product-catalog/product-filters.tsx",
  "components/ProductModal/ProductModal.tsx": "features/product-catalog/product-editor-modal.tsx",
  "components/CartSidebar/CartSidebar.tsx": "features/shopping-cart/cart-drawer.tsx",
  
  // UI Primitives - moved entire folder
  "components/ui/*": "features/user-interface/ui-primitives/*",
  
  // Pages 
  "pages/Home/Home.tsx": "features/content-pages/homepage/home-page.tsx",
  "pages/Shop/Shop.tsx": "features/product-catalog/shop-page.tsx", 
  "pages/SingleProduct/SingleProduct.tsx": "features/product-details/product-details-page.tsx",
  "pages/Cart/Cart.tsx": "features/shopping-cart/cart-page.tsx",
  "pages/Checkout/Checkout.tsx": "features/shopping-cart/checkout-page.tsx",
  "pages/About/About.tsx": "features/content-pages/about-us/about-page.tsx",
  "pages/Contact/Contact.tsx": "features/content-pages/contact-us/contact-page.tsx",
  "pages/Blog/Blog.tsx": "features/content-pages/blog-section/blog-page.tsx",
  "pages/ProductComparison/ProductComparison.tsx": "features/product-details/product-comparison-page.tsx"
} as const;

export const COMPONENT_NAME_MAPPING = {
  // Component name changes
  "Header": "SiteHeader",
  "Footer": "SiteFooter", 
  "Layout": "MainLayout",
  "Banner": "PageBanner",
  "ProductImage": "FurnitureImage",
  "LoadingSpinner": "LoadingIndicator",
  "ErrorNotification": "ErrorAlert", 
  "Features": "ServiceHighlights",
  "FilterSection": "ProductFilters",
  "ProductModal": "ProductEditorModal",
  "CartSidebar": "CartDrawer"
} as const;