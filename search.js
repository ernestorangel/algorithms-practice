const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function linearSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (element == array[i]) return i;
  }
}

async function binarySearch(orderedArray, element) {
  let lowerIndex = 0;

  let higherIndex = orderedArray.length - 1;

  let middleIndex, middleElement;

  while (lowerIndex <= higherIndex) {
    middleIndex = Math.trunc((lowerIndex + higherIndex) / 2);
    middleElement = orderedArray[middleIndex];

    console.log(
      element,
      ":",
      orderedArray,
      "(",
      lowerIndex,
      middleIndex,
      higherIndex,
      ")",
    );

    await esperar(1000);

    if (element > middleElement) {
      lowerIndex = middleIndex + 1;
    } else if (element < middleElement) {
      higherIndex = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }

  return null;
}

const array1 = [1, 3, 5, 7, 9];

const elementPosition = await binarySearch(array1, 9);

console.log("The searched element is at position", elementPosition);
