To run this have nodejs and mysql installed
Open terminal in the current folder and run the following command to install all the dependencies
-> npm install
then run the database file
-> mysql -u <USERNAME> -p < db.sql
then to run use the following command
-> node app

Open browser and type the following url -> localhost:3000

For logging in for the first time there are no users.
So u need to use the admin credentials and create the employees.
username: admin
password: iamadmin

After logging in first create more branches/hubs.
(when u run the db.sql file 4 branches will be created. u can delete them and create ur own)
Go to the branches link and do this.

After that create more employees.
When they r created they receive a mail to the provided email with their credentails.
Use those credentials to log in. then they can change their password.

Managers and admin have accsess to all the links.
Employees have access to add courier, update courier and track links.
Shipper has access to update courier and track links.
Users have access to only track links.

To add a courier fill in the necessary details.
Then click submit. u can the download a pdf version of the destination address along with the qr code of the tracking id.

To update a courier when it has reached a hub just click the update link and scan the qr code using the camera.
(use mozilla browser with permision for opening camera in mobile.)
U will receive a toast message if updation is successful or not.

To track a package just click the track link and scan the qr code or type it it the input field and hit the track button.
U will be sent to a page where u can see the last updated location of the package along with destination.

Mail is sent to the sender of the courier every time a courier is added and updated.
