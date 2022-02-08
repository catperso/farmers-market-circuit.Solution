import React from 'react';

const marketSchedule = [  
  {  
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {  
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {  
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {  
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {  
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {  
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

class Schedule extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dayIndex: 0
    };
  }

  render(){

    // logic for the buttons for changing this.state.dayIndex
    return(
      <React.Fragment>
        {/* buttons for changing the day */}
        <h2>Day: {marketSchedule[this.state.dayIndex].day}</h2>
        <h3>Location: <em>{marketSchedule[this.state.dayIndex].location}</em></h3>
        <p>Hours: {marketSchedule[this.state.dayIndex].hours}</p>
        <p>Booth: {marketSchedule[this.state.dayIndex].booth}</p>
      </React.Fragment>
    );
  }
}

export default Schedule;