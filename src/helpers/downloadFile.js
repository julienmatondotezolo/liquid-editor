export const downloadFile = (file, fileName) => {
  const url = window.URL.createObjectURL(new Blob(["\ufeff", file]));
  const link = document.createElement("a");

  link.href = url;
  link.setAttribute("download", fileName);
  link.setAttribute("charset", "utf-16");
  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);
};
