import moment from "moment";
import filtersReducer from "../../reducers/filters";
import filters from "../../reducers/filters";

test("should setup default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

//should set text filter
test('should set text filter', () => {
    const text = 'This is my filter';
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_TEXT_FILTER', text};
    const state = filtersReducer(currentState, action);
    expect(state.text).toBe(text);
});

//should set startDate filter 
test('should set startDate', () => {
    const startDate = moment();
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_START_DATE', startDate};
    const state = filtersReducer(currentState, action);
    expect(state.startDate).toEqual(startDate);
});
//should set endDate filter
test('should set startDate', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = {type: 'SET_END_DATE', endDate: moment(0)};
    const state = filtersReducer(currentState, action);
    expect(state.endDate).toEqual(moment(0));
});