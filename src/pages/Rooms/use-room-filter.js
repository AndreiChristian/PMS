export const useRoomFilter = (state, formState, array) => {
    if (!state && !formState) {
      return array;
    } else if (state === "available") {
      array = array.filter((item) => item.occupied === false);
    } else if (state === "occupied") {
      array = array.filter((item) => item.occupied === true);
    } else if (state === "maintenance") {
      array = array.filter((item) => item.maintenance === true);
    } else if (formState) {
      array = array.filter((item) => item.roomNumber === parseInt(formState));
    }
    return array;
  };