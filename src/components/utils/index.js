const getFavorites = () => {
  const favoritesItems = localStorage.getItem("favorites");
  if (favoritesItems) return JSON.parse(favoritesItems);
  return [];
};
const addFavorites = (phone) => {
  const favoritesItems = getFavorites();
  const isExist = favoritesItems.find((p) => p.id === phone.id);
  if (isExist) return alert("Already exist");
  favoritesItems.push(phone);
  localStorage.setItem("favorites", JSON.stringify(favoritesItems));
};
const removeFavorites = (id) => {
  const favoritesItems = getFavorites();
  const remaining = favoritesItems.filter((p) => p.id !== id);
  localStorage.setItem("favorites", JSON.stringify(remaining));
};
export { getFavorites, addFavorites, removeFavorites };
