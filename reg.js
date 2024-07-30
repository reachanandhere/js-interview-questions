const vehicleNameValidatedInput = (initialValue) => {
  // Allow letters, numbers, spaces, hyphens, and apostrophes
  let nameRegex = /^[a-zA-Z0-9\s\-']+$/;

  // Clean input by removing any character not in the allowed set
  let cleanedValue = initialValue
    .replace(/[^a-zA-Z0-9\s\-']/g, "")
    .replace(/\s\s+/g, " ")
    .trim();

  // Ensure first character is an alphabet
  if (!/^[a-zA-Z]/.test(cleanedValue)) {
    return "";
  }

  // Ensure no consecutive special characters or spaces
  cleanedValue = cleanedValue.replace(/([-\s'])\1+/g, "$1");

  // Ensure special characters and spaces follow a letter
  cleanedValue = cleanedValue.replace(/([^a-zA-Z])[-\s']+/g, "$1");

  // Check if the cleaned input contains at least one letter or number
  let validContent = /[a-zA-Z0-9]/.test(cleanedValue);

  if (nameRegex.test(cleanedValue) && validContent) {
    return cleanedValue;
  } else {
    return "";
  }
};


console.log(vehicleNameValidatedInput("a and a"))