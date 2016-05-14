import {Component, Directive} from "@angular/core";
import {NgRobotButtonComponent} from "./atoms/ngRobotButton/ng-robot-button.component"

@Component({
    selector: "my-app",
    template: `
        <StackLayout>
            <Label text="Tap the button" class="title"></Label>
            
            <Button text="TAP" (tap)="onTap()"></Button>

            <ng-robot-button></ng-robot-button>

            <Label [text]="message" class="message" textWrap="true"></Label>
        </StackLayout>
    `,
    directives: [NgRobotButtonComponent]
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
