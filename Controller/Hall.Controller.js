const roomDetails = {
    "number of seats available": "200",
    "Amenities": " A/C and NON-A/C rooms\n ..Parking facilities---\n -Kitchen and Food preparation area ",
    "Price for 1 Hour": "Just only RS 1000"
  };
  
  const bookedRooms = [
    {
      "CustomerName": "Surya",
      "BookDate": "10/1/2023",
      "StartTime": "7:00AM",
      "EndTime": "1:30PM",
      "RoomName": "S2",
      "BookingStatus": "Booked",
      "RoomId": 1
    },
    {
      "CustomerName": "Reevi",
      "BookDate": "11/1/2023",
      "StartTime": "8:30AM",
      "EndTime": "2:30PM",
      "RoomName": "S2",
      "BookingStatus": "Booked",
      "RoomId": 2
    },
    {
      "CustomerName": "Roshan",
      "BookDate": "12/1/2023",
      "StartTime": "2:12PM",
      "EndTime": "6:00PM",
      "RoomName": "S2",
      "BookingStatus": "Booked",
      "RoomId": 3
    },
    {
      "CustomerName": "Rockey",
      "BookDate": "12/10/2023",
      "StartTime": "7:00PM",
      "EndTime": "10:00PM",
      "RoomName": "S2",
      "BookingStatus": "Booked",
      "RoomId": 4
    }
  ];
  
  export const bookARoom = async (req, res) => {
    try {
      const bookingDetails = await req.body;
      const { BookDate, StartTime } = bookingDetails;
      let count = 0;
      bookedRooms.map((hallObj) => {
        if (hallObj.BookDate === BookDate && hallObj.StartTime === StartTime) {
          count++;
        }
      });
  
      if (count === 0) {
        bookingDetails.RoomId = bookedRooms.length + 1;
        bookingDetails.BookingStatus = "Booked";
        bookedRooms.push(bookingDetails);
  
        return res.status(200).json({
          message: "Room Booked",
          Room: {
            CustomerName: bookingDetails.CustomerName,
            BookDate: bookingDetails.BookDate,
            StartTime: bookingDetails.StartTime,
            EndTime: bookingDetails.EndTime,
            RoomName: bookingDetails.RoomName
          }
        });
      } else {
        return res.status(200).json({ message: "Room is not available...!!!, already booked" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error while booking the room" });
    }
  };
  
  export const getBookedRooms = async (req, res) => {
    try {
      if (bookedRooms.length === 0) {
        res.status(200).json({ message: "No any rooms is booked" });
      } else {
        res.status(200).json(bookedRooms);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error while checking the booked rooms" });
    }
  };
  
  export const findCustomerDetails = async (req, res) => {
    try {
      const bookingDetails = await req.body;
      const { CustomerName } = bookingDetails;
      let count = 0;
      const customerDetails = [];
  
      bookedRooms.map((hallObj) => {
        if (hallObj.CustomerName === CustomerName) {
          customerDetails.push(hallObj);
          count++;
        }
      });
  
      if (count === 0) {
        return res.status(200).json({ message: "Customer name not found" });
      } else if (count > 1) {
        return res.status(200).json({ CustomerCount: count, message: customerDetails });
      }
    } catch (error) {
      console.log(error);
      res.status(200).json({ message: "Error in finding customer details" });
    }
  };
  