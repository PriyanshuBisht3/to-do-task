function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isComplete = false;
  }
  
  function addTask(description, dueDate, priority) {
    const newTask = new Task(description, dueDate, priority);

  }
  
  function editTask(taskId, newDescription, newDueDate, newPriority) {

  }
  
  function toggleTaskCompletion(taskId) {
    
  }
  
  function deleteTask(taskId) {
  }
  