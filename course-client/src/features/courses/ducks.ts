import axiosClient from "../../axiosClient";

export const fetchCoursesActionType = {
    LOADING: 'courses/loading',
    SUCCEEDED: 'courses/succeeded',
    FAILURE: 'courses/failure'
};

export const coursesReducer = (state = {}, action: any) => {
    switch (action.type) {
        case fetchCoursesActionType.LOADING:
            return {
                ...state,
                loading: true,
                error: null,
                data: null
            };

        case fetchCoursesActionType.SUCCEEDED:
            return {
                ...state,
                loading: false,
                error: null,
                data: action.payload
            };

        case fetchCoursesActionType.FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: null
            };

        default:
            return {
                ...state
            }
    }
};

export const fetchCourses = () => (dispatch: any) => {
    dispatch({ type: fetchCoursesActionType.LOADING});

    axiosClient.get('/courses/').then((response) => {
        dispatch({ type: fetchCoursesActionType.SUCCEEDED, payload: response.data.courses });
    }).catch((error) => {
        dispatch({ type: fetchCoursesActionType.FAILURE, payload: error.error });
    })
};
