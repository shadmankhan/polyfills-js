const debounce = (fn, delay) => {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

const fetchData = () => {
  const value = document.getElementById("search-bar").value;
  document.getElementById("search-text").innerText = value;
};

const getSearchedText = debounce(fetchData, 500);
