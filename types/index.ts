export type Product = {
  id: number | string;
  name: string;
  description?: string | null;
  price: number;
  category?: string | null;
  is_bestseller?: boolean | null;
  translations?: Record<
    string,
    {
      name?: string;
      description?: string;
    }
  > | null;
};

export type CartItem = {
  id: number | string;
  user_id: string;
  product_id: number | string;
  quantity: number;
  created_at?: string;
  product?: Product;
};

export type Order = {
  id: number | string;
  user_id: string;
  order_id: string;
  total_amount: number;
  items_json: unknown;
  created_at?: string;
};

export type OrderItem = {
  id: number | string;
  order_id: string;
  product_id: number | string;
  product_name: string;
  quantity: number;
  unit_price: number;
  created_at?: string;
};

// Demo tables for personalization and analytics
export type DemoUserHistory = {
  id: number | string;
  user_id: string;
  recent_searches: string[];
  liked_categories: string[];
  recommended_products: string[];
  last_active?: string;
  created_at?: string;
};

export type DemoSalesData = {
  id: number | string;
  product_id: number | string;
  product_name: string;
  category: string;
  quantity_sold: number;
  revenue: number;
  sale_date: string;
  created_at?: string;
};

export type DemoAssociation = {
  id: number | string;
  product_id: number | string;
  product_name: string;
  associated_product_id: number | string;
  associated_product_name: string;
  frequency: number;
  created_at?: string;
};

export type SalesSummary = {
  product_id: number | string;
  product_name: string;
  category: string;
  total_quantity: number;
  total_revenue: number;
};

export type AnalyticsReport = {
  topSellers: SalesSummary[];
  revenueLeaders: SalesSummary[];
  categoryTrends: { category: string; total_revenue: number; total_quantity: number }[];
  suggestions: string[];
};

export type ApiResponse<T> =
  | {
      success: true;
      data: T;
    }
  | {
      success: false;
      error: string;
    };
