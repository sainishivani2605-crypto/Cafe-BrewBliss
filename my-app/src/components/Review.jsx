import { useEffect, useState } from "react";
function Review() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Rahul",
      rating: 5,
      review: "Amazing coffee and great ambience!"
    },
    {
      id: 2,
      name: "Priya",
      rating: 4,
      review: "Loved the cold coffee."
    },
    {
      id: 3,
      name: "Ankit",
      rating: 5,
      review: "Best cafe in Delhi."
    },
    {
      id: 4,
      name: "Neha",
      rating: 4,
      review: "Nice place to work and relax."
    },
    {
      id: 5,
      name: "Rohit",
      rating: 5,
      review: "Excellent service."
    },
    {
      id: 6,
      name: "Simran",
      rating: 5,
      review: "Loved the desserts!"
    }
  ]);

  const [form, setForm] = useState({
    name: "",
    rating: 5,
    review: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.review) return;

    const newReview = {
      id: reviews.length + 1,
      ...form
    };

    setReviews([newReview, ...reviews]);

    setForm({
      name: "",
      rating: 5,
      review: ""
    });
  };

  return (
    <div className="review-container">
      <h2>☕ Customer Reviews</h2>

      <form className="review-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <select
          value={form.rating}
          onChange={(e) =>
            setForm({ ...form, rating: Number(e.target.value) })
          }
        >
          <option value={5}>⭐⭐⭐⭐⭐</option>
          <option value={4}>⭐⭐⭐⭐</option>
          <option value={3}>⭐⭐⭐</option>
          <option value={2}>⭐⭐</option>
          <option value={1}>⭐</option>
        </select>

        <textarea
          placeholder="Write your review..."
          rows="4"
          value={form.review}
          onChange={(e) =>
            setForm({ ...form, review: e.target.value })
          }
        />

        <button type="submit">
          Submit Review
        </button>
      </form>

      <div className="reviews-list">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            <h3>{item.name}</h3>
            <p>{"⭐".repeat(item.rating)}</p>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;