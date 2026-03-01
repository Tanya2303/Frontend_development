import React from "react";
import Card from "./components/Card";

const App = () => {
  const jobOpenings = [
    {
      id: 1,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      companyName: "Google",
      datePosted: "3 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Senior Level",
      tag2: "Full-Time",
      payPerHour: 150,
      location: "Bangalore, India",
    },
    {
      id: 2,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      companyName: "Amazon",
      datePosted: "5 days ago",
      post: "Frontend Developer",
      tag1: "Mid Level",
      tag2: "Full-Time",
      payPerHour: 120,
      location: "Mumbai, India",
    },
    {
      id: 3,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
      companyName: "Meta",
      datePosted: "2 days ago",
      post: "Product Designer",
      tag1: "Senior Level",
      tag2: "Remote",
      payPerHour: 170,
      location: "Hyderabad, India",
    },
    {
      id: 4,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      companyName: "Apple",
      datePosted: "1 day ago",
      post: "Graphic Designer",
      tag1: "Junior Level",
      tag2: "Full-Time",
      payPerHour: 110,
      location: "Kerala, India",
    },
    {
      id: 5,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      companyName: "Netflix",
      datePosted: "4 days ago",
      post: "Motion Designer",
      tag1: "Senior Level",
      tag2: "Contract",
      payPerHour: 180,
      location: "Chennai, India",
    },
    {
      id: 6,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      companyName: "Microsoft",
      datePosted: "6 days ago",
      post: "UX Researcher",
      tag1: "Mid Level",
      tag2: "Full-Time",
      payPerHour: 140,
      location: "Noida, India",
    },
    {
      id: 7,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
      companyName: "Adobe",
      datePosted: "3 days ago",
      post: "Visual Designer",
      tag1: "Senior Level",
      tag2: "Flexible Schedule",
      payPerHour: 135,
      location: "Pune, India",
    },
    {
      id: 8,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
      companyName: "Tesla",
      datePosted: "7 days ago",
      post: "UI Engineer",
      tag1: "Mid Level",
      tag2: "Full-Time",
      payPerHour: 160,
      location: "Delhi, India",
    },
    {
      id: 9,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      companyName: "Uber",
      datePosted: "2 days ago",
      post: "Interaction Designer",
      tag1: "Junior Level",
      tag2: "Part-Time",
      payPerHour: 100,
      location: "Ahmedabad, India",
    },
    {
      id: 10,
      brandLogo:
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      companyName: "Airbnb",
      datePosted: "5 days ago",
      post: "Product Designer",
      tag1: "Senior Level",
      tag2: "Remote",
      payPerHour: 165,
      location: "Goa, India",
    },
  ];

  return (
    <div className="parent">
      {jobOpenings.map((job) => (
        <Card key={job.id} {...job} />
      ))}
    </div>
  );
};

export default App;