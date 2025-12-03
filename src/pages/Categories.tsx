import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { categoriesAPI } from "@/lib/api";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

const Categories = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await categoriesAPI.getAll();
        if (response && Array.isArray(response)) {
          setCategories(response);
        } else {
          setCategories([]);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
        toast.error("Failed to load categories");
        setCategories([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Categories</h1>
        <p className="text-muted-foreground">Browse our product categories</p>
      </div>

      {/* Categories Grid */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="text-center">
            <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Loading categories...</p>
          </div>
        </div>
      ) : categories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group-hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors">
                    <span className="text-2xl font-bold text-primary">
                      {category.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  {category.slug && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.slug}
                    </p>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No categories found</p>
        </div>
      )}
    </div>
  );
};

export default Categories;