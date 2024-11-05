import { act, fireEvent, render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes, fetchAPI, submitAPI } from '../../pages/BookingPage/BookingPage';

describe("BookingForm", () => {
    beforeEach(() => {
        render(
            <BookingForm
                availableTimes={["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:30"]}
                selectedDate={"2024-11-04"}
                onDateChange={() => {}}
                submitForm={() => {}}
            />
        );
    })
    test('Displays the BookingForm Heading, Label, and Fields', () => {

        const headingElement = screen.getByText("Reserve a Table");
        expect(headingElement).toBeInTheDocument();

        const firstNameLabel = screen.getByText("First Name");
        expect(firstNameLabel).toBeInTheDocument();
        const firstNameField = screen.getByTestId("firstName");
        expect(firstNameField).toBeInTheDocument();

        const lastNameLabel = screen.getByText("Last Name");
        expect(lastNameLabel).toBeInTheDocument();
        const lastNameField = screen.getByTestId("lastName");
        expect(lastNameField).toBeInTheDocument();

        const emailLabel = screen.getByText("Email");
        expect(emailLabel).toBeInTheDocument();
        const emailField = screen.getByTestId("email");
        expect(emailField).toBeInTheDocument();

        const dateLabel = screen.getByText("Choose a Date");
        expect(dateLabel).toBeInTheDocument();
        const dateField = screen.getByTestId("date");
        expect(dateField).toBeInTheDocument();

        const timeLabel = screen.getByText("Choose a Time");
        expect(timeLabel).toBeInTheDocument();
        const timeField = screen.getByTestId("time");
        expect(timeField).toBeInTheDocument();

        const numGuestsLabel = screen.getByText("Number of Guests");
        expect(numGuestsLabel).toBeInTheDocument();
        const numGuestsField = screen.getByTestId("guests");
        expect(numGuestsField).toBeInTheDocument();

        const occasionLabel = screen.getByText("Occasion");
        expect(occasionLabel).toBeInTheDocument();
        const occasionField = screen.getByTestId("occasion");
        expect(occasionField).toBeInTheDocument();
    })

    test('Displays error when the Make Your Reservation button is clicked and something is empty', async () => {
        const submitBtn = screen.getByRole("button", { name: /Make Your Reservation/i});

        // click the submit btn and wait for any changes to happen
        await act(() => {
            fireEvent.click(submitBtn);
        })

        const firstNameErr = screen.getByText("*First name is required");
        expect(firstNameErr).toBeInTheDocument();

        const lastNameErr = screen.getByText("*Last name is required");
        expect(lastNameErr).toBeInTheDocument();

        const emailErr = screen.getByText("*Email is required");
        expect(emailErr).toBeInTheDocument();

        const timeErr = screen.getByText("*Reservation time required");
        expect(timeErr).toBeInTheDocument();
    })

    test('initializeTimes returns the correct expected value', () => {
        const initialDate = initializeTimes();
        const today = new Date().toISOString().split('T')[0];

        // check to see if selectedDate is today's date
        expect(initialDate.selectedDate).toEqual(today);
        // check to see if availableTimes is an array and the length of it is > 0
        expect(Array.isArray(initialDate.availableTimes)).toBe(true);
        expect(initialDate.availableTimes.length).toBeGreaterThan(0);

        // loop through availableTimes to make sure it contains valid time strings
        // initialDate.availableTimes.forEach(time => {
        //     const isValidTime = /^(1[0-9]|[1-9]):[0-5][0-9]$/.test(time);
        //     expect(isValidTime).toBe(true);
        // })
    })

    test('updateTimes return the correct expected value', () => {
        const state = {
            selectedDate: "2024-11-04",
            availableTimes: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:30"]
        }

        const action = { type: "SOME_ACTION" };
        const newState = updateTimes(state, action);

        expect(newState).toEqual(state);
    })

    test('submitAPI returns true', () => {
        const formData = {
            firstName: "John",
            lastName: "Doe",
            email: "johndoe@gmail.com",
            date: "2024-11-04",
            time: "18:00",
            guests: 2,
            occasion: "Other"
        }

        const result = submitAPI(formData);
        expect(result).toBe(true);
    })

    // test('submitAPI returns false when data is empty', () => {
    //     const formData = {}

    //     const result = submitAPI(formData);
    //     expect(result).toBe(false);
    // })
})
