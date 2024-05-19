import { API_TOKEN } from "./utils";

type MethodType = "GET" | "POST";

export const fetchProducts = async (method: MethodType) => {
  try {
    const url = import.meta.env.VITE_API_BASE_URL + "/cart-items";
    const response = await fetch(url, {
      method,
      headers: { Authorization: API_TOKEN },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return error;
  }
};

export const deleteProduct = async (cartId: number) => {
  await fetch(import.meta.env.VITE_API_BASE_URL + `/cart-items/${cartId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: API_TOKEN },
  });
};

interface ChangeProductAmountProps {
  quantity: number;
  id: number;
}

export const changeProductAmount = async ({ quantity, id }: ChangeProductAmountProps) => {
  await fetch(import.meta.env.VITE_API_BASE_URL + `/cart-items/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", Authorization: API_TOKEN },
    body: JSON.stringify({
      quantity,
    }),
  });
};

export const fetchCartItemsCounts = async () => {
  const response = await fetch(import.meta.env.VITE_API_BASE_URL + "/cart-items/counts", {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: API_TOKEN },
  });
  const data = await response.json();
  return data.quantity;
};
