from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django import forms

class NewTaskForm(forms.Form):
    task = forms.CharField(label="New Task")

tasks = []

def index(request):
    return render(request, "index.html", {
        "tasks": tasks
    })

def add(request):

    # Check if method is POST
    if request.method == "POST":

        # Take in the data the user submitted and save it as form
        form = NewTaskForm(request.POST)

        # Check if form data is valid (server-side)
        if form.is_valid():

            # Isolate the task from the 'cleaned' version of form data
            task = form.cleaned_data["task"]

            # Add the new task to our list of tasks
            tasks.append(task)

            # Redirect user to list of tasks
            return HttpResponseRedirect(reverse("tasks:index"))

        else:

            # If the form is invalid, re-render the page with existing information.
            return render(request, "add.html", {
                "form": form
            })

    return render(request, "add.html", {
        "form": NewTaskForm()
    })