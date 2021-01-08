const checkUrl = (inputText) => {
    console.log("::: Running validation check on url :::", inputText);
    try {
      new URL(inputText);
    } catch (err) {
      console.log("error:", err);
      console.log("::: CheckUrl result: Invalid Url :::");
      return false;
    }
    console.log("::: CheckUrl result: Valid Url :::");
    return true;
  };

export { checkUrl }
