export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=M1se6iKSkhyTnXOMpHZbZMKGyPWS9Amx&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  return gifts;
};
