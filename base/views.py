from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def home(request):
    return render(request, 'base/home.html')

def services(request):
    return render(request, 'base/services.html')

def contact(request):
    return render(request, 'base/contact.html')


def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home') 
        else:
            messages.error(request, 'Invalid username or password.')

    return render(request, 'base/login.html')

def signup(request):
    if request.method == 'POST':
        # Handle the signup form logic here
        pass
    return render(request, 'base/signup.html')

def profile(request):
    if request.method == 'POST':
        # Handle the signup form logic here
        pass
    return render(request, 'base/profile.html')

def logout_view(request):
    logout(request)  
    return redirect('home') 
