// این کد را برای ذخیره داده‌ها در Firestore بررسی کنید
const db = firebase.firestore();
const addNoteButton = document.getElementById('addNoteButton');

addNoteButton.addEventListener('click', function() {
  const noteTitle = document.getElementById('noteTitle').value;
  const noteContent = document.getElementById('noteContent').value;

  // ذخیره داده‌ها در Firestore
  db.collection('notes').add({
    title: noteTitle,
    content: noteContent,
    createdAt: firebase.firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    console.log('Note added successfully!');
    // پاک کردن فیلدها
    document.getElementById('noteTitle').value = '';
    document.getElementById('noteContent').value = '';
  })
  .catch((error) => {
    console.error('Error adding note: ', error);
  });
});
