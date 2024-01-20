#Specbee Assignment - Local Developer Setup
Steps for Local Developer Setup:
Prerequisites:
DDEV
NODE
Drush
Step 1: Clone Repository
After cloning the repository, navigate to the root folder specbee_assignment and open a terminal window from this folder.

Step 2: Configure DDEV
Run the following command in the root folder:

bash
Copy code
ddev config
Step 3: Select Project Name
Choose a project name (by default it's specbee_assignment, but you can change it).

Step 4: Configure Web Folder
When asked for the web folder, keep it blank and hit Enter.

Step 5: Select Drupal Version
Select drupal10 from the list.

Step 6: Start DDEV
Execute the following command:
ddev start
Step 7: Install Composer Dependencies
Run the following command:

ddev composer install
Step 8: Import Database
Import the provided database specbee.sql.gz located in the root folder. Extract it and run the following command:

ddev import-db < specbee.sql
Step 9: Clear Cache
Clear the Drupal cache with the following command:

ddev drush cr
Step 10: Access the Application
The URL will be accessible in the browser at https://specbee-assigment.ddev.site.
