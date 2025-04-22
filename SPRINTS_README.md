# Smart Winter Village

This document outlines the approach for our hackathon project. The objective is to apply what we've learned to a real-life project under the guidance of Miraa Vorne. In this hackathon, all participants are tasked with building a system with the same purpose, and the best implementation will be selected.

## Table of Contents
### Sprint 1
   - [Team Members](#team-members)
   - [Introduction to the System](#introduction-to-the-system)
   - [Project Scope and Goals](#project-scope-and-goals)
   - [Objectives and Deliverables](#objectives-and-deliverables)
   - [Team Members and Responsibilities](#team-members-and-responsibilities)  
   - [Milestones and Project Management](#milestones-and-project-management)  
   - [Tools and Platforms for Effective Communication](#tools-and-platforms-for-effective-communication)  
   - [Project Planning](#project-planning)  
   - [Tech Stack](#tech-stack)  
   - [Preliminary Research](#preliminary-research)  
   - [Testing Plan](#testing-plan)
     
### Sprint 2
   - [Project Design](#project-design)
   - [System Architecture](#system-architecture)
   - [Sensor Selection](#sensor-selection)
   - [Order List](#order-list)
   - [Security Measures](#security-measures)




# Team Members
- Abhishek Adhikari
- Aleksandr Shishkov
- Yuewei Wu
- Iaroslav Bashko

## **Introduction to the System**  

Below is a summary of the project's objective:  

1. **Cabin Reservation System**:  
   - Integrate with an existing public [website](https://rakkaranta.fi/) and other reservation applications.  

2. **Customer Extranet**:  
   - A portal for customers to reserve amenities such as the beach sauna, fire hut, laundry room, gym, etc.  

3. **Company Intranet**:  
   - Provides access to analyzed sensor data, customer information, and reservation management functionalities.  

4. **Sensor Application Demos**:  
   - Demonstrate applications like measuring wood storage levels, detecting water leakages, and other innovative solutions developed by the team.  

## **Project Scope and Goals**  

### **Project Scope**  
Design and develop a system integrating backend, frontend, ML, and embedded solutions for reservation management and sensor data monitoring.  

### **Goals**  
1. Build a scalable backend to manage reservations and sensor data.  
2. Provide user-friendly portals for customers (extranet) and administrators (intranet).  
3. Use machine learning to analyze sensor data and provide insights.  
4. Develop sensor-based solutions for real-time monitoring (e.g., wood levels, water leaks).  
5. Ensure security, maintainability, and quality throughout development.  

## **Objectives and Deliverables**  

### **Objectives**  
1. Build a cabin reservation system integrated with a public website and third-party apps.  
2. Develop a customer extranet for booking amenities and a company intranet for analytics and management.  
3. Create sensor demos for wood storage and water leakage detection.  

### **Deliverables**  
- **Backend**: RESTful APIs, PostgreSQL database, and Azure deployment.  
- **Frontend**: Customer portal and admin dashboard using React.js.  
- **ML Models**: Sensor data analysis for actionable insights.  
- **Embedded Systems**: Real-time sensor data collection with Raspberry Pi Pico.  
- **Documentation**: Project report and user manual.  
- **Demo**: A functional prototype showcasing all features.  

## **Team Members and Responsibilities**  

### **Abhishek Adhikari - Backend Engineer**  
Develop RESTful APIs, manage the MySQL database, and integrate systems with Azure deployment.  

### **Aleksandr Shishkov - ML Engineer**  
Analyze sensor data, develop ML models, and integrate real-time insights into the backend.  

### **Yuewei Wu - Frontend Engineer**  
Build responsive portals for customers and administrators, integrated with backend APIs.  

### **Iaroslav Bashko - Embedded Engineer** / **Team Manager**
Set up sensors, write firmware for data transmission, and ensure reliable hardware performance.  


## **Milestones and Project Management**  

We are adopting the Agile Scrum framework for project management. Each week, we will complete a sprint to discuss ongoing work, manage the project backlog, and review progress.  

Weekly sprint reviews with Miraa Vorne will be held every Tuesday to evaluate progress, receive feedback, and set the next milestone. This flexible approach ensures we stay on track while continuously improving.  


## **Tools and Platforms for Effective Communication**  

To ensure smooth and efficient communication within our team, we rely on the following tools and platforms:  

- **Telegram**: For quick and real-time messaging, updates, and notifications.  
- **Discord**: Primary platform for meetings and discussions, offering voice, video, and screen-sharing capabilities.  
- **Google Drive**: For storing, sharing, and collaborating on documents and files.  

## Project Planning
https://github.com/users/Logisx/projects/1

## **Tech Stack**
### Front-end:
- React.js is used for building a dynamic, responsive, and user-friendly interface. It allows the development of reusable UI components, ensuring efficiency and consistency across the application. 
- Node.js is for server-side rendering if required for SEO optimization and faster initial page loads.
### Back-end:
- **Backend**: **Node.js** with **Express.js** - Chosen for its fast, event-driven, and asynchronous nature, ideal for handling real-time data (reservations, sensor data). - Rich ecosystem and libraries (e.g., Socket.IO for real-time updates). 
- **Database**: **PostgreSQL** - Reliable, scalable, and SQL-based, perfect for handling complex queries and large datasets. - Provides ACID compliance, which is essential for managing reservations and user data securely. 
- **Authentication**: **JWT (JSON Web Tokens)** - For secure user authentication and role-based access in the extranet and intranet systems. 
- **Deployment**: **Azure VM** - Scalable cloud environment for hosting and testing the backend system.

### DS/ML: 
Python, Sklearn, Pandas, Numpy, TensorFlow
### Embedded System:
MicroPython and related libraries

## Preliminary Research

### Security Measures Implemented
1. **Firewall Configurations for APIs**:
 - Firewalls are configured to monitor and control incoming and outgoing traffic to the APIs, ensuring only authorized requests are processed.
 2. **SQL Injection Prevention**:
 - Prepared statements and parameterized queries are implemented to prevent malicious SQL code execution.
 3. **General Security Measures**:
 - Data is encrypted during transit (e.g., using HTTPS) and at rest.
 - Authentication mechanisms, including secure tokens, are in place.
 - Regular vulnerability scans and updates to dependencies are performed.

## **Testing Plan**  
1. **Unit Testing**:  
   - Verify individual components (e.g., reservation forms, APIs, and ML models).  

2. **Integration Testing**:  
   - Test interactions between modules (e.g., frontend-backend communication).  

3. **Security Testing**:  
   - Use automated tools (e.g., ESLint) and peer reviews during GitHub pull requests to identify vulnerabilities.  

4. **CI/CD Pipeline**:  
   - Integrate automated testing into the CI/CD pipeline to ensure quality and security throughout development.

---

## Project Design 
The Smart Winter Village is an IoT-powered system designed to improve safety, manage resources, and enhance the ambiance of a remote cabin. It uses a network of sensors and actuators to monitor the environment, track wood storage, and create a cozy, immersive experience. With AI-based insights, the system analyzes data to enhance safety and optimize the user experience. All data is collected, processed, and displayed through an intuitive dashboard, making it easy to stay informed and in control.

## System Architecture
The system consists of the following key components:
1.	**Frozen Road Alert System** – Detects ice patches and freezing conditions.
2.	**Log Storage Checker** – Monitors firewood levels to prevent shortages.
3.	**Ambient Experience System** – Controls LED lighting, fragrance, and music for a cozy atmosphere.
4.	**AI Assistant & Dashboard** – Provides real-time monitoring and user interaction via REST APIs.
5.	**Security Measures** – Implements encryption, authentication, and secure storage.
![system](https://github.com/user-attachments/assets/8904082e-ae8c-4c6e-b083-7c8768d86736)



 ## Sensor Selection

 ### Frozen Road Alert System
- **Temperature and Humidity Sensor (DHT11)** – Detects freezing temperatures and humidity changes.
- **Infrared Ice Detection Sensor (MLX90614)** – Identifies ice patches using infrared reflection.

 ### Log Storage Checker
 - **Ultrasonic Sensor (HC-SR04)** – Measures distance to detect changes in wood pile height.
 - **Weight Sensor (HX711 + Load Cell, optional)** – Tracks firewood usage through weight measurement.

### Ambient Experience System
- **RGB LED Strip (Neopixel)** – Provides dynamic lighting effects.
- **DC Mini Air Pump** – Dispenses fragrance for enhanced atmosphere.
- **Sound Module (PCM5102A I2S DAC + PAM8403 + 5W 8Ω Speaker)** – Plays music or ambient sounds.

## Order List

### Farnell
|  Item        |  Price (€)  |  Order Code  |
|-----------------------------------------------------------------------------------------------------------------|---------|---------|
| [PCM5102APWR](https://fi.farnell.com/en-FI/texas-instruments/pcm5102apwr/dac-32bit-384ksps-tssop-20/dp/3005708) | 4.08    | 3005708 |

### Elfa Distrelec
|  Item        |  Price (€)  |  Order Code  |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------|------------|
| [MLX90614](https://www.elfadistrelec.fi/sv/mlx90614-ncir-infraroed-fjaerrtemperatursensorenhet-m5stack-u028/p/30172531?trackQuery=MLX90614&pos=5&origPos=1&origPageSize=50&track=true&sid=DqxHBMcEpn&itemList=search)        | 18.19 | 301-72-531 |


## Security Measures
### Data Transmission Security
- **Encrypt API Communications**: Use HTTPS/TLS for secure GET/POST requests between the dashboard, backend APIs, and external APIs.
- **Authentication & Authorization**: Require API keys, OAuth, or JWT tokens for access to dashboards and external APIs.
- **Firewall & Network Security**: Use firewalls and VPNs to restrict unauthorized access to backend APIs and IoT devices.

### Data Storage Security
- **Database Encryption**: Encrypt sensitive data (e.g., in InfluxDB) using AES or similar standards.
- **Access Control**: Implement role-based access control (RBAC) to limit database access.
- **Regular Backups**: Perform secure, regular backups to prevent data loss.

### IoT & Sensor Security
- **Sensor Data Integrity**: Validate and encrypt data from sensors (e.g., Wood Storage, Frozen Path) before transmission.
- **Prevent Unauthorized Actuator Access**: Ensure only authenticated systems can control IoT components (e.g., LEDs, sound, fragrance dispensers).


# **Data Pipeline Implementation**

This part outlines the **data pipeline architecture** used for collecting, processing, and visualizing real-time sensor data.

---

## **1. Data Pipeline Architecture**

### **1.1 Overview of the Data Pipeline**
The data pipeline is structured to **efficiently collect, transmit, process, and visualize sensor data**. The flow of data moves from **hardware sensors** to a cloud-based backend, ensuring real-time updates and analytics.

### **1.2 Data Flow in the Pipeline**
1. **Data Collection**  
   - **Raspberry Pi Pico W** collects environmental sensor data (e.g., temperature, humidity).
   - The data is **published to the MQTT Broker**.

2. **Data Transmission**  
   - The **Mosquitto MQTT Broker** routes messages between the sensor and other components.
   - The **Telegraf Agent** subscribes to MQTT topics and passes incoming data to InfluxDB.

3. **Data Processing**  
   - The **backend processes sensor data**, applies validation, and makes it accessible via REST APIs.

4. **Data Visualization**  
   - The **frontend fetches processed data** from the backend.
   - Clients interact with the **React Native dashboard** for real-time monitoring.

### **1.3 Architectural Diagram**
Below is the **visual representation of our data pipeline**:

![Pipeline](https://github.com/user-attachments/assets/686fe10c-2be4-403e-8f21-dc478cae3d0b)


🔵 **Blue Arrows** → Forward Data Flow  
🔴 **Red Arrows** → Feedback or Acknowledgment Loop  

---

## **2. Key Components & Technologies Used**

### **2.1 Data Collection**
- **Hardware:** Raspberry Pi Pico W + Sensors.
- **Software:** MicroPython for **sensor reading and MQTT communication**.
- **Protocol:** **MQTT** (Message Queuing Telemetry Transport) for lightweight communication.

### **2.2 Data Transmission and Storage**
- **Broker:** **Mosquitto MQTT Broker** hosted on **Azure VM**.
- **Telegraf Agent**
- **InfluxDB**
---

## **3. Data Processing**

The **data processing phase** is a critical part of the pipeline where raw sensor data is **validated, filtered, and structured** before being made available for consumption by the **frontend application**. This phase ensures that **only accurate, relevant, and formatted data** is stored and visualized.

### **3.1 Responsibilities of the Backend in Data Processing**
The **backend** is responsible for handling the **incoming data from the Telegraf agent** and making it available via **REST APIs**. The key responsibilities of the backend include:

#### **Data Ingestion**
- The backend **receives sensor data** from the **InfluxDB**.
- The incoming data is **structured as JSON payloads**.

#### **Data Validation & Filtering**
- Ensures the data is in the **correct format** (e.g., numerical values for **temperature and humidity**).
- **Filters out incorrect or corrupted readings** (e.g., negative temperature values where not applicable).
- Applies **threshold-based validation** to prevent sensor errors from affecting the dataset.

#### **Data Transformation & Structuring**
- Converts **raw sensor readings** into a **structured format**.
- **Applies time-series labeling** for chronological analysis.

#### **Data Storage & API Accessibility**
- Stores **processed data log securely** in **PostgreSQL** and **realtime sensor data** in **InfluxDB**.
- Provides **REST API endpoints** for clients to **query and retrieve** the processed data.

### **3.2 Data Flow in the Backend**
1. **Telegraf Agent** receives raw sensor readings from **MQTT**.
2. **The backend API ingests and validates the data**.
3. **Valid data is formatted and stored** in the database.
4. **API Endpoints serve processed data** to the frontend.

### **3.3 Example of Data Validation & Processing**
- If a **sensor reports a temperature of -100°C**, it is automatically **discarded as an invalid reading**.
- The **timestamp for each data entry** is formatted for **correct time-series representation**.

---

## **4. Testing Implementation**

### **4.1 Unit Testing**
- **Backend API testing** using **Mocha and Chai**.
- Each **new implementation** undergoes **independent unit testing**.

### **4.2 Integration Testing**
- Ensured **seamless connectivity** between:
  - **Raspberry Pi ⟷ MQTT Broker**
  - **InfluxDB ⟷ Backend**
  - **Backend ⟷ Frontend**
- **Postman** for API testing, **Mosquitto CLI** for MQTT message verification.

### **4.3 Performance Testing**
- **We are thinking to implement this in upcoming phase after prototype finalization**.
- Focus areas:
  - API **response time** and **concurrent request handling**.
  - **MQTT broker stress testing** under high loads.

### **4.4 Data Validation**
- **Input validation** at multiple levels:
  - **Sensor data validation** (range checks, format verification).
  - **API data integrity checks** before processing.

---

## **5. Security Measures Implemented**

### **5.1 Firewalls & Network Security**
- **Azure Firewall** configured to restrict access.
- **UFW (Uncomplicated Firewall)** enabled on the VM.

### **5.2 CORS Configuration**
- Implemented **CORS policies** in the backend:
  - Only **specific frontend domains** can make API requests.
  - Restricted HTTP methods to prevent unauthorized access.

---



