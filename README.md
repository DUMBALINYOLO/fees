# fees
TOY PROJECT FOR MY STUDENT END OF YEAR PRACTICAL FOR FEES MANAGEMENT WRITTEN IN DJANGO AND REACT JS.


to run the project 

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver

the react is already on a build version so you can always run the server and then use

but should need arise to modify the frontend code then you can navigate to frontend folder
npm i to install all the dependencies and then make your modifications

also run a shell command python manage.py shell

from users.models import AdminUser

a = AdminUser.objcts.create_admin(
                    email='your email'
                    gender = 'male',
                    first_name ='your first name',
                    middle_name ='your midlename ",
                    last_name = 'your last_name',
                    username='your username',
                    username='your password',
                    )
  a.active = True
  
  then you can go on to log in
