import { toast } from "react-toastify";

const getStoredCartList = () => {
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreCartList = (id) => {
  const storedList = getStoredCartList();

  if (storedList.includes(id)) {
    toast("This product is already exist in the cart");
  } else {
    storedList.push(id);
    const storeListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storeListStr);
    toast("Added Product to the cart");
  }
};

const getStoredWishList = () => {
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreWishList = (id) => {
  const storedList = getStoredWishList();

  if (storedList.includes(id)) {
    toast("Already exist in the WishList");
  } else {
    storedList.push(id);
    const storeListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storeListStr);
    toast("Added Product to the wishlist");
  }
};

export {
  addToStoreCartList,
  addToStoreWishList,
  getStoredCartList,
  getStoredWishList,
};
