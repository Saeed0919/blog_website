function addComment(postId) {
  const name = document.getElementById(`name-${postId}`).value;
  const msg = document.getElementById(`msg-${postId}`).value;
  const commentBox = document.getElementById(`comments-${postId}`);

  const comment = document.createElement("p");
  comment.className = "bg-gray-100 p-3 rounded";
  comment.textContent = `${name}: ${msg}`;
  commentBox.appendChild(comment);

  document.getElementById(`name-${postId}`).value = '';
  document.getElementById(`msg-${postId}`).value = '';
  return false;
}

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
  const navbar = document.getElementById('navbar');
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
  } else {
    navbar.classList.add('hidden');
  }
});
