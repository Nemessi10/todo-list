# To-Do list

## Functional Requirements
### User Management:

- The system must allow users to sign up, log in, and manage their profiles.
- Users must be able to reset their passwords via email.
- User authentication must be persistent (users stay logged in unless they log out manually).
- User roles must include Admin and Regular User with different permissions.

### Task Management:

- Users must be able to create, update, and delete tasks.
- Each task must have a title, description, status (To Do, In Progress, Done), and priority level.
- Users must be able to set due dates for tasks.
- Users must be able to filter and sort tasks (by priority, due date, completion status).
- Users must be able to search for tasks by title or description.

### Mobile & Web Support:

- The system must provide both a web interface and a mobile application.
- The UI must be responsive and work on both desktop and tablets.
- The mobile app must support gesture-based navigation for a smoother UX.
- The mobile application must support offline mode with synchronization when reconnected.
- The app must provide both a dark and light themes support.
- The app must cache user data locally for better performance.

### Data Storage & Security:

- All data must be stored securely.
- Passwords must be hashed and stored securely.

## Quality Requirements (Grouped by Quality Attributes)
### Performance & Scalability:

- API response time must not exceed 900ms for 95% of requests under normal load.
- The system must optimize API calls to minimize unnecessary requests.

### Availability & Reliability:

- The system must be available 99.9% of the time, excluding planned maintenance.
- The backend must support graceful error handling and retry mechanisms.

### Compatibility:
- The system must support modern Chromium-based browsers (Google Chrome, Vivaldi, Brave, Opera).
- The system must not provide support for Firefox-based browsers.

### Security:

- User authentication must be implemented via JWT tokens or session.
- The system must prevent SQL Injection, XSS, and CSRF attacks.
- Sensitive operations must require role-based access control (RBAC).

### Maintainability & Extensibility:

- The backend codebase must follow clean architecture principles and be well-documented.
- The API must be documented using OpenAPI (e. g., using Swagger).
- The system must allow for the easy addition of new features without significant refactoring.

### Usability:

- The UI must be intuitive and user-friendly, following modern design principles.
- The system must be accessible on screens as small (mobile) and as large (desktop).
