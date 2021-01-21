/** * Custom blocks */ //% weight=100 color=#d42926 icon="\uf1b9"
namespace Oscats {
    let mode = 0;
    let previousMode = 1;
    let RobotTimer = 0; //Main robot timer
    let RobotTimer_PERIOD = 20; // Fire every .20 seconds
    let ElapsedTimer = 0;
    let ElapsedTimerController = 0;
    let RobotInit: (params: any) => void
    let RobotPeriodic: (params: any) => void
    let AutoInit: (params: any) => void
    let AutoPeriodic: (params: any) => void
    let TeleInit: (params: any) => void
    let TelePeriodic: (params: any) => void
    let DisInit: (params: any) => void
    let DisPeriodic: (params: any) => void

        input.onButtonPressed(Button.A, function () {//Trigger Tele
            if (mode ==0){
                mode = 1;
            } else {
                mode =0;
            }
        })

        input.onButtonPressed(Button.B, function () {//Trigger Auto
            if (mode ==0){
                mode = 2;
            } else {
                mode =0;
            }
        })        
        //% block="getRobotMode()"
        export function getRobotMode() {
            let currentRobotMode = "disabled";
            switch(mode){
                case 0:
                currentRobotMode = "disabled";
                break;
                case 1:
                currentRobotMode = "Teleop";
                break;
                case 2:
                currentRobotMode = "Autonomous";
                break;
            }
            return currentRobotMode;
        }
                
        

        //% block="getTimer"
        export function getTimer() {
            ElapsedTimer = input.runningTime() - ElapsedTimerController;
            return ElapsedTimer;                 
        }

        //% block="resetTimer"
        export function resetTimer() {
            ElapsedTimerController = input.runningTime();                 
        }
        
        /**
         * This is a statement block with a parameter
         */
        //% block
        export function setNumber(variableName: string,value: number) {
        }
    
        //% block="robotInit()"
        export function robotInit(a: () => void): void {
            RobotInit = a;
        }

        //% block="robotPeriodic()"
        export function robotPeriodic(a: () => void): void {
            RobotPeriodic = a;   
        }

            //% block="autonomousInit()"
        export function autonomousInit(a: () => void): void {
            AutoInit=a;
        }

        //% block="autonomousPeriodic()"
        export function autonomousPeriodic(a: () => void): void {
            AutoPeriodic =  a;
        }

        //% block="teleopInit()"
        export function teleopInit(a: () => void): void {
            TeleInit = a;
        }

        //% block="teleopPeriodic()"
        export function teleopPeriodic(a: () => void): void {
            TelePeriodic = a;
        }

        //% block="disabledInit()"
        export function disabledInit(a: () => void): void {
        DisInit = a;
        }
        
        //% block="disabledPeriodic()"
        export function disabledPeriodic(a: () => void): void {
            DisPeriodic = a;
        }

        basic.forever(function () { //Let's keep a forever loop running inside our custom namespace. You could probably at a basic.pause at the bottom of the loop to slow down how fast it runs.
    //let nextEvent2Time = 0
    if (input.runningTime() > RobotTimer) {
        if (mode!=previousMode){//Trigger Init Functions
        switch(mode){
            case 1: //Tele
                if (TeleInit!=null){
                    TeleInit(null) //Fire the code
                }
                basic.showString("T");
            break;
            case 2: //Auto
                if (AutoInit!=null){
                    AutoInit(null) //Fire the code
                }
                basic.showString("A");
            break;  //Disabled
            default:
                if (DisInit!=null){
                    DisInit(null) //Fire the code
                }
                basic.showString("D");
        }
            
        }
        switch(mode){
            case 1: //Tele
                if (TelePeriodic!=null){
                    TelePeriodic(null) //Fire the code
                } else{
                    basic.showString("Tele");  
                }
            break;
            case 2: //Auto
                if (AutoPeriodic!=null){
                    AutoPeriodic(null) //Fire the code
                } else{
                    basic.showString("Auto");  
                }
            break;  //Disabled
            default:
                if (DisPeriodic!=null){
                    DisPeriodic(null) //Fire the code
                } else{
                    basic.showString("Dis");  
                } 
        }
        previousMode = mode;
        RobotTimer = input.runningTime() + RobotTimer_PERIOD //Set the next timer event
    }
    })    
}

