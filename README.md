# reactjob
A mock data file is created with array of objects, where each object is a model of your job schema created in nodeJs task.
There is a root component and 4 child components.
Data will be passed to child components from parent component only.
4 child components are header, filters, content, footer.
Also,a general component is created which accepts type, name, and function from parent to update the values. 
Also,Integrated login and signup api. Set localstorage variable for maintaining session.And on succesful singup/login, navigate to home page with header showing user detail like name and profile photo. On click of logout button, home page header will show button to login/singup again and empty localstorage session.
