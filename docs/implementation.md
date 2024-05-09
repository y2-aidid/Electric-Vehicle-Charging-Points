# Implementation

## Introduction
The implementation to use the electricle vehicle charging ports were made by using bristol open data. using this data helps us capitilize on all information needed to make it as easy as possible for us. This data mentions the exact location, the manufacturer and weather it is in a public car park. The dataset made availaible is very accurate and reliable but is also capable of making mistakes and having inacurate information,This may cause some issues but it can be fixed by reliable checks and making sure everything is up to date. An API was used from bristol open data to provide all the information needed this is used for easy access so its not difficlt for third party access. The user interface that was provided helps give users a pisitive experience when looking for chargers.


## Project Structure
provide a table listing the number of jslint warnings/reports for each module.
This is a outline of our project folder structure which there are many reasons why it is important. For example, one of the main reason why that with the use of a file structure  is important is that the use of a file structure allows for better comprehension and organisation of things. A clear folder organisation allows team members to effortlessly navigate the structure of a project and bring clarity—so everyone knows where a specific file or resource is stored.
```
└── 📁GitHub File 
    └── EV Charging port.html
    └── map.html
    └── search.html
    └── style.css
```

index.html is the code that conntains the data to access the website
map.html allows access to see the area we are working within and shows the local electric vehicle charging ports
style.ccs acts as the file that shows how the set will look when being accessed


## Software Architecture
We found that charging point manganement is one significant component. This is generally done through the charging point management, which includes charging station networks, availability, status, and location. The user is provided with information regarding the closest charging station and resources to facilitate booking or charge initialization.
![image](https://github.com/y2-aidid/Electric-Vehicle-Charging-Points/assets/148769173/f12d568f-b1bd-4e9e-ab21-c949c567e87a)

**1.Front end layer:**

A central hub displaying charging station status, availability and user account information.

Map Interface: Interactive map showing the locations of charging stations and real-time availability.

Charging Session Control: Interface for initiating, monitoring and managing charging sessions.

Profile Management: User profiles for personalized settings, payment methodsand usage history.

**2.Analytic and reporting:**

Collecting usage statistics and performance metrics.

Generating reports on charging station utilization.


**Architectural style**

**Microservices:**

The microservice architecture is the perfect architecture for large-scale applications with complex requirements, high needs for scalability, and development distributed over multiple teams. This enables the team to work on different services independently, thus allowing easy and quick fixes on the go if needed at any time.



## Bristol Open Data API
TODO: Document each query to Bristol Open Data

![UML Class diagrams representing JSON query results](images/class1.png)
TODO: Repeat as necessary
