function isValid(plate) {
  if(isValidLength(plate) && isValidPlate(plate)) {
    return true;
  } else {
    return false;
  }
}

function isValidLength(plate) {
  const MAX_PLATE_LENGTH = 7;
  if(plate.length === MAX_PLATE_LENGTH) {
    return true;
  } else {
    return false;
  }
}

function isValidPlate(plate) {
  const PLATE_SYNTAX_REGEX = /(\d\d\d\d[BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ][BCDFGHJKLMNPRSTVWXYZ])/i;
  if(plate.match(PLATE_SYNTAX_REGEX) != null) {
    return true;
  } else {
    return false;
  }
}