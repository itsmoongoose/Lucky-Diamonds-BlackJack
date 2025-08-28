//Dictionary -- Binary & ASCII Characters
/* 
const chart = {
    "00100001": "!",
    ""

}
*/

//Defining Variables
let paddedNum = "";
let generatedNum = 0;
let menuChoice = "";
let generatedNumFixed = "";

//Function -- Padded Number
function padding() {
    paddedNum = String(generatedNum).padStart(8, '0');
}

//Function -- Main
async function main() {
    do {

        //Menu
        output("Choose one of the following: \n1. Create Binary Numbers \n2. Translate Binary Code");
        menuChoice = await input("");

        //Input Not Recognized
        while (menuChoice != "1" && menuChoice != "2") {
            menuChoice = await input("Sorry, I don't recognize what you're typing. Please try again: ");
        }

        //Creating Binary Number List
        if (menuChoice == "1") {

            //Listing Numbers
            for (let number = 0; number < 94; number = number + 1) {
                generatedNum = generatedNum + 1
                paddedNum = String(generatedNum).padStart(8, '0');

                //Checking For "2"
                let check = paddedNum.includes("2");
                if (check == true) {
                    let generatedNumber = generatedNum - 1;

                    //Finding Last 0
                    lastOccur = paddedNum.lastIndexOf("0");
                    output(lastOccur);

                    if (lastOccur = 7) {
                        
                    } else if (lastOccur = 6) {

                    } else if (lastOccur = 5) {

                    } else if (lastOccur = 4) {

                    } else if (lastOccur = 3) {

                    } else if (lastOccur = 2) {

                    } else if (lastOccur = 1) {

                    }






                    //Replacing lastOccur With 1
                    if (lastOccur == true) {
                        generatedNumFixed = paddedNum.slice(0, lastOccur) + "1" + paddedNum.slice(lastOccur + 1);
                    }
                    output(generatedNumFixed)
                } else {
                    output(paddedNum);
                }
            }
        }
        
        //Translating Binary Code
        else if (menuChoice == "2") {
            let binaryCode = await input("Please enter your binary code: ");
            binaryCode = binaryCode.trim();
            let binaryCodeArray = binaryCode.split(" ");
            for (let character of binaryCodeArray) {
            
            }
        }







    }
    while (menuChoice === String) {}
}