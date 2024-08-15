# UserDashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.4.
It features a paginated user list, user details pages, search functionality, caching, and a modern user interface.

## Features

- **User List**: Displays a list of users fetched from an API with pagination.
- **User Details**: Allows viewing detailed information about a user, including their avatar, first name, last name, and email.
- **Navigation**: Navigate seamlessly between the user list and user details pages.
- **Search**: Instantly search users by ID from the header search bar.
- **UI Enhancements**: Includes a loading bar for network requests, custom directives for UI interactions, and animations.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/yourrepository.git
    cd yourrepository
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the application:**
    ```bash
    ng serve
    ```
   Visit `http://localhost:4200` in your browser.

   
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Usage

- **Viewing Users**: Navigate through the user list and click on a user to view their details.
- **Searching**: Use the search bar in the header to search for users by ID.

## Project Structure

- **src/app**: Contains all the Angular components, directives, services, and interceptors.
- **header**: The header component with the search functionality.
- **card**: Displays individual user cards.
- **user-details**: Displays detailed information about a user.
- **loader**: A component that displays a loading bar during network requests.
- **hover-highlight.directive.ts**: Custom directive for highlighting elements on hover.
- **user.service.ts**: Service for handling API calls to fetch user data.
- **loading.interceptor.ts**: Interceptor that triggers the loader component during HTTP requests.
- **search.service.ts**: Service dedicated to handling the search functionality.
- **loader.service.ts**: Service that manages the state of the loader component.

## API

This project fetches user data from the [ReqRes API](https://reqres.in/). 
- **GET** `https://reqres.in/api/users?page={page}`: Fetches paginated user data.
- **GET** `https://reqres.in/api/users/{id}`: Fetches detailed information about a user by ID.

## License

This project is licensed under the MIT License.
