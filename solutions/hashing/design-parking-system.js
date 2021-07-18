/*

Problem

https://leetcode.com/problems/design-parking-system/

Approach
- Initialise the map in the constructor.
- If the parking slot is not available for the car type, then return false.
- Else reduce the count of slots for that car type and return true.

Time - O(1)
Space - O(1)

*/

class ParkingSystem {
    constructor(big, medium, small) {
        this.map = new Map();
        this.map.set(1, big);
        this.map.set(2, medium);
        this.map.set(3, small);
    }
    addCar(carType) {
        if (this.map.get(carType) === 0) {
            return false;
        }
        this.map.set(carType, this.map.get(carType) - 1);
        return true;
    }
}