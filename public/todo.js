const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const todoList = document.getElementById('todoList');

// Load tasks when page loads
window.onload = loadTasks;

// Add a new task
addBtn.addEventListener('click', async () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    await addTask(taskText);
    taskInput.value = '';
    await loadTasks();
  }
});

// POST: Add a task
async function addTask(description) {
  try {
    await fetch('/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description })
    });
  } catch (error) {
    console.error('Error adding task:', error);
  }
}

// GET: Load all tasks
async function loadTasks() {
  try {
    const response = await fetch('/tasks');
    const tasks = await response.json();
    todoList.innerHTML = '';

    tasks.forEach((task) => {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.status === 'done';
      checkbox.disabled = task.status === 'done';  // Already done? Lock it.

      const span = document.createElement('span');
      span.textContent = task.description;

      // If not done yet, allow checking
      if (!checkbox.disabled) {
        checkbox.addEventListener('click', async (event) => {
          event.stopPropagation();
          checkbox.checked = true;  // Mark checked immediately
          checkbox.disabled = true; // Lock it immediately
          await updateTaskStatus(task._id, 'done');  // Update in database
          await loadTasks();  // Refresh task list
        });
      }

      const deleteBtn = document.createElement('button');
      deleteBtn.className ='delete-btn'
      deleteBtn.textContent = 'Delete';
      deleteBtn.style.marginLeft = '10px';
      deleteBtn.addEventListener('click', async (event) => {
        event.stopPropagation();
        await deleteTask(task._id);
        await loadTasks();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });

  } catch (error) {
    console.error('Error loading tasks:', error);
  }
}

// PUT: Update task status
async function updateTaskStatus(id, newStatus) {
  try {
    await fetch(`/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
  } catch (error) {
    console.error('Error updating task:', error);
  }
}

// DELETE: Delete a task
async function deleteTask(id) {
  try {
    await fetch(`/tasks/${id}`, { method: 'DELETE' });
  } catch (error) {
    console.error('Error deleting task:', error);
  }
}
