import React, { useState } from 'react';
import { handleSubmit } from '../lib/firebase/utils/AddCardHandler'; // Import the separated function

const AddCard = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgInfo, setImgInfo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Use the imported handleSubmit function
    handleSubmit(title, description, imgInfo, setTitle, setDescription, setImgInfo);
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="card w-full max-w-sm bg-neutral shadow-lg p-5">
        <h2 className="card-title mb-4 text-lg font-semibold">Add New Card</h2>
        <form onSubmit={onSubmit}>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter title"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea textarea-bordered w-full"
              placeholder="Enter description"
              required
            />
          </div>

          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              value={imgInfo}
              onChange={(e) => setImgInfo(e.target.value)}
              className="input input-bordered w-full"
              placeholder="Enter image URL"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Add Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCard;