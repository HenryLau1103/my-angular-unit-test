import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

describe("AppComponent", () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(AppComponent);
    });

    it("should create AppComponent", () => {
        // arrange
        let expected = true;

        // act
        let actual = fixture.componentInstance instanceof AppComponent;

        // assert
        expect(actual).toBe(expected);
    });

    it("should have expected <h1> text", () => {
        // arrange
        let expectedPattern = /^This is Angular \d\.\d\.\d$/g;
        let message = "<h1>should display \"This is Angular\" and version number.";

        // act
        fixture.detectChanges();
        let actual = fixture.debugElement.query(By.css("h1")).nativeElement.innerText;

        // assert
        expect(actual).toMatch(expectedPattern, message);
    });

    it("Test Case 1", () => expect(true).toBe(true, "should return true"));
    it("Test Case 2", () => expect(true).toBe(false, "should return true"));
});
