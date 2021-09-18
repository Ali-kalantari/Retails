import React, { useState, useEffect } from "react";
import Loading from "./../Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function TourContainer() {
  const [loading, setloading] = useState(true);
  const [tours, setTours] = useState([]);
  const [error, seterror] = useState(false);
  const removeTour = (id) => {
    const newtour = tours.filter((item, index) => {
      return item.id !== id;
    });
    setTours(newtour);
  };
  const Fetchdata = async () => {
    setloading(true);
    try {
      const data = await fetch(url);
      const tours = await data.json();
      setloading(false);
      setTours(tours);
      //   console.log(tours)
    } catch (error) {
      setloading(false);
      seterror(true);
        // console.log(error);
    }
  };
  const Notexist = () => {
    return (
      <div>
        <h2>توری برای نمایش وجود ندارد</h2>
        <button onClick={Fetchdata} className="btn custom">
          بارگیری مجدد
        </button>
      </div>
    );
  };
  useEffect(() => {
    Fetchdata();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (error) {
    return <h2>sorry! There is a problem ,please try again</h2>;
  }
  return (
    <main>
      {tours.length > 0 ? (
        <Tours removeTour={removeTour} tours={tours} />
      ) : (
        <Notexist />
      )}
    </main>
  );
}

export default TourContainer;
