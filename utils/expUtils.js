exports.checkExpLevel = (user) => {
  const exp = user.exp;
  let level = user.level;

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
  return user;
};

/**
 * Add EXP to the user and re-run level check.
 * @param {Object} user  — the user object
 * @param {number} pts   — points to add
 */
exports.addExp = (user, pts) => {
  user.exp += pts;
  exports.checkExpLevel(user);
};

