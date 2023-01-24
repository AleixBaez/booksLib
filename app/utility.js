function capitalize(str, lower = false) {
  return (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
};

function capitalizeOrNil(str, lower = false) {
  return (!str ? str : capitalize(str, lower));
};

module.exports = {
    capitalizeWords:capitalizeOrNil,   
};