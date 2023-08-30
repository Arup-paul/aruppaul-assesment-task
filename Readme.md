

## Assessment
Implement a banking system with two types of users: Individual and Business. The system should
support deposit and withdrawal operations for both types of users.

## Requirements
  - PHP Version  8.1
 

## Installation 

-  Clone the repository `git clone https://github.com/Arup-paul/aruppaul-assesment-task.git`

## Install Backend 

- cd into the project directory `cd aruppaul-assesment-task/backend`
- Install the Composer dependencies `composer install` 
- Set Up .env File `cp .env.example .env`
- Generate an application key: `php artisan key:generate`
- Configure Database
- `DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=your_database_name
   DB_USERNAME=your_database_username
   DB_PASSWORD=your_database_password`

-   Run Migrations `php artisan migrate`
-   Start the Development Server `php artisan serve`

~ API ENDPOINTS ~

- POST /api/register - Register a new user
- POST /api/login - Login a user
- POST /api/logout - Logout a user 
- GET /api/deposit - Auth user deposit history
- POST /api/deposit - Deposit money to a user account
- GET /api/withdraw - Auth user withdraw history
- POST /api/withdraw - Withdraw money from a user account



## Install Frontend

- cd into the project directory `cd aruppaul-assesment-task/frontend`
- Set Up .env File `cp .env.example .env`
- Install the npm dependencies `npm install`
- Start the Development Server `npm start`





  


