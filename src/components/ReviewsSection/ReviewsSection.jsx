import { useState } from "react";
import css from "./ReviewsSection.module.css";
import { VscAccount } from "react-icons/vsc";
import moment from "moment";

export const ReviewsSection = ({ reviews }) => {
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  const handleReadMore = (reviewId) => {
    setExpandedReviewId(expandedReviewId === reviewId ? null : reviewId);
  };

  if (reviews.length === 0) {
    return (
      <div className={css.section}>
        <h2 className={css.sectionTitle}>Reviews</h2>
        <p className={css.noData}>No reviews yet</p>
      </div>
    );
  }

  return (
    <div className={css.section}>
      <h2 className={css.sectionTitle}>Reviews</h2>
      <div className={css.reviewsList}>
        {reviews.map((review) => (
          <div className={css.reviewCard} key={review.id}>
            <div className={css.reviewHeader}>
              <div className={css.reviewAuthor}>
                <VscAccount size={24} />
                <span className={css.authorName}>{review.author}</span>
              </div>
              <span className={css.reviewDate}>
                {moment(review.created_at).format("MMM DD, YYYY")}
              </span>
            </div>
            <p className={css.reviewContent}>
              {expandedReviewId === review.id
                ? review.content
                : review.content.slice(0, 500)}
              {review.content.length > 500 && expandedReviewId !== review.id && "..."}
            </p>
            {review.content.length > 500 && (
              <button
                className={css.readMoreBtn}
                onClick={() => handleReadMore(review.id)}
              >
                {expandedReviewId === review.id ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
