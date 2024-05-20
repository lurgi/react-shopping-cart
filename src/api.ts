import { API_TOKEN } from "./store/utils";

type MethodType = "GET" | "POST";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FetchWrapper = (input: string | URL | Request, init?: RequestInit | undefined) => any;

const fetchWrapper: FetchWrapper = async (url, init) => {
  try {
    const response = await fetch(url, {
      ...init,
      headers: { "Content-Type": "application/json", Authorization: API_TOKEN },
    });
    if (response.ok && init?.method === "GET") {
      const data = await response.json();
      return data;
    }
    if (!response.ok) {
      const message = `Fetch error. status: ${response.status}. ${response.statusText}`;
      throw new Error(message);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error(String(error));
  }
};

export const fetchProducts = async (method: MethodType) => {
  const url = import.meta.env.VITE_API_BASE_URL + "/cart-items";
  const init = {
    method,
  };
  const products = await fetchWrapper(url, init);
  return products;
};

export const deleteProduct = async (cartId: number) => {
  const url = import.meta.env.VITE_API_BASE_URL + `/cart-items/${cartId}`;
  const init = {
    method: "DELETE",
  };
  await fetchWrapper(url, init);
};

interface ChangeProductAmountProps {
  quantity: number;
  id: number;
}

export const changeProductAmount = async ({ quantity, id }: ChangeProductAmountProps) => {
  const url = import.meta.env.VITE_API_BASE_URL + `/cart-items/${id}`;
  const init = {
    method: "PATCH",
    body: JSON.stringify({
      quantity,
    }),
  };
  await fetchWrapper(url, init);
};

export const fetchCartItemsCounts = async () => {
  const url = import.meta.env.VITE_API_BASE_URL + "/cart-items/counts";
  const init = {
    method: "GET",
  };
  const { quantity } = await fetchWrapper(url, init);
  return quantity;
};

export const AddItem = async ({ productId }: { productId: number }) => {
  const url = import.meta.env.VITE_API_BASE_URL + "/cart-items";
  const init = {
    method: "POST",
    body: JSON.stringify({
      productId,
    }),
  };
  await fetchWrapper(url, init);
};
