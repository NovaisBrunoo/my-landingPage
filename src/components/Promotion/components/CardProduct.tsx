"use client";
import arrayProduct from "@/data/product";
import { formateCurrency } from "@/func/FormatCurry";

export default function CardProduct() {
  return (
    <div className="w-64 h-full flex justify-center items-center gap-2">
      {
        arrayProduct.map((product) => (
          <div key={product.id} className="w-64 h-96 flex justify-center items-center flex-col gap-4">
            <div className="w-64 h-64 bg-[#F5F5F5] rounded-md flex justify-center items-center">
              <img src={product.image} alt="product" className="w-60 h-60 object-cover mix-blend-multiply" />
            </div>
            <div className="w-full flex justify-center items-center flex-col ">
              <strong className="text-sm">{product.name}</strong>
              <span className="w-full text-left">{formateCurrency(product.price)}</span>
            </div>
          </div>
        ))

      }
    </div>

  )
}