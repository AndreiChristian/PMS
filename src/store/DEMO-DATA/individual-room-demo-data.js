// why the fuck does this not export 


export const demoDataRoomArray = [
  {
    name: "Deluxe Suite",
    quantity: 3,
    rate: 800,
  },
  {
    name: "Suite",
    quantity: 7,
    rate: 650,
  },
  {
    name: "Deluxe Double Sea View",
    quantity: 20,
    rate: 500,
  },
  {
    name: "Deluxe Double Park View",
    quantity: 20,
    rate: 450,
  },
  {
    name: "Standard Double Sea View",
    quantity: 40,
    rate: 400,
  },
  {
    name: "Standard Double Park View",
    quantity: 40,
    rate: 350,
  },
  {
    name: "Deluxe Single Sea View",
    quantity: 60,
    rate: 300,
  },
  {
    name: "Deluxe Single Park View",
    quantity: 70,
    rate: 250,
  },
  {
    name: "Standard Single Sea View",
    quantity: 60,
    rate: 200,
  },
  {
    name: "Standard Single Park View",
    quantity: 70,
    rate: 150,
  },
];

export const generateRoomData = (roomTypeArray) => {
  let roomTypeArrayWithId = [];
  let roomArray = [];

  for (let i = 1; i < roomTypeArray.length; i++) {
    let roomType = {
      name: roomTypeArray[i].name,
      quantity: roomTypeArray[i].quantity,
      rate: roomTypeArray[i].rate,
      roomTypeId: `rt${i}`,
    };
    roomTypeArrayWithId.push(roomType);
    let roomObject = { roomTypeId: `rt${i}`, rooms: [] };
    for (let j = 1; j <= roomTypeArray[i].quantity; j++) {
      let individualRoom = {
        roomTypeId: `rt${i}`,
        roomId: `rt${i}-${j}`,
        occupied: Math.random() > 0.5,
        maintenance: Math.random() > 0.2,
        extraInfo: {},
      };
      roomObject.rooms.push(individualRoom);
    }
    roomArray.push(roomObject);
  }
  return [roomTypeArrayWithId,  roomArray ];
};

export const [roomTypeArrayWithId,  roomArray ] = generateRoomData( demoDataRoomArray )