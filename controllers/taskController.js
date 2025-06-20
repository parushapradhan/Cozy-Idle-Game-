const Task = require('../models/Task');
const User = require('../models/User');
const { addExp } = require('../utils/expUtils');
// const { updateExpLevel } = require('../utils/expUtils');
// const { updateExpLevel} = require('/assets/js/gameUtils');
exports.createTask = async (req, res) => {
  try {
    const { description } = req.body;
    const userId = req.session.user._id;

    const newTask = await Task.create({
      userId,
      description,
      status: 'ongoing',
      visible: true
    });

    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to add task' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.session.user._id });
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedTask = await Task.findByIdAndUpdate(id, { status }, { new: true });

    if (status === 'done') {
      const task = await Task.findById(id);
      const user = await User.findById(task.userId);

      if (user) {
        let exp = user.exp;
        let level = user.level;
        user.exp += 10;
        if (exp >= 200 && level === 1) {
          user.level = 2;
        }
        if (exp >= 400 && level === 2) {
          user.level = 3;
        }
        if (exp >= 600 && level === 3) {
          user.level = 4;
        }
        if (exp >= 800 && level === 4) {
          user.level = 5;
        }
        console.log(user);
        await user.save();
        req.session.user = user;
        // updateExpLevel();
      }
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update task' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
