export const getFileData = (event, setFile, setScenario) => {
  const getFile = event.target.files[0];
  const fileExtension = getFile.name.split(".").pop();
  const reader = new FileReader();

  console.log(getFile);

  if (fileExtension == "html" || fileExtension == "liquid") {
    reader.onload = function (eventReader) {
      setFile({ name: getFile.name, content: eventReader.target.result });
    };
    reader.readAsText(getFile);
  } else if (fileExtension == "json") {
    const reader = new FileReader();

    reader.onload = function (eventReader) {
      setScenario({
        name: getFile.name,
        content: JSON.parse(eventReader.target.result),
      });
    };
    reader.readAsText(getFile);
  } else {
    alert("Wrong file type !");
  }
};
