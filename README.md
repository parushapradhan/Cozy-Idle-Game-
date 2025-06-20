# CozyTodoApp
## 1. Introduction

Our project, CozyTodo Gaming Web Application, combines the concepts of task management and gamification into a unique platform. The CozyTodo app allows users to log in, manage their to-do tasks, listen to ambient music while working, and experience a gamified "round progression" system where completing tasks moves the user to the next game level.
This project was hosted on Glitch, utilizing a full-stack JavaScript environment (Node.js, Express.js) and explored the use of web-compatible game engines.

---

### Test Credentials for Evaluation:

Our application's email verification process is integrated with a **private MailTrap sandbox**, which is tied to our team's specific MailTrap account credentials.

Because of this, external users will not be able to independently verify new registrations outside of our sandbox environment.

**To enable smooth testing, we are providing two pre-verified user accounts:**

| User Type | Email | Password |
|:--|:--|:--|
| Admin Account |parushapradhan78new |parusha123new  |
| Regular User Account | parushapradhan |  parusha123|

**Details:**
- The **Admin account** has extended privileges, including access to the Admin Dashboard to view users, update levels, reset passwords, and reset sound settings.
- The **Regular User account** has standard user access: creating to-do tasks, using the timer, adjusting background music settings, and progressing through game rounds.

**Important Notes:**
- Attempting to register a new account will send a verification email to our private MailTrap inbox. Since this inbox is not publicly accessible, new accounts cannot complete verification externally.
- Therefore, we recommend testers use the provided credentials to fully explore the application features.
- If necessary, we can assist by manually verifying additional test accounts from our side.

---

### Game contnent
 Players can move around using the keyboard keys and interact with objects using Enter key. 

Currently you can select between 4 different characters:  
![witch](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/witch.gif?v=1745892667624) Witch  
![wizard](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/wizardhat.gif?v=1745892661204) Wizard  
![ghost](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/ghost.gif?v=1745892644584) Ghost  
![robed](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/wizard.gif?v=1745892656164) Robed Wizard  

