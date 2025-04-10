const UpcomingEvents = () => {
  const events = [
    { date: "April 10, 2025", event: "Spring Open House" },
    { date: "April 15, 2025", event: "Leadership Conference" },
    { date: "April 20, 2025", event: "Military Academy Showcase" },
    { date: "April 25, 2025", event: "Annual Community Parade" },
    { date: "May 5, 2025", event: "Alumni Meet & Greet" },
    { date: "May 10, 2025", event: "Graduation Ceremony" },
  ];

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="bg-yellow-600 text-white text-4xl font-extrabold p-4 rounded-md text-center">
        Upcoming Events
      </h2>
      <p className="text-gray-700 mt-4 text-center">
        Army and Navy Academy regularly engages with our local community in the
        resort town of Carlsbad, California. We also frequently participate in
        school fairs and other events globally. Come visit with us at some of
        our upcoming events!
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        {events.map((event, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600"
          >
            <p className="text-blue-600 font-semibold">{event.date}</p>
            <p className="text-gray-800 mt-2 text-lg font-medium">
              {event.event}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
