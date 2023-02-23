import { generateRoomCategory } from "./individual-room-demo-data";

let roomTypeDemoData = [];
roomTypeDemoData.push(generateRoomCategory("Deluxe Suite", "rtf6", 3, 500));
roomTypeDemoData.push(generateRoomCategory("Suite", "rtf5", 10, 400));
roomTypeDemoData.push(generateRoomCategory("Deluxe Double", "rtf4", 30, 180));
roomTypeDemoData.push(generateRoomCategory("Double", "rtf3", 50, 140));
roomTypeDemoData.push(generateRoomCategory("Deluxe Single", "rtf2", 120, 70));
roomTypeDemoData.push(generateRoomCategory("Single", "rtf1", 150, 90));

// manually adding some extra info in the data so we make it look more realistic

// // DOUBLE
// roomTypeDemoData[3].rooms[10].occupied = true;
// roomTypeDemoData[3].rooms[15].occupied = true;
// roomTypeDemoData[3].rooms[11].occupied = true;
// roomTypeDemoData[3].rooms[12].occupied = true;
// roomTypeDemoData[3].rooms[19].occupied = true;
// roomTypeDemoData[3].rooms[20].occupied = true;
// roomTypeDemoData[3].rooms[10].occupied = true;
// roomTypeDemoData[3].rooms[10].occupied = true;
// roomTypeDemoData[3].rooms[16].occupied = true;
// roomTypeDemoData[3].rooms[10].occupied = true;
// roomTypeDemoData[3].rooms[1].occupied = true;
// roomTypeDemoData[3].rooms[27].occupied = true;
// roomTypeDemoData[3].rooms[14].occupied = true;
// roomTypeDemoData[3].rooms[17].occupied = true;
// roomTypeDemoData[3].rooms[12].occupied = true;
// roomTypeDemoData[3].rooms[32].occupied = true;
// roomTypeDemoData[3].rooms[42].occupied = true;
// roomTypeDemoData[3].rooms[34].occupied = true;
// roomTypeDemoData[3].rooms[48].occupied = true;
// roomTypeDemoData[3].rooms[37].occupied = true;
// roomTypeDemoData[3].rooms[48].occupied = true;
// roomTypeDemoData[3].rooms[12].occupied = true;
// // DELUXE
// roomTypeDemoData[4].rooms[10].occupied = true;
// roomTypeDemoData[4].rooms[15].occupied = true;
// roomTypeDemoData[4].rooms[11].occupied = true;
// roomTypeDemoData[4].rooms[12].occupied = true;
// roomTypeDemoData[4].rooms[19].occupied = true;
// roomTypeDemoData[4].rooms[20].occupied = true;
// roomTypeDemoData[4].rooms[10].occupied = true;
// roomTypeDemoData[4].rooms[10].occupied = true;
// roomTypeDemoData[4].rooms[16].occupied = true;
// roomTypeDemoData[4].rooms[10].occupied = true;
// roomTypeDemoData[4].rooms[1].occupied = true;
// roomTypeDemoData[4].rooms[27].occupied = true;
// roomTypeDemoData[4].rooms[14].occupied = true;
// roomTypeDemoData[4].rooms[17].occupied = true;
// roomTypeDemoData[4].rooms[12].occupied = true;

// a function made for generating randomness in the rooms for some more diversity

const generateRandomOccupancy = (array) => {
  for (let i = 0; i < array.length; i++) {
    let arrayLength = array[i].rooms.length;
    for (let j = 0; j < arrayLength; j++) {
      array[i].rooms[j].occupied = Math.random() < 0.5 ? true : false;
      if (array[i].rooms[j].occupied) {
        array[i].rooms[j].maintenance = false;
      } else {
        array[i].rooms[j].maintenance = Math.random() < 0.2 ? true : false;
      }
    }
  }

  return array;
};

roomTypeDemoData = generateRandomOccupancy(roomTypeDemoData);

export default roomTypeDemoData;
