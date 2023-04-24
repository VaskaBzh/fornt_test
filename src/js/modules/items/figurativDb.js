const db = async (text) => {
  let arr = [];
  if (localStorage.arr) {
    arr = JSON.parse(localStorage.arr);
  }
  if (arr !== JSON.parse(localStorage.arr)) {
    localStorage.arr = JSON.stringify(arr);
  }
  return arr;
}

export default db;