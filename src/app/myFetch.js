export const getTemplate = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
};

export const postTemplate = (body) => {
  const post = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return post;
};

export const deleteTemplate = {
  method: "DELETE",
};

export const myfetch = async (url, template) => {
  return fetch(url, template);
};
