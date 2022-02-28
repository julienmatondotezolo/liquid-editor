export const getFileData = (event, setFile, scenario, selectedScenario) => {
  const getFile = event.target.files[0];
  const fileExtension = getFile.name.split(".").pop();
  const reader = new FileReader();

  if (fileExtension == "html" || fileExtension == "liquid") {
    reader.onload = function (eventReader) {
      setFile({ name: getFile.name, content: eventReader.target.result });
    };
    reader.readAsText(getFile);
  } else if (fileExtension == "json") {
    const reader = new FileReader();

    reader.onload = function (eventReader) {
      // setScenario({
      //   name: getFile.name,
      //   content: JSON.parse(eventReader.target.result),
      // });
      scenario.update(
        {
          name: getFile.name,
          content: JSON.parse(eventReader.target.result),
        },
        selectedScenario
      );
    };
    reader.readAsText(getFile);
  } else {
    alert("Wrong file type !");
  }
};
