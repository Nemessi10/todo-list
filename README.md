# To-Do List  

## Functional Requirements  

### User Management  

- **As a user, I want to sign up, log in, and manage my profile so that I can personalize my experience.**  
- **As a user, I want to reset my password via email so that I can regain access to my account if I forget it.**  
- **As a user, I want to stay logged in unless I manually log out so that I don’t have to enter my credentials repeatedly.**  
- **As an admin, I want to have different permissions than a regular user so that I can manage the system effectively.**  

### Task Management  

- **As a user, I want to create tasks with a title and description so that I can organize my work.**  
- **As a user, I want to update and delete my tasks so that I can keep my task list relevant.**  
- **As a user, I want to assign a status (To Do, In Progress, Done) and priority level to each task so that I can track progress and importance.**  
- **As a user, I want to set due dates for tasks so that I can manage deadlines effectively.**  
- **As a user, I want to filter and sort tasks (by priority, due date, completion status) so that I can quickly find the most relevant ones.**  
- **As a user, I want to search for tasks by title or description so that I can locate specific tasks easily.**  

## Quality Requirements (Grouped by Quality Attributes)  

### Performance & Scalability  

- **The API response time must not exceed 900ms for 95% of requests under normal load.**  
- **The system must optimize API calls to minimize unnecessary requests.**  

### Availability & Reliability  

- **The system must be available 99.9% of the time, excluding planned maintenance.**  
- **The backend must support graceful error handling and retry mechanisms.**  

### Compatibility  

- **The system must support modern Chromium-based browsers (Google Chrome, Vivaldi, Brave, Opera).**  
- **The system must not provide support for Firefox-based browsers.**  
- **The web UI must be responsive and work properly on both desktop and tablet devices.**  
- **The mobile application must support gesture-based navigation for a smoother UX.**  

### Security  

- **User authentication must be implemented via JWT tokens or session.**  
- **The system must prevent SQL Injection, XSS, and CSRF attacks.**  
- **Sensitive operations must require role-based access control (RBAC).**  

### Maintainability & Extensibility  

- **The backend codebase must follow clean architecture principles and be well-documented.**  
- **The API must be documented using OpenAPI (e.g., using Swagger).**  
- **The system must allow for the easy addition of new features without significant refactoring.**  

### Usability  

- **The UI must be intuitive and user-friendly, following modern design principles.**  
- **The system must be accessible on screens as small (mobile) and as large (desktop).**  
- **The system must support both English and Ukrainian languages, with an option to switch between them.**  
- **The mobile application must support offline mode with synchronization when reconnected.**  
- **The app must provide both a dark and light theme for better user experience.**  
