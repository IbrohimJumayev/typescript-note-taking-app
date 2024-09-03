export const saveToLocalStorage = (name: string, data: any) => {
  localStorage.setItem(name, JSON.stringify(data));
}; //data type any should be changed

export const getFromLocalStorage = (name: string) => {
  const note = localStorage.getItem(name);
  return note ? JSON.parse(note) : null;
};