Animals:  
![cat/grey/siamese](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/calico_cat.gif?v=1745892630526) Different cats  
![capybara](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/capybara.gif?v=1745892635377) Capybara  
![dog](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/dozy.gif?v=1745892640430) Dozy the dog  
![chicken](https://cdn.glitch.global/7180e0f7-cedd-4825-a721-142111a6910c/henrietta.gif?v=1745892649168) Chicken


Press ESC to open notebook.

### How to Use the CozyTodo App:

1. **Registration**:  
   - Users can register with their email address through the registration form.

2. **Email Verification**:  
   - After registration, a verification email is sent to MailTrap.
   - The user must retrieve the email, click the verification link, and activate their account **within 24 hours**.
   - Verification ensures account authenticity and prevents spam registrations.

3. **Login**:  
   - Once verified, users can log in with their credentials to access the dashboard.

4. **Task Management**:  
   - Users can create, complete, edit, or delete tasks.
   - Completing tasks earns XP and advances the game state.

5. **Timer and Music Settings**:  
   - Set personal work timers.
   - Adjust background ambient sounds (rain, birds, wind, etc.) for a cozy environment.

6. **Game Progression**:  
   - Completing tasks progresses the user through game rounds.
   - Unlock companions and achievements based on milestones.

7. **Admin Features**:  
   - Admins can manage users: view user accounts, update levels, force password resets, reset sound settings, and delete user profiles if necessary.

## 2. Objective
The primary objective of the project was to analyze and explore game engines that are suitable for integration into web-based applications — especially platforms like Glitch which have limitations in terms of bundling and build pipelines.
Specifically, we wanted to:
- Investigate web game engines that allow tile-based level creation and interactive task progression.
- Learn about connecting game states to a backend MongoDB database to manage user sessions, progress, and task history.
- Handle state management challenges between client and server, specifically focusing on:
  - How often and when the app should save user progress
  - Avoid overloading the server with constant save requests
- Understand the trade-offs between different game frameworks such as Phaser and Excalibur.js.

Additionally, we aimed to implement features beyond the basic project requirements such as:
- Music integration to improve user focus.
- A round-based game system where completing tasks leads to game progression.
- Testing multiple game engine setups and evaluating technical compatibility challenges.

## 3. Team Member Contributions
- **Parusha Pradhan**: (PAP203@pitt.edu)
  - Led the **game development** part of the CozyTodo application.
  - Designed and programmed the **interactive gaming environment** where task completion translates to game progression.
  - Created and integrated **tilemaps** that define the structure of the game world, placing different elements like floors, obstacles, and interactive objects.
  - Configured **player movement**, **collision detection**, and **level transitions** within the gaming canvas.
  - Initially implemented Phaser.js for lightweight scenes, and later explored Excalibur.js for advanced tilemap capabilities.
  - Focused on ensuring that the game environment felt **responsive**, **engaging**, and **connected seamlessly** to the user’s task completion progress.

- **Surabhi Raghavan**: (SUR85@pitt.edu)
  - Developed the **user authentication system**, including **login**, **registration**, and **email verification** flows.
  - Built the **admin panel** functionality, enabling admins to:
    - View and manage user accounts.
    - Update user levels.
    - Delete user records.
  - Integrated secure password hashing using **bcrypt** and configured **MailTrap** for sandbox email verification.

- **Charitha Battini**: (CHB299@pitt.edu)
  - Implemented the core productivity features, including:
    - The **to-do list** system with task creation, updating, and completion tracking.
    - A **timer** feature to enhance user productivity sessions.
    - **Music settings** allowing users to adjust ambient background sounds (e.g., wind, rain, birds) to create a calming work environment.
  - Worked on the integration of the **calendar** and **clock** widgets on the main dashboard.

## 4. Technical Architecture

### 4.1 System Overview
The CozyTodo Gaming Web Application is structured around the Model-View-Controller (MVC) pattern while integrating a game engine on the frontend.
It combines core productivity functionality (task management) with gamification, background music, calendar-based daily mood setting, and admin management tools.

The server-side uses Express.js, MongoDB, and Mongoose, while the frontend uses EJS templating with static JS game engine integration (Phaser or Excalibur.js).
For security, we implement bcrypt password hashing and email verification through MailTrap sandboxing.
An admin view is built separately to provide backend oversight on user management and progress.

### 4.2 Technology Stack

| Layer | Technologies/Tools | Purpose |
|:--|:--|:--|
| Frontend (View Layer) | EJS, HTML5, CSS3, Vanilla JS, Phaser.js/Excalibur.js | UI rendering, user interaction, game scene control |
| Backend (Controller Layer) | Node.js, Express.js, Express Sessions | Business logic, routing, session control |
| Database (Model Layer) | MongoDB, Mongoose | Persistent storage of users, tasks, game state |
| Authentication | bcrypt, MailTrap Sandbox | Secure user authentication and email verification |
| Hosting | Glitch.com | Live deployment platform |
| Testing | Postman, MongoDB Compass, MailTrap | API testing, database inspection, email flow simulation |



### 4.3 MVC Mapping

#### 4.3.1 Models (Database Layer)

Our application uses two primary database models:

- **User Model**:  
  The core model that stores all user-related information.  
  **Fields include**:
  - `email`: User's email address (string, required, unique).
  - `passwordHash`: Hashed password stored securely (string, required).
  - `isVerified`: Boolean flag indicating whether the user has completed email verification.
  - `displayName`: Optional display name for the user.
  - `currentRound`: Indicates the current game round the user has reached.
  - `expPoints`: Accumulated experience points earned through task completion.
  - `verificationToken` *(optional, transient)*: Token generated for verifying new accounts. Stored temporarily until verification is complete.
  - `gameState` *(embedded document)*:
    - Tracks user's completed tasks count.
    - Tracks unlocked levels, companions, and XP milestones.

- **Task Model**:  
  Represents the to-do tasks associated with each user.  
  **Fields include**:
  - `userId`: Reference to the User who created the task.
  - `taskName`: Description/title of the task.
  - `status`: Task status (pending/completed).
  - `createdAt`: Timestamp of when the task was created.

---

> **Note**:  
> - **Verification tokens** and **game state** are **parts of the User model**, not separate collections.  
> - They are handled internally through subfields and transient fields inside the User document.


#### 4.3.2 Views (Client-Side UI)

The client-side interface is rendered dynamically using **EJS templates**, styled to create a cozy, immersive productivity and gaming environment.

The application's main views include:

- **Login/Register Pages**:  
  - Allow users to securely register a new account and complete email verification.
  - Minimalistic design focused on clarity and ease of navigation.
  - Unverified users are prompted to check MailTrap and complete verification before proceeding.

- **User Dashboard**:
  - Central hub where users manage their to-do tasks, view their timer, and interact with the gamified environment.
  - Contains multiple interactive sections:
    - **Task Manager**: Users can create, complete, edit, and delete tasks easily.
    - **Timer**: A work session timer helps structure productivity intervals.
    - **Game Canvas**: Embedded Phaser/Excalibur game where task completion triggers progression.
    - **Music and Sound Settings**: Ambient background sounds can be customized (e.g., rain, wind, birds) to create a cozy workspace atmosphere.
    - **Calendar Widget**: Displays current date, helping users align their tasks with real-world schedules.
    - **Live Clock Display**: Shows the real-time system clock in either 12 or 24-hour format.
    - **ESC Button (Notebook Menu)**: Toggle for menu and settings, enhancing interactivity.

- **Admin Dashboard (Restricted View)**:
  - Accessible only to admin users.
  - Admins can:
    - View all registered users.
    - Update user levels manually.
    - Force reset passwords.
    - Reset music/sound settings to default.
    - Delete users if necessary.
  - Admin dashboard layout is streamlined for efficient user management.

---

##### EJS Partial Includes:

The UI is modularized through reusable **EJS partials**, making the frontend scalable and easy to maintain:

- `header.ejs`:  
  - Includes shared stylesheets, metadata, and scripts needed for page rendering.

- `calendar.ejs`:  
  - Displays the date and allows users to select or view their "daily mood" using sound themes.

- `background-sound.ejs`:  
  - Controls for setting background ambient sounds such as rain, wind, and birds.

- `game.ejs`:  
  - Embeds the interactive game canvas tied to user task progression.

- `music.ejs`:  
  - Music player interface for controlling and adjusting soundtracks.

- `todo.ejs`:  
  - Manages the creation, listing, and modification of user to-do tasks.

- `scripts.ejs`:  
  - Common JavaScript logic and client-side event listeners.

---

> **Note**:  
> The design emphasizes **ease of use**, **personalization**, and **seamless transitions** between productivity and gaming activities, aiming to create a calm, engaging work-play balance.


#### 4.3.3 Controllers (Backend Logic)

The backend logic of CozyTodo is structured using **Express.js routers** to handle different resource operations: user management, task operations, admin features, and session management.

All major functionalities are organized across **User Routes**, **Task Routes**, and **Admin Routes**.

---

### User Routes:

| Route | Method | Purpose |
|:--|:--|:--|
| `/signup` | GET | Render the signup page for new user registration. |
| `/signup` | POST | Register a new user account, hash the password, and send verification email through MailTrap. |
| `/` | GET | Render the main landing page. |
| `/login` | GET | Render the login form page. |
| `/login` | POST | Authenticate a user, establish a session if email is verified. |
| `/logout` | POST | Logout the user by destroying the session. |
| `/verify-email` | GET | Verify user's email address through token provided in email link. |
| `/forgotPassword` | GET | Render the forgot password request form. |
| `/forgotPassword` | POST | Handle forgot password form submission and send password reset instructions. |
| `/updateUserSettings` | POST | Allow users to update their personal settings (e.g., background sound preferences). |
| `/resetDetails` | GET | Render form to reset user details (for verified users). |
| `/resetDetails` | POST | Handle form submission to reset user details. |
| `/resetPassword` | POST | Allow password reset after a successful forgot-password request. |

---

### Admin Routes:

| Route | Method | Purpose |
|:--|:--|:--|
| `/admin` | GET | Render the Admin Dashboard (view all users, actions). |
| `/admin` | POST | Verify if logged-in user has admin privileges. |
| `/admin/delete-user` | POST | Admin can delete a user account. |
| `/admin/remove-task` | POST | Admin can remove a specific task from a user's task list. |
| `/admin/update-level` | POST | Admin can manually update a user's level. |
| `/admin/reset-settings` | POST | Admin can reset a user's sound/music settings to default values. |
| `/admin/force-reset-password` | POST | Admin can force reset a user's password if necessary. |

---

### Task Routes:

| Route | Method | Purpose |
|:--|:--|:--|
| `/tasks` | POST | Create a new task linked to the logged-in user. |
| `/tasks` | GET | Retrieve the list of tasks for the logged-in user. |
| `/tasks/:id` | PUT | Update the status (e.g., complete/incomplete) of a task. |
| `/tasks/:id` | DELETE | Delete a specific task by ID. |

---

##### Additional Controller Responsibilities:

- **Session Management**:  
  - User sessions are maintained using **Express-Session** after successful authentication.
  - Session destruction is handled on logout.

- **Access Control**:  
  - Middleware checks ensure that only admins can access Admin Routes.
  - Unauthorized users are redirected appropriately.

- **Security Measures**:  
  - Passwords are hashed with bcrypt before being saved.
  - Email verifications are required before login access is granted.
  - Secure password reset workflows are implemented.

- **Performance Optimization**:  
  - Game state and user settings are saved only at milestone checkpoints (e.g., after a round completion) rather than after every minor interaction.


### 4.4 Game and To-Do System Integration
- Game progression based on task completions.
- Background sounds (wind, rain, birds, etc.) integrated through calendar panel.
- Time and date display with ambient environment setting.

### 4.5 Security and Authentication Flow
- **Password Hashing**: Secured using bcrypt.
- **Email Verification**: Token-based email verification via MailTrap.

#### 4.6 Admin Panel Features

Accessible only to admin users:
- View all registered users.
- Update users' levels manually.
- Delete users if needed.
- Inspect user tasks and progress for moderation or troubleshooting.
- Force **reset of a user's password** if required.
- **Reset all background sound settings** to default for any user to maintain standardization or fix corrupted settings.

This separates normal gameplay from administrative controls and ensures better moderation and user support.



## 5. Challenges

The project encountered several technical and architectural challenges:

### 5.1 Game Engine Compatibility

- **Phaser**:
  - Initially chosen for its lightweight nature.
  - However, Phaser did not provide built-in support for standard tilemap formats like **TMX** or **LDtk**.
  - Tilemaps and hitboxes had to be manually created and integrated into the scenes.
  - This added significant overhead in terms of designing interactive levels and increased the chance of manual errors.

- **Excalibur.js**:
  - Provided better tilemap support, including compatibility with popular tilemap makers and formats.
  - However, Excalibur required bundlers like **WebPack** or **Vite** to properly compile and serve assets.
  - The **Glitch** hosting environment struggled with setting up and running bundlers due to resource constraints and server architecture.
  - This made it impractical to fully utilize Excalibur.js features without migrating to a different hosting platform.

> **Final Game Engine Decision**:  
> Ultimately, although Excalibur.js offered more advanced tilemap features, due to bundler conflicts and hosting limitations on Glitch, we finalized our deployment using an unbundled version of **Phaser.js** to ensure stability and compatibility.
### 5.2 Bundler Issues

- Bundlers like **WebPack** and **Vite** clashed with the simple server setup on Glitch.
- Configuring a bundler broke the **Express.js + EJS** dynamic page rendering structure.
- Glitch had build timeouts and memory limitations that frequently interrupted bundler operations.
- Despite several attempts to simplify the bundler setup, full Excalibur.js bundling support could not be achieved within the existing hosting environment.
- Ultimately, we proceeded with **unbundled Phaser** integration for simplicity and deployment stability.

### 5.3 Database Connectivity and Game State Management

- Managing when and how user game progress is saved posed challenges.
- Saving progress after every user action (e.g., completing each task) would have led to excessive MongoDB writes and potential performance issues.
- To optimize, we introduced **savepoints**:
  - Progress is only saved at major milestones, such as completing a full set of tasks in a round.
- This strategy helped to reduce database load by approximately 80% compared to the initial approach.
- We also implemented safeguards to ensure that **client-side game state** and **server-side stored state** stayed synchronized during gameplay and after user sessions.

### 5.4 Setting up Nodemailer and MailTrap

- Implementing a reliable email verification system was critical to prevent spam registrations and ensure account authenticity.
- Popular email services like SendGrid, Mailgun, and AWS SES required payment for volume-based access or domain verification, which was impractical for our development needs.
- **MailTrap** was chosen as an effective solution:
  - It provides a sandbox SMTP server that captures outbound emails without delivering them to real email addresses.
  - This allowed us to **simulate the full verification workflow** safely without incurring costs.

- **Technical Steps for Setup**:
  - Integrated **Nodemailer** into the Express.js backend to handle email sending logic.
  - Configured **SMTP credentials** securely through environment variables (.env files).
  - Generated unique verification tokens and embedded them into email links sent to users via MailTrap.
  - Verified users by checking the token on a secure `/verify/:token` route.
  - Added middleware on the login route to restrict access until the `isVerified` flag is true in the database.

- **Challenges Encountered**:
  - Initially faced issues with SMTP authentication errors due to incorrect environment setup.
  - Debugging sandbox email flows required careful tracking of token expiry and invalid link handling.
  - Adjusting the UX to clearly prompt users to check MailTrap rather than a real inbox during testing.

- Despite these challenges, the MailTrap-based flow successfully emulated a real-world email verification system and added critical security to the registration process.



## 6. Future Work

Looking ahead, several enhancements could be made to improve CozyTodo's functionality and user experience:

- **Enhance Countdown Timer Functionality**:  
  - Expand the timer to include features like break notifications, multiple session presets (Pomodoro-style cycles), and customizable alert sounds.

- **Improve Mobile Responsiveness**:  
  - Optimize the user interface for better usability across smartphones and tablets.
  - Adapt the game canvas and dashboard layout to fit smaller screens without losing interactivity.

- **Implement Real-Time Synchronization**:  
  - Allow user task lists and game progression to update in real-time without requiring manual page refreshes.
  - Use technologies such as WebSockets to push live updates.

- **Add More Gamification Elements**:  
  - Introduce additional mini-games, unlockable achievements, companion animations, and reward systems to deepen user engagement and replayability.

- **Desktop Application Development using Electron.js**:  
  - Package the CozyTodo Web Application into a cross-platform desktop app using **Electron.js**.
  - This would allow users to download and run CozyTodo natively on Windows, MacOS, and Linux systems.
  - The desktop version would offer better performance, offline capabilities, and deeper system integrations like notifications.



## 7. Conclusion

Our project successfully combined productivity tools with an engaging gamified user experience.

## 8. Resources

- Excalibur.js Documentation
- Phaser 3 Documentation
- MongoDB Documentation
- Mongoose ODM Documentation
- Express.js Guide
- WebPack Guide
- Vite Guide
- Stack Overflow/Medium

## 9. Testing Instructions

- Access the web app via Glitch.
- Register a new user, verify via MailTrap.
- Login, create, and complete tasks.
- Monitor level progression.
- Test Admin controls.
- Validate data in MongoDB Compass.
