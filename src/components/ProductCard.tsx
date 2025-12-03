import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  inStock: boolean;
}

export const ProductCard = ({ id, name, brand, price, image, inStock }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  const handleCardClick = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    navigate(`/products/${id}`);
  };

  const handleAddToCart = () => {
    if (!user) {
      navigate("/auth");
      return;
    }
    addToCart({
      id,
      name,
      price,
      image
    }, quantity);
  };

  const increaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      navigate("/auth");
      return;
    }
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      navigate("/auth");
      return;
    }
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <Card
      className="group cursor-pointer overflow-hidden border-border bg-gradient-card hover:shadow-premium transition-all duration-300"
      onClick={handleCardClick}
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-4">
        <p className="text-xs text-primary font-medium mb-1 truncate">{brand}</p>
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 text-sm sm:text-base">{name}</h3>
        <p className="text-xl sm:text-2xl font-bold text-primary">${(price || 0).toFixed(2)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 space-y-3">
        {inStock && user && (
          <div className="flex items-center justify-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={decreaseQuantity}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[2rem] text-center">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={increaseQuantity}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          disabled={!inStock}
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart();
          }}
        >
          {inStock ? (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              {user ? 'Add to Cart' : 'Sign In to Add'}
            </>
          ) : (
            'Out of Stock'
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};
