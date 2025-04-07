import './TestimonialCard.css';

export default function TestimonialCard({ name, role, quote, img, isExpanded }) {
  return (
    <div className="testimonial-card">
      <img src={img} alt={name} className="testimonial-img" />

      <div className="overlay">
        <div className="side-text">
          <h2>{name}</h2>
          <p>{role}</p>
        </div>
        <div className="full-info">
          <h2>{name}</h2>
          <p className="role">{role}</p>
          <p className="quote">"{quote}"</p>
        </div>
      </div>
    </div>
  );
}
