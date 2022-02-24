export const getFileData = (event, setFile) => {
  const getFile = event.target.files[0];
  const fileExtension = getFile.name.split(".").pop();
  const reader = new FileReader();

  if (fileExtension == "html" || fileExtension == "liquid") {
    reader.onload = function (eventReader) {
      setFile({ name: getFile.name, content: eventReader.target.result });
      console.log(getFile.name);
    };
    reader.readAsText(getFile);
  } else {
    alert.error("Wrong file type ! (Only .html & .liquid or accepted");
  }

  // if (fileExtension == "json") {
  //   const reader = new FileReader();

  //   reader.onload = function (eventReader) {
  //     handleScenario(eventReader.target.result);
  //   };
  //   reader.readAsText(getFile);
  // } else {
  //   alert.error("Wrong file type ! (Only .json is accepted");
  // }
};
