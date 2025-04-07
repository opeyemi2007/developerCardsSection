import TestimonialCard from "./components/TestimonialCard";
import "./App.css";

function App() {
  const people = [
    {
      name: "KINGSLEY",
      role: "Developer",
      quote: "Airtm is still my best option to have my funds in the cloud. I can send remittances to my family still in Venezuela.",
      img: "https://images.unsplash.com/photo-1614280289246-fd51c3a36ec5", // placeholder image
    },
    {
      name: "SAMANTHA",
      role: "Designer",
      quote: "Design is my language. Airtm helps me earn and save from global clients.",
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    },
    {
      name: "GABRIEL",
      role: "Gamer",
      quote: "Gaming and streaming made easy with Airtm.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
    {
      name: "ADRIANA",
      role: "Microtasker",
      quote: "I complete quick jobs and get paid fast using Airtm.",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a0",
    }
  ];

  return (
    <div className="app-container">
      <div className="cards-row">
        {people.map((person, index) => (
          <TestimonialCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
}

export default App;
