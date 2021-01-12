// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=627768-661cfbe979deec03db122c1ac&image_type=photo&orientation=horizontal&per_page=12

function fetchImage(name, page ) {
  return fetch(`https://pixabay.com/api/?q=${name}&page=${page}&key=627768-661cfbe979deec03db122c1ac&image_type=photo&orientation=horizontal&per_page=12`)
        .then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There is no photo ${name}`));
  });
}

const api = {
  fetchImage,
};

export default api;