# Employee System

## Description

The Employee System is a web application designed to manage employee registrations and art creation. Employees can register, create artwork, and admins can review and approve registrations as well as monitor employee productivity through an admin panel.

## Technologies Used

- **Node.js**
- **React.js**
- **MySQL**
- Other libraries or frameworks used (e.g., React Bootstrap, Chart.js)

## Installation

### Prerequisites

1. Ensure you have [Node.js](https://nodejs.org/) and npm (or yarn) installed on your system.
2. Install a MySQL database server (e.g., MySQL Workbench, phpMyAdmin).

### Steps

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sairam2/employee-system.git
    ```

2. **Install dependencies:**

    ```bash
    cd employee-system
    npm install
    ```

    (Use `yarn install` if using yarn)

3. **Set up database:**

    - Create a MySQL database for your application.
    - Import the schema files located in `server/database/*.sql` into your database.

## Running the Development Server

1. **Start the server:**

    ```bash
    npm run dev
    ```

2. **Open the application:**

    Your application should now be running in a development environment, typically accessible at [http://localhost:3000](http://localhost:3000) (port may vary).

    Alternatively:
    - Double-click on `run.bat` (Windows) or execute `./run.sh` (Linux/macOS) to start the server in a batch script (modify the script if needed).

## Project Structure

employee-system/
├── client/ # React.js frontend code
│ ├── components/ # Reusable React components
│ ├── pages/ # Individual application pages
│ ├── styles/ # CSS styles
│ └── App.js # Main React application entry point
├── server/ # Node.js backend code
│ ├── controllers/ # Application controllers
│ ├── models/ # Data models
│ ├── routes/ # API endpoints
│ ├── database/ # Database connection and schema files
│ ├── config/ # Configuration files
│ └── server.js # Node.js server entry point
├── README.md # This file
├── package.json # Project dependencies and scripts
└── run.bat (optional) # Windows batch script to start server
└── run.sh (optional) # Linux/macOS shell script to start server


## Features

- **Employee Registration:**
  - Employees can register themselves using a form.
  - Admins can review and approve/reject registrations.

- **Art Creation:**
  - Approved employees can log in and select from pre-defined art options (ART 1, ART 2, ART 3).
  - The system tracks the time taken to complete each artwork.

- **Admin Panel:**
  - Admins can view a dashboard with charts and metrics, including:
    - Number of art pieces created on a selected date/time range (with From-To filter).
    - Employee production on a given day (e.g., total time spent or number of artworks completed).
  - Charts can be generated using libraries like Chart.js or other visualization tools.

## Negative Scenarios and Considerations (TBD)

- **Registration:**
  - Malicious user input (e.g., SQL injection) in the registration form.
  - Weak or duplicate passwords.

- **Art Creation:**
  - System time manipulation or inaccurate tracking of artwork creation times.
  - Potential for unauthorized access to the system that might allow manipulation of artwork creation data.

- **Admin Panel:**
  - Data security of the metrics displayed on the dashboard, potentially involving sensitive information.
  - Lack of access control or role-based permissions for different types of admins.

## Security Measures

- **Input Validation:** Sanitize user input to prevent SQL injection and other vulnerabilities.
- **Password Hashing:** Store passwords securely using hashing algorithms (e.g., bcrypt).
- **Access Control:** User authentication and authorization to restrict access to sensitive data.
- **Data Encryption:** Encrypting sensitive data at rest and in transit, particularly for production environments.
- **Regular Security Audits:** Periodic security assessments to identify and address potential vulnerabilities.

