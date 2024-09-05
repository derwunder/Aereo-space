import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { fb_db as db } from '../config'; // Import your Firebase configuration

export const handleSubmit = async (title, description, imgInfo, setTitle, setDescription, setImgInfo) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (!user) {
    alert('You must be logged in to add a card.');
    return;
  }

  try {
    // Add the new card document to Firestore
    await addDoc(collection(db, 'cards'), {
      title,
      description,
      imgInfo,
      createdAt: new Date(),
      creatorId: user.uid, // Store the creator's UID
    });

    alert('Card added successfully!');
    // Clear form fields after submission
    setTitle('');
    setDescription('');
    setImgInfo('');
  } catch (err) {
    console.error('Error adding document: ', err);
  }
};