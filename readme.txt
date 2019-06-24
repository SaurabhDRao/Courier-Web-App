to run this have node installed
open terminal in the current folder and run the following command to install all the dependencies
-> npm install
then to run use the following command
-> node app

note that db connection gets interrupted sometimes so u need to stop the server (press ctrl + C) and run the "node app" command again.

for logging in for the first time there are no users.
so u need to use the admin credentials and create the user.
username: admin
password: iamadmin

afert logging in u can create more users.
when they r created they receive a mail to the provided email with their credentails.
use those credentials to log in. then u can change password for that user.

currently there r managers for all branches so to create a employee for a particular branch log in as the manager for that branch.
username and password of managers:
19L002 rahul -> for branch 2
10L003 reevan -> for branch 3
19L004 prashanth -< for branch 4
(there r currently 4 branches)

managers and admin have accsess to all the links.
employees have access to add courier, update courier and track links.
shipper has access to update courier and track links.
users have access to only track links.

mail is sent to the sender every time a courier is added and updated.

use mozilla browesr with permision for opening camera in mobile.