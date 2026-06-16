const TOTAL_FLOORS = 10;
const TOTAL_ELEVATORS = 5;
const FLOOR_HEIGHT = 70;
const MOVE_TIME_PER_FLOOR = 300;

const building = document.getElementById("building");
const ding = document.getElementById("ding");

const statusPanel = document.getElementById("status-panel");

const elevators = [];
const pendingCalls = [];


//    BUILD UI
function createBuilding() {
    for (let floor = TOTAL_FLOORS - 1; floor >= 0; floor--) {

        const floorRow = document.createElement("div");
        floorRow.className = "floor";

        const label = document.createElement("div");
        label.className = "floor-label";
        label.textContent =
            floor === 0 ? "Ground Floor" : `${floor} Floor`;

        const shafts = document.createElement("div");
        shafts.className = "shafts";

        for (let i = 0; i < TOTAL_ELEVATORS; i++) {

            const shaft = document.createElement("div");
            shaft.className = "shaft";

            if (floor === 0) {
                const elevator = document.createElement("div");
                elevator.className = "elevator";
                elevator.id = `elevator-${i}`;

                shaft.appendChild(elevator);

                elevators.push({
                    id: i,
                    currentFloor: 0,
                    busy: false,
                    element: elevator
                });
            }

            shafts.appendChild(shaft);
        }

        const button = document.createElement("button");
        button.className = "call-btn";
        button.textContent = "Call";

        button.addEventListener("click", () => {
            callElevator(floor, button);
        });

        floorRow.appendChild(label);
        floorRow.appendChild(shafts);
        floorRow.appendChild(button);

        building.appendChild(floorRow);
    }
}

createBuilding();

//    CALL ELEVATOR
function callElevator(floor, button) {

    if (button.classList.contains("waiting")) return;

    button.classList.add("waiting");
    button.textContent = "Waiting";

    const elevator = findNearestAvailableElevator(floor);

    if (elevator) {
        moveElevator(elevator, floor, button,
            
        );
    } else {
        pendingCalls.push({ floor, button });
    }
}

//    FIND CLOSEST ELEVATOR

function findNearestAvailableElevator(targetFloor) {

    const available = elevators.filter(e => !e.busy);

    if (!available.length) return null;

    available.sort((a, b) => {
        return (
            Math.abs(a.currentFloor - targetFloor) -
            Math.abs(b.currentFloor - targetFloor)
        );
    });

    return available[0];
}
//    MOVE ELEVATOR

function moveElevator(elevator, targetFloor, button) {

    elevator.busy = true;

    const distance =
        Math.abs(targetFloor - elevator.currentFloor);

    const travelTime =
        distance * MOVE_TIME_PER_FLOOR;


        // ----------------------------------------
    //     let remainingTime = travelTime / 1000;

    // const timer = setInterval(() => {

    //     statusPanel.textContent =
    //     `Elevator ${elevator.id + 1}
    //     reaching Floor ${targetFloor}
    //     in ${remainingTime}s`;

    //     remainingTime--;

    // }, 1000);
    // --------------------------------------------------


    statusPanel.textContent =
        `Elevator ${elevator.id + 1} is moving to Floor ${targetFloor}.
Estimated Time: ${travelTime / 1000} sec`;

    elevator.element.classList.add("moving");

    const translateY =
        -(targetFloor * FLOOR_HEIGHT);

    elevator.element.style.transitionDuration =
        `${travelTime}ms`;

    elevator.element.style.transform =
        `translateY(${translateY}px)`;

    const startTime = Date.now();

    setTimeout(() => {

        const endTime = Date.now();
        const actualTime =
            ((endTime - startTime) / 1000).toFixed(2);
        statusPanel.textContent =
            `Elevator ${elevator.id + 1}
reached Floor ${targetFloor}
in ${actualTime} seconds`;

        console.log(
            `Elevator ${elevator.id} reached floor ${targetFloor}
             in ${actualTime}s`
        );

        ding.play();

        elevator.currentFloor = targetFloor;

        elevator.element.classList.remove("moving");
        elevator.element.classList.add("arrived");

        button.textContent = "Arrived";
        button.classList.remove("waiting");
        button.classList.add("arrived");

        setTimeout(() => {

            elevator.element.classList.remove("arrived");

            button.textContent = "Call";
            button.classList.remove("arrived");

            elevator.busy = false;

            processQueue();

        }, 2000);

    }, travelTime);
}

//    PROCESS QUEUE

function processQueue() {

    if (!pendingCalls.length) return;

    const availableElevator =
        elevators.find(e => !e.busy);

    if (!availableElevator) return;

    const nextCall = pendingCalls.shift();

    moveElevator(
        availableElevator,
        nextCall.floor,
        nextCall.button
    );
}