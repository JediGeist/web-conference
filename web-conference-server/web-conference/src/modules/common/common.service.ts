import { Injectable } from "@nestjs/common";

@Injectable()
export class CommonService {
    updateValue(oldValue: any, newValue: any): any {
        if (newValue == null) {
            return oldValue;
        }

        return newValue;
    }
}