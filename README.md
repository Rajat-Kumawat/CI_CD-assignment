# CI/CD Pipeline for Flask and Express Applications

This repository contains the source code and CI/CD configuration for a full-stack application featuring a Flask (Python) backend and an Express (Node.js) frontend.

## Project Structure

Due to the repository structure, the directory naming for the pipelines is as follows:
* **/backend**: Contains the **Express (Node.js)** application (`index.js`, `package.json`).
* **/frontend**: Contains the **Flask (Python)** application (`app.py`, `requirements.txt`).

## CI/CD Pipeline Implementation

The automation is handled via **Jenkins** running on an AWS EC2 instance. Two separate declarative pipelines have been configured to handle the build and deployment processes.

### Key Features
* **Automated Triggers:** Configured via GitHub Webhooks to trigger builds on every `git push`.
* **Dependency Management:** Automated installation of Python packages via `pip` and Node modules via `npm`.
* **Process Management:** Uses **PM2** to manage application uptime and handle seamless restarts during deployment.
* **Environment Security:** Integrated Jenkins Credentials provider for managing sensitive data like API keys.

## Jenkins Pipeline Logic

The pipelines follow a structured flow:
1.  **Checkout:** Pulls the latest code from the `main` branch.
2.  **Install Dependencies:** * For Express: Navigates to `/backend` and runs `npm install`.
    * For Flask: Navigates to `/frontend` and runs `pip install -r requirements.txt`.
3.  **Deployment:** * Restarts the respective service using `pm2 restart` or starts it if not already running.

## Prerequisites
* Jenkins with Git and NodeJS plugins installed.
* Python 3.x and Node.js installed on the host machine.
* PM2 process manager installed globally (`npm install pm2 -g`).

## How to Run Locally
1.  Clone the repository.
2.  To run the Express app: `cd backend && npm install && node index.js`.
3.  To run the Flask app: `cd frontend && pip install -r requirements.txt && python app.py`.


## This line is added to check if webhook is working or not