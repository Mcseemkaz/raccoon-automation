import { Application } from "spectron";
import * as settings from "../settings.json"

export class ApplicationManager {

    getApp(): Application{
        let app =  new Application({
            path: settings.path
        });
        return app;
        
    }
}

