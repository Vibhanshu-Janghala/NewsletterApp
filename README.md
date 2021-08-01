# Newsletter App
 Completed Newsletter App including frontend build files

## Setup

The first thing to do is to clone the repository:

```sh
$ git clone https://github.com/Vibhanshu-Janghala/NewsletterApp.git
$ cd NewsletterApp
```

Create a virtual environment to install dependencies in and activate it:

```sh
$ virtualenv env
$ source env/bin/activate   (For mac/linux)
$ env\Scripts\activate   (For windows)
```

Then install the dependencies:

```sh
(env)$ pip install -r requirements.txt
```
Note the `(env)` in front of the prompt. This indicates that this terminal
session operates in a virtual environment set up by `virtualenv`.

Once `pip` has finished downloading the dependencies:
```sh
(env)$ python manage.py makemigrations
(env)$ python manage.py migrate
(env)$ python manage.py runserver
```
And navigate to `http://127.0.0.1:8000/`.


## Walkthrough

Now you will be greeted with a component which would have an input field for entering email which can be used to register for Newsletter.
If you enter a correct format email then you will be greeted with `Success`. If the entered inputed is not formatted correctly you would
be  shown with `Failed.Try Again` message.

