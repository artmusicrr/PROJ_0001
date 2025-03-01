'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./sheet"
import { useCart } from "@/providers/CartProvider"
import Image from "next/image"
import { Button } from "./button"
import { formatCurrency } from "@/lib/utils"
import { ScrollArea } from "./scroll-area"

export function CartModal() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, total } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col h-full w-[300px] sm:w-[350px]">
        <SheetHeader className="space-y-0.5">
          <SheetTitle className="text-lg">Carrinho de Compras</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-center text-muted-foreground text-sm">Seu carrinho está vazio</p>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <div className="flex flex-col gap-2 py-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-2 border rounded-lg">
                    <div className="relative w-16 h-16">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <div className="flex flex-col gap-0.5">
                        <p className="text-xs text-muted-foreground">
                          {formatCurrency(item.price)} × {item.quantity}
                        </p>
                        <p className="text-xs font-medium">
                          Total: {formatCurrency(item.price * item.quantity)}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-1 mt-1">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          -
                        </Button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-6 w-6 ml-auto"
                          onClick={() => removeItem(item.id)}
                        >
                          ×
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t pt-4 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Total:</span>
                <span className="font-bold">{formatCurrency(total)}</span>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}