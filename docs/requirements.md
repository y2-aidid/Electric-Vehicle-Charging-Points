# Requirements

## User Needs

### User stories
 

    As a EV user, my role is to find the nearest charging point that is full, as it will save some of my eleletric from being wasted of travelling to the furthest electric charging point that is empty and having to travel around to find a full charging point.

    As the council, my role is to check all charging points on the app to gather data, the benifit of this is it will show if they are beeing used or if we need more charging points. 
    
    As the user my role is to recharge the charging point, the benifit of this is I will make sure that all charging point is full by checking the app which point has ran out off charger. 

### Actors
User 1 - A Electric Vehicle user who needs access to a charging point.
User 2 - A Bristol City Coucncil member who needs access to the app for data.
User 3 - A Worker who changes the empty battery to a full battery by using the app to identify which charging point is empty.

### Use Cases

| USE-CASE ID| USE-CASE NAME | 
| -------------------------------------- | ------------------- |
| **Description** | Goal to be achieved is the user needs to find a full pump without having to go from pump to pump wasting electricity|
| **Actors** | electric vehicle driver |
| **Assumptions** | use app to see full ports</td></tr>
| **Steps** | check on app to see which ports are full and available to use |
| **Variations** |  Any variations in the steps of a use case |
| **Non-functional** | List of non-functional requirements that the use case must meet. |
| **Issues** |  List of issues that remain to be resolved |

| UC2| USE-CASE NAME | 
| -------------------------------------- | ------------------- |
| **Description** | The goal for the worker is to make sure that they change the empty batteries to a full one for users to access. |
| **Actors** | EV Mechanic |
| **Assumptions** | uses app to see which charging ports are nearly empty.
| **Steps** | Check to see which ev ports are empty, replace them with new ones, make available for public use.
| **Variations** | Any variations in the steps of a use case |
| **Non-functional** | List of non-functional requirements that the use case must meet. |
| **Issues** | List of issues that remain to be resolved |

| UC1| EV charging point | 
| -------------------------------------- | ------------------- |
| **Description** | make sure pumps are being used to make sure that pumps are not being wasted |
| **Actors** | EV charging Maintenance |
| **Assumptions** | check app to make sure pumps are active ands are being used</td></tr>
| **Steps** | check app,if busy add more ports|
| **Variations** | Any variations in the steps of a use case |
| **Non-functional** | List of non-functional requirements that the use case must meet. |
| **Issues** | List of issues that remain to be resolved |

Your Use-Case diagram should include all use-cases.

![Insert your Use-Case Diagram Here](images/use-case.png)

## Software Requirements Specification
### Functional requirements
 
FR1: The System should show a clear marking for all the ev ports on the map

FR2: The system should require access to the users location

FR3: They system should show the availibilty on the ports that the user is looking at

FR4: The system should show the price of how much it cost to charge the vehicle

### Non-Functional Requirements

NFR1: The app should quickly respond to the user when used (performance efficiency) 

NFR2: The app should clearly show all the points with suitable sized marking (usability)

NFR3: The app should be usable on chrome internet browsers (compatibillity)

NFR4: The app should have a suitable default location if there is no location provided by the user (reliability)

NFR5: The app should be update to make sure there are working ev ports on all the marked locations on the app (functional suitability)

NFR6: The app should respond to the users request in quick timing (performance efficiency)

NFR7: The app should be able to be used on mobile as well as other devices (portability)

NFR8:The app should should keep users safe just incase they get into a accident this can reported easily.eg time and place (security)

NFR9:The app should maintain frequent updates for users to see once they open the app like available pumps (maintainability) 
