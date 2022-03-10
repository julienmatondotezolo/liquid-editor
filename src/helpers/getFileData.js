export const getFileData = (event, setFile, setScenario, type) => {
  const getFile = event.target.files[0];
  const fileExtension = getFile.name.split(".").pop();
  const reader = new FileReader();

  let result = {};

  if (type == "file" && fileExtension == "html") {
    reader.onload = function (eventReader) {
      setFile({ name: getFile?.name, content: eventReader.target.result });
    };
    reader.readAsText(getFile);

    result.message = `${getFile.name} is succesfully imported`;
    result.code = 200;
    return result;
  }

  if (type == "scenario" && fileExtension == "json") {
    const reader = new FileReader();

    reader.onload = function (eventReader) {
      setScenario({
        name: getFile.name,
        content: JSON.parse(eventReader.target.result),
      });
    };
    reader.readAsText(getFile);

    result.message = `${getFile.name} is succesfully imported`;
    result.code = 200;
    return result;
  }

  if (type == "file" && fileExtension !== "html") {
    result.message = "Wrong file type ! Only .html & .liquid are accepted.";
    result.code = 406;
    return result;
  }

  if (type == "scenario" && fileExtension !== "json") {
    result.message = "Wrong file type ! Only .json is accepted.";
    result.code = 406;
    return result;
  }
};
