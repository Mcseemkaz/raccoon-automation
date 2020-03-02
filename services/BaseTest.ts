
import { ApplicationManager } from "./ApplicationManager";
import { Application } from "spectron";

class BaseTest{
    appManager = new ApplicationManager();

    beforeEach( 
        function (){
         let app = this.appManager.getApp();
         return app.start();
        }
    );
    
    
    afterEach(){
        this.
    }
}